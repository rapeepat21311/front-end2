import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { userReducerConst } from "../component/reducer/consUserRed";
import AdminRoutes from "./AdminRoutes";
import UserRouter from "./userRouter";
// Page Andmin
import Admin from "../privateAdmin";
import Layout from "../privateAdmin/navBar/NavBar";
import ListUser from "../privateAdmin/component/page/listUser/ListUser";
//Page User
import Home from "../page/home";
import Login from "../page/Login/Login";
import Eport from "../page/eport/eport";
import Perform from "../page/perform/perform";
import Classl from "../page/class/class";
import Result from "../page/result/result";
import News from "../page/news/news";
import NotFound from "../page/notFound";
import Profile from "../page/profile/index";
import { currentUser } from "./function/auth";
import { useDispatch } from "react-redux";

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

        {/* Check default Path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default PrivateRoute;
