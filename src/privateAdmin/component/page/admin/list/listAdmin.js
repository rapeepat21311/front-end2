import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listUser } from "../../../../../route/function/user";
import { EditOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "../../listUser/listuser.css";

function ListAdmin() {
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  // const [vales, setValues] = useContext();
  useEffect(() => {
    loadData(user.token);
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
    listUser(authtoken)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="layout_body">
      <div className="list_user_page">
        <div className="list_user_title">
          <h1>รายชื่อผู้ใช้งาน(นักศึกษา)</h1>
        </div>
        <div className="search_text">
          <div className="search">
            <input placeholder="seacrch" type="search" />
            <SearchIcon />
          </div>
          <div className="list_user_text_option">
            <select>
              <option>
                <AccountCircleIcon /> Text
              </option>
            </select>
            <select>
              <option>Text</option>
            </select>
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
                {/* <th scope="col">ภาคการศึกษา</th> */}
                <th scope="col">อีเมล</th>
                <th scope="col">สถานะ</th>
                <th scope="col">{""}</th>
                {/* <th scope="col">{""}</th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((users, index) => {
                return (
                  <tr>
                    <td>{users.student_id}</td>
                    <td>{users.user_fullname}</td>
                    <td>{users.faculty}</td>
                    <td>{"วิศวกรรมซอฟต์แวร์"}</td>
                    {/* <td>{users.year}</td> */}
                    <td>{users.email}</td>
                    <td>offline</td>
                    {/* <td>....</td> */}
                    <Link to={`/admin-page/edit-admin/${users._id}`}>
                      <td>
                        {/* <p onClick={navigate(`/admin-page/edit-user/${users._id}`)}> */}
                        <EditOutlined />
                        {/* </p> */}
                      </td>
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListAdmin;
