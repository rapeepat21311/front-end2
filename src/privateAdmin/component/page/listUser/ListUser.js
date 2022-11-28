import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listUser, updateUser } from "../../../../route/function/user";
import { EditOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

function ListUser() {
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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">เลขทะเบียนนักศึกษา</th>
            <th scope="col">ชื่อ-นามสกุล</th>
            <th scope="col">ปีการศึกษา</th>
            <th scope="col">ภาคการศึกษา</th>
            <th scope="col">สาขาวิชา</th>
            <th scope="col">สถานภาพ</th>
            <th scope="col">สถานะ</th>
            <th scope="col">active</th>
            <th scope="col">แก้ไข</th>
          </tr>
        </thead>
        <tbody>
          {data.map((users, index) => {
            return (
              <tr>
                <td>{users.student_id}</td>
                <td>
                  {users.prefix_name} {users.name_th} {users.lastname_th}
                </td>
                <td>{users.year}</td>
                <td>{users.education_level}</td>
                <td>{users.faculty}</td>
                <td>{users.email}</td>
                <td>{users.student_status}</td>
                <td>....</td>
                <Link to={`/admin-page/edit-user/${users._id}`}>
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
  );
}

export default ListUser;
