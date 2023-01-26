import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listUser } from "../../../../../route/function/user";
import { EditOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import vector from "../../../../../image/vector.png";
import vector_1 from "../../../../../image/vector (1).png";
import plus from "../../../../../image/add.png";
import viewButton from "../../../../../image/Button.png";
import more_vert from "../../../../../image/more_vert.png";

import "../../listUser/listuser.css";
import Viewlist_teacher from "../../../componentReuse/viewlist_teacher";

function ListTeacher() {
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [openViewList, setOpenViewList] = useState(false);
  const [teacherId, setTeacherId] = useState("");
  // const [vales, setValues] = useContext();
  useEffect(() => {
    loadData(user.token);
    // sendId(user.token);
  }, [user.token]);

  const onClickLinkEditPage = (id) => {
    setTeacherId(id);
  };

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
        className={`list_user_page ${
          openViewList && "list_user_page_inactive"
        }`}
      >
        <div className="list_user_title">
          <h1>รายชื่อผู้ใช้งาน(อาจารย์)</h1>
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
            <div className="add_document_container">
              <div
                className="add_document"
                onClick={() => navigate("/admin-page/create-teacher")}
              >
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
                <th scope="col">Active</th>
                <th scope="col">{""}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((users, index) => {
                return (
                  <tr>
                    <td>{users.student_id}</td>
                    <td>{"ผศ."}</td>
                    <td>{users.user_fullname}</td>
                    <td>{users.faculty}</td>
                    <td>{"วิศวกรรมซอฟต์แวร์"}</td>
                    <td>{users.email}</td>
                    <td>{"Active"}</td>
                    {/* <Link to={`/admin-page/edit-teacher/${users._id}`}> */}
                    <td>
                      <div className="list_view_delete">
                        <img
                          src={viewButton}
                          onClick={() => (
                            setOpenViewList(true),
                            onClickLinkEditPage(users._id)
                          )}
                        />
                        <img src={more_vert} />
                      </div>
                      {/* <p onClick={navigate(`/admin-page/edit-user/${users._id}`)}> */}
                      {/* <EditOutlined /> */}
                      {/* </p> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={
          openViewList
            ? "view_user_container_active"
            : "view_user_container_inactive"
        }
      >
        <div
          className={openViewList ? "view_user_active" : "view_user_inactive"}
        >
          {openViewList ? (
            <Viewlist_teacher
              id={teacherId}
              onClose={() => setOpenViewList(false)}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default ListTeacher;
