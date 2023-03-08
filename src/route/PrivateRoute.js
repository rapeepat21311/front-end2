import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userReducerConst } from "../component/reducer/consUserRed";
import { currentUser } from "./function/auth";
import AdminRoutes from "./AdminRoutes";
import UserRouter from "./userRouter";
// Page Andmin
import Admin from "../privateAdmin";
import Layout from "../privateAdmin/navBar/NavBar";
import ListUser from "../privateAdmin/component/page/listUser/ListUser";
import Createuser from "../privateAdmin/component/page/createUser/Createuser";
import EditUser from "../privateAdmin/component/page/editUser/EditUser";
import CreateTeacher from "../privateAdmin/component/page/teacher/create/createTeacher";
import ListTeacher from "../privateAdmin/component/page/teacher/list/listTeacher";
import ListAdmin from "../privateAdmin/component/page/admin/list/listAdmin";
import EditAdmin from "../privateAdmin/component/page/admin/edit/editAdmin";
import ListTeacherStudent from "../privateAdmin/component/page/manageTeacherStudent/listTeacher/listTeacherStudent";
import AddTeacherManageStudent from "../privateAdmin/component/page/manageTeacherStudent/addTeacher/addTeacher";
import EditTeachersManageStudent from "../privateAdmin/component/page/manageTeacherStudent/editTeachers/editTeachers";
import CreateAdmin from "../privateAdmin/component/page/admin/create/createAdmin";
import EditTeacher from "../privateAdmin/component/page/teacher/edit/editTeacher";
import CapitalBurdenList from "../privateAdmin/component/page/capitalBurden/capitalBurdenList/capitalBurdenList";
import Capital_burden_add from "../privateAdmin/component/page/capitalBurden/capitalBurdenAdd/capital_burden_add";
import Capital_burden_edit from "../privateAdmin/component/page/capitalBurden/capitalBurdenEdit/capital_burdent_edit";
import ActivityHoursList from "../privateAdmin/component/page/activityHours/activityHoursList/activityHoursList";
import Add_activity_hours from "../privateAdmin/component/page/activityHours/activityHoursAdd/add_activity_hours";
import Edit_activity_hours from "../privateAdmin/component/page/activityHours/activityHoursEdit/edit_activity_hours";
import GradeList from "../privateAdmin/component/page/grade/gradeList/gradeList";
import Timetable from "../privateAdmin/component/page/timeTable/timeTableList/timeTableList";
import Add_time_table from "../privateAdmin/component/page/timeTable/addTimeTable/add_time_table";
import Edit_time_table from "../privateAdmin/component/page/timeTable/editTimeTable/edit_time_table";
import TesttableList from "../privateAdmin/component/page/testTable/testTableList/testTableList";
import Add_test_table from "../privateAdmin/component/page/testTable/addTesttable/add_test_table";
import Edit_test_table from "../privateAdmin/component/page/testTable/editTesttable/edit_test_table";
import PerformanceList from "../privateAdmin/component/page/performance/performanceList/performanceList";
import Add_performance from "../privateAdmin/component/page/performance/addPerformance/add_performance";
import Edit_performance from "../privateAdmin/component/page/performance/editPerformance/edit_performance";
import NewsList from "../privateAdmin/component/page/news/newsList/newsList";
import CreateNews from "../privateAdmin/component/page/news/createNews/createNews";
import EditNews from "../privateAdmin/component/page/news/editNews/editNews";
import EventsList from "../privateAdmin/component/page/events/eventsList/eventsList";
import CreateEvent from "../privateAdmin/component/page/events/createEvent/createEvent";
import EditEvent from "../privateAdmin/component/page/events/editEvent/editEvent";
//Page User
import Home from "../page/home";
import Login from "../page/Login/Login";
import Eport from "../page/eport/eport";
import Perform from "../page/perform/index";
import Classl from "../page/class/index";
import Result from "../page/result/result";
import News from "../page/news/news";
import NotFound from "../page/notFound";
import Profile from "../page/profile/index";
import LastesNews from "../page/news/lastedNews";
import LastedEvent from "../page/news/lastedEvent";
import Detail from "../page/perform/detail/detailPer";
import LastedNewsDes from "../page/news/lastedNews/component/description/LastedNewsDes";
import LastedEventDes from "../page/news/lastedEvent/component/description/lasted_event";
import PerformAdd from "../page/perform/performAdd/performAdd";
import PerformEdit from "../page/perform/performEdit/performEdit"
import CV from "../component/cv/cv"
import FavoriteNews from "../page/news/favoriteNews/favorite_news"
import EventDetail from "../page/profile/events/eventDetail";

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
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Home />} />

        <Route path="/eport" element={<Eport />} />

        <Route path="/perform" element={<Perform />} />

        <Route path="/classl" element={<Classl />} />

        <Route path="/result" element={<Result />} />

        <Route path="/detail" element={<Detail />} />

        <Route path="/performAdd" element={<PerformAdd />} />

        <Route path="/performEdit" element={<PerformEdit/>} />

        <Route path="/CurriculumVitae" element={<CV/>} />

        <Route path="/favorite" element={<FavoriteNews />} />




        <Route
          path="/eport"
          element={
            <UserRouter>
              <Eport />
            </UserRouter>
          }
        />
        <Route path="/news" element={<News />} />
        <Route path="/news/favorite" element={<FavoriteNews />} />
        <Route path="/news/last-news" element={<LastesNews />} />
        <Route path="/news/last-news/description" element={<LastedNewsDes />} />
        <Route path="/news/last-events" element={<LastedEvent />} />
        <Route
          path="/news/last-events/description"
          element={<LastedEventDes />}
        />

        <Route
          path="/profile"
          element={
            <UserRouter>
              <Profile />
            </UserRouter>
          }
        />
        <Route path="/profile/event-detail" element={<EventDetail/>}

        />

        {/* Router Admin */}

        <Route
          path="/admin-page/create-user"
          element={
            <AdminRoutes>
              <Layout>
                <Createuser />
              </Layout>
            </AdminRoutes>
          }
        />

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
          path="/admin-page/create-user"
          element={
            <AdminRoutes>
              <Layout>
                <Createuser />
              </Layout>
            </AdminRoutes>
          }
        />

        <Route
          path={`/admin-page/edit-user/:id`}
          element={
            <AdminRoutes>
              <Layout>
                <EditUser />
              </Layout>
            </AdminRoutes>
          }
        />

        <Route
          path="/admin-page/list-teacher"
          element={
            <AdminRoutes>
              <Layout>
                <ListTeacher />
              </Layout>
            </AdminRoutes>
          }
        />

        <Route
          path={`/admin-page/create-teacher`}
          element={
            <AdminRoutes>
              <Layout>
                <CreateTeacher />
              </Layout>
            </AdminRoutes>
          }
        />

        <Route
          path={`/admin-page/edit-teacher/:id`}
          element={
            <AdminRoutes>
              <Layout>
                <EditTeacher />
              </Layout>
            </AdminRoutes>
          }
        />

        <Route
          path="/admin-page/list-admin"
          element={
            <AdminRoutes>
              <Layout>
                <ListAdmin />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path="/admin-page/create-admin"
          element={
            <AdminRoutes>
              <Layout>
                <CreateAdmin />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/edit-admin/:id`}
          element={
            <AdminRoutes>
              <Layout>
                <EditAdmin />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/manage-teacher`}
          element={
            <AdminRoutes>
              <Layout>
                <ListTeacherStudent />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/add-teacher-student-inclass`}
          element={
            <AdminRoutes>
              <Layout>
                <AddTeacherManageStudent />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/edit-teacher-student-inclass/:id`}
          element={
            <AdminRoutes>
              <Layout>
                <EditTeachersManageStudent />
              </Layout>
            </AdminRoutes>
          }
        />
        {/* capital_burden_page */}
        <Route
          path={`/admin-page/list-capital-burden`}
          element={
            <AdminRoutes>
              <Layout>
                <CapitalBurdenList />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/add-capital-burden`}
          element={
            <AdminRoutes>
              <Layout>
                <Capital_burden_add />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/edit-capital-burden/:id`}
          element={
            <AdminRoutes>
              <Layout>
                <Capital_burden_edit />
              </Layout>
            </AdminRoutes>
          }
        />

        {/* activityhour_page */}
        <Route
          path={`/admin-page/list-activity-hours`}
          element={
            <AdminRoutes>
              <Layout>
                <ActivityHoursList />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/add-activity-hours`}
          element={
            <AdminRoutes>
              <Layout>
                {" "}
                <Add_activity_hours />{" "}
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/edit-activity-hours/:id`}
          element={
            <AdminRoutes>
              <Layout>
                {" "}
                <Edit_activity_hours />{" "}
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/list-grade`}
          element={
            <AdminRoutes>
              <Layout>
                <GradeList />
              </Layout>
            </AdminRoutes>
          }
        />
        {/* titme table page */}
        <Route
          path={`/admin-page/list-timetable`}
          element={
            <AdminRoutes>
              <Layout>
                <Timetable />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/add-timetable`}
          element={
            <AdminRoutes>
              <Layout>
                <Add_time_table />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/edit-timetable/:id`}
          element={
            <AdminRoutes>
              <Layout>
                <Edit_time_table />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/list-testtable`}
          element={
            <AdminRoutes>
              <Layout>
                <TesttableList />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/add-testtable`}
          element={
            <AdminRoutes>
              <Layout>
                <Add_test_table />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/edit-testtable/:id`}
          element={
            <AdminRoutes>
              <Layout>
                <Edit_test_table />
              </Layout>
            </AdminRoutes>
          }
        />
        {/* Performance page */}

        <Route
          path={`/admin-page/list-performance`}
          element={
            <AdminRoutes>
              <Layout>
                <PerformanceList />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/add-performance`}
          element={
            <AdminRoutes>
              <Layout>
                <Add_performance />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/edit-performance/:id`}
          element={
            <AdminRoutes>
              <Layout>
                <Edit_performance />
              </Layout>
            </AdminRoutes>
          }
        />
        {/* news-admin */}
        <Route
          path={`/admin-page/list-news`}
          element={
            <AdminRoutes>
              <Layout>
                <NewsList />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/create-news`}
          element={
            <AdminRoutes>
              <Layout>
                <CreateNews />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/edit-news/:id`}
          element={
            <AdminRoutes>
              <Layout>
                <EditNews />
              </Layout>
            </AdminRoutes>
          }
        />

        <Route
          path={`/admin-page/list-events`}
          element={
            <AdminRoutes>
              <Layout>
                <EventsList />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/create-events`}
          element={
            <AdminRoutes>
              <Layout>
                <CreateEvent />
              </Layout>
            </AdminRoutes>
          }
        />
        <Route
          path={`/admin-page/edit-events/:id`}
          element={
            <AdminRoutes>
              <Layout>
                <EditEvent />
              </Layout>
            </AdminRoutes>
          }
        />

        {/* Check default Path */}
        {/* <Route path="/test" element={<CreateBox />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default PrivateRoute;
