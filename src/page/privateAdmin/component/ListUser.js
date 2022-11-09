import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listUser } from "../../../route/function/user";
import NavBar from "../navBar/NavBar";

function ListUser() {
  const { user } = useSelector((state) => ({ ...state }));

  const [data, setData] = useState([]);

  useEffect(() => {
    loadData(user.token);
    console.log(data._id);
  }, []);

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
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((users, index) => {
            return (
              <tr>
                <th>{users.studentId}</th>
                <td>{users.nameTh}</td>
                <td>{users.year}</td>
                <td>{users.educationLevel}</td>
                <td>{users.faculty}</td>
                <td>{users.email}</td>
                <td>{users.status}</td>
                <td>sss</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;
