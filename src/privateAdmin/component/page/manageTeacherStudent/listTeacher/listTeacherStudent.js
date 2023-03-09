import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listUser } from "../../../../../route/function/user";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

import vector from "../../../../../image/vector.png";
import vector_1 from "../../../../../image/vector (1).png";
import plus from "../../../../../image/add.png";
import viewButton from "../../../../../image/Button.png";
import more_vert from "../../../../../image/more_vert.png";

import "../../listUser/listuser.css";
import "./listTeacherStudent.css";
import Viewlist_teacher_student from "../../../componentReuse/viewlist_student_teacher";
import Pagination_admin from "../../../componentReuse/paginationAdmin/pagination_admin";
import { avisorList } from "../../../../../route/function/teacher";

function ListTeacherStudent() {
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [viewuser, setViewuser] = useState(false);
  const [userId, setUserId] = useState("");

  const [userlistPerpage, setUserListPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageText, setPageText] = useState(1);
  const [pageTextPerpage, setPageTextPerpage] = useState(15);
  const [pageNumberLimit, setPageNumberLimit] = useState(6);
  const [maxPageLimit, setMaxPageLimit] = useState(6);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const userIdData = (_id) => {
    setUserId(_id);
  };

  // const [vales, setValues] = useContext();
  useEffect(() => {
    loadData(user.token);
    console.log("data --->", data);
    // sendId(user.token);
  }, [user.token]);

  // const sendId = (authtoken, id, vales) => {
  //   updateUser(authtoken, id, vales)
  //     .then((res) => {
  //       console.log("ส่งไอดีได้บ่อ", res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // console.log(sendId);

  const loadData = (authtoken) => {
    avisorList(authtoken)
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="Test_opacity">
        <div
          className={`list_user_page ${viewuser && "list_user_page_inactive"}`}
        >
          <div className="list_user_title">
            <h1>อาจารย์ที่ปรึกษา</h1>
          </div>
          <div className="search_text">
            <div className="search_left_container">
              <div className="search">
                <input placeholder="Search" type="search" />
                <SearchIcon />
              </div>
              <div className="select_filter">
                <select>
                  <option>รหัสอาจารย์</option>
                  <option>รหัสอาจารย์ 1</option>
                </select>
              </div>
              <div className="select_faculty">
                <select>
                  <option>คณะ</option>
                  <option>คณะ2</option>
                </select>
              </div>
            </div>
            <div className="list_user_text_option">
              <div className="export_document_container">
                <div className="export_document">
                  <button>ส่งออกข้อมูล</button>
                  <img src={vector} />
                </div>
              </div>
              <div className="import_document_container">
                <div className="import_document">
                  <button>นำเข้าข้อมูล</button>
                  <img src={vector_1} />
                </div>
              </div>
              <div
                className="add_document_container"
                onClick={() =>
                  navigate("/admin-page/add-teacher-student-inclass")
                }
              >
                <div className="add_document">
                  <img src={plus} />
                  <button>เพิ่มข้อมูล</button>
                </div>
              </div>
            </div>
          </div>

          <div className="table_user_teacher">
            <table>
              <thead>
                <tr>
                  <th scope="col">รหัสอาจารย์</th>
                  <th scope="col">ตำแหน่ง</th>
                  <th scope="col">ชื่อ-นามสกุล</th>
                  <th scope="col">คณะ</th>
                  <th scope="col">สาขา</th>
                  <th scope="col">อีเมล</th>
                  <th scope="col">นักศึกษาในการดูแล</th>
                  <th scope="col">{""}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((users, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {/* test */}
                        {users.teacher_id}
                      </td>
                      <td>{users.teacher_position}</td>
                      <td>{users.teacher_fullname}</td>
                      <td>{users.teacher_faculty}</td>
                      <td>{users.teacher_major}</td>
                      <td>{users.email_education}</td>
                      <td>{users.user_lenght}</td>
                      {/* <Link to={`/admin-page/edit-teacher/${users._id}`}> */}
                      <td>
                        <div className="list_view_delete">
                          <img
                            src={viewButton}
                            onClick={() => {
                              setViewuser(true);
                              userIdData(users._id);
                            }}
                          />
                          <img src={more_vert} />
                        </div>
                        {/* <p onClick={navigate(`/admin-page/edit-user/${users._id}`)}> */}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Pagination_admin
            volunteerHoursPerPage={userlistPerpage}
            totalVolunteerHours={data.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPageLimit={maxPageLimit}
            setMaxPageLimit={setMaxPageLimit}
            setMinPageLimit={setMinPageLimit}
            minPageLimit={minPageLimit}
            pageNumberLimit={pageNumberLimit}
            pageText={pageText}
            setPageText={setPageText}
            setTextPerPage={setPageTextPerpage}
            pageTextPerpage={pageTextPerpage}
            documentLength={data.length}
          />
        </div>
      </div>
      <div
        className={
          viewuser
            ? "view_user_container_active"
            : "view_user_container_inactive"
        }
      >
        <div className={viewuser ? "view_user_active" : "view_user_inactive"}>
          {viewuser ? (
            <Viewlist_teacher_student
              onClose={() => setViewuser(false)}
              id={userId}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default ListTeacherStudent;
