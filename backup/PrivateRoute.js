import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { userReducerConst } from "../src/component/reducer/consUserRed";
import AdminRoutes from "../src/route/AdminRoutes";
import UserRouter from "../src/route/userRouter";
// Page Andmin
import Admin from "../src/privateAdmin";
import Layout from "../src/privateAdmin/navBar/NavBar";
import ListUser from "../src/privateAdmin/component/page/listUser/ListUser";
//Page User
import Home from "../src/page/home";
import Login from "../src/page/Login/Login";
import Eport from "../src/page/eport/eport";
import Perform from "../src/page/perform/perform";
import Classl from "../src/page/class/index";
import Result from "../src/page/result/result";
import News from "../src/page/news/news";
import NotFound from "../src/page/notFound";
import Profile from "../src/page/profile/index";
import { currentUser } from "../src/route/function/auth";
import { useDispatch } from "react-redux";
// import EditUser from "../privateAdmin/component/page/editUser/EditUser";

function PrivateRoute() {
  const dispatch = useDispatch();
  const idToken = localStorage.token;
  if (idToken) {
    currentUser(idToken)
      .then((res) => {
        dispatch({
          type: userReducerConst.LOG_IN,
          payload: {
            token: idToken,
            username: res.data.username,
            role: res.data.role,
            studentId: res.data.studentId,
            idNumber: res.data.idNumber,
            nameTh: res.data.nameTh,
            nameEng: res.data.nameEng,
            faculty: res.data.faculty,
            major: res.data.major,
            email: res.data.email,
            phoneNumber: res.data.phoneNumber,
            educationLevel: res.data.educationLevel,
            year: res.data.year,
            oldSchool: res.data.oldSchool,
            status: res.data.status,
            advisor: res.data.advisor,
            aa: res.data.aa,
            phone_number_advisor: res.data.phone_number_advisor,
            email_advisor: res.data.email_advisor,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />

        <Route path="/eport" element={<Eport />} />

        <Route path="/perform" element={<Perform />} />

        <Route path="/classl" element={<Classl />} />

        <Route path="/result" element={<Result />} />

        <Route
          path="/eport"
          element={
            <UserRouter>
              <Eport />
            </UserRouter>
          }
        />

        <Route path="/news" element={<News />} />

        <Route
          path="/profile"
          element={
            <UserRouter>
              <Profile />
            </UserRouter>
          }
        />
        {/* Router Admin */}
        <Route
          path="/admin-page"
          element={
            <AdminRoutes>
              <Layout>
                <Admin />
              </Layout>
            </AdminRoutes>
          }
        />

        <Route
          path="/admin-page/list-user"
          element={
            <AdminRoutes>
              <Layout>
                <ListUser />
              </Layout>
            </AdminRoutes>
          }
        />

        <Route
          path="/admin-page/edit-user"
          element={
            <AdminRoutes>
              <Layout>
                {/* <EditUser /> */}
              </Layout>
            </AdminRoutes>
          }
        />

        {/* Check default Path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default PrivateRoute;
