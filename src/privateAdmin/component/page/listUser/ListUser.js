import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  deleteUser,
  listUser,
  updateUser,
} from "../../../../route/function/user";
import Swal from "sweetalert2";
import { EditOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Keyboard_arrow from "../../../../image/keyboard_arrow_left.png";
import vector from "../../../../image/vector.png";
import vector_1 from "../../../../image/vector (1).png";
import plus from "../../../../image/add.png";
import viewButton from "../../../../image/Button.png";
import more_vert from "../../../../image/more_vert.png";

import "./listuser.css";
import Viewlist from "../../componentReuse/viewlist";
import Pagination_admin from "../../componentReuse/paginationAdmin/pagination_admin";

function ListUser() {
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [viewuser, setViewuser] = useState(false);
  const [userId, setUserId] = useState("");
  const [data, setData] = useState([]);
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

  useEffect(() => {
    loadData(user.token);
  }, []);

  useEffect(() => {
    if (search.length > 2) {
    }
  }, []);

  const onDeleteUser = (ID) => {
    Swal.fire({
      titleText: "คุณต้องการที่จะลบ ใช่หรือไม่?",
      icon: "warning",
      confirmButtonColor: "green",
      confirmButtonText: "ยืนยัน",
      showCloseButton: true,
      closeButtonHtml: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(user.token, ID)
          .then((res) => {
            Swal.fire({
              titleText: res.data.msg,
              showCloseButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload(false);
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const loadData = (authtoken) => {
    listUser(authtoken)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className={`list_user_page ${viewuser && "list_user_page_inactive"}`}
      >
        <div className="list_user_title">
          {/* <img src={Keyboard_arrow} /> */}
          <h1>รายชื่อผู้ใช้งาน(นักศึกษา)</h1>
        </div>
        <div className="search_text">
          <div className="search_left_container">
            <div className="search">
              <input placeholder="Search" type="search" />
              <SearchIcon />
            </div>
            <div className="select_filter">
              <select>
                <option>รหัสนักศึกษา</option>
                <option>รหัสนักศึกษา 1</option>
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
            <div className="add_document_container">
              <div className="add_document">
                <img src={plus} />
                <button onClick={() => navigate("/admin-page/create-user")}>
                  เพิ่มข้อมูล
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th scope="col">รหัสนักศึกษา</th>
                <th scope="col">ชื่อ-นามสกุล</th>
                <th scope="col">คณะ</th>
                <th scope="col">สาขา</th>
                <th scope="col">อีเมล</th>
                <th scope="col">สถานะ</th>
                <th scope="col">{""}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((users, index) => {
                return (
                  <>
                    <tr key={user._id}>
                      <td>{users.student_id}</td>
                      <td>{users.user_fullname_th}</td>
                      <td>{users.faculty}</td>
                      <td>{users.major}</td>
                      <td>{users.student_email_education}</td>
                      <td>{"offline"}</td>
                      {/* <Link to={`/admin-page/edit-user/${users._id}`}> */}
                      <td>
                        <div className="list_view_delete">
                          <img
                            src={viewButton}
                            onClick={() => (
                              setViewuser(!viewuser), userIdData(users._id)
                            )}
                          />
                          <img
                            src={more_vert}
                            onClick={() => onDeleteUser(users._id)}
                          />
                        </div>
                        {/* <p onClick={navigate(`/admin-page/edit-user/${users._id}`)}> */}
                        {/* <EditOutlined /> */}
                        {/* </p> */}
                      </td>
                      {/* </Link> */}
                    </tr>
                  </>
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
          pageTextPerpage={pageTextPerpage}
          documentLength={data.length}
        />
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
            <Viewlist
              onClose={() => setViewuser(false)}
              id={userId}
              // data={datamock}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default ListUser;
