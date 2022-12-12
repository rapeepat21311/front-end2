import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { readUser, updateUser } from "../../../../../route/function/user";
import "../../editUser/editUser.css";
import "./editAdmin.css";

function EditAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  const [userData, setUserData] = useState([]);
  const [editUserData, setEditUserData] = useState({
    student_id: userData.student_id,
    id_number: userData.id_number,
    user_fullname: userData.user_fullname,
    name_th: userData.name_th,
    name_eng: userData.name_eng,
    faculty: userData.faculty,
    major: userData.major,
    email: userData.email,
    phone_number: userData.phone_number,
    education_level: userData.education_level,
    year: userData.year,
    old_school: userData.old_school,
    status: userData.status,
    advisor: userData.advisor,
    aa: userData.aa,
    phone_number_advisor: userData.phone_number_advisor,
    email_advisor: userData.email_advisor,
  });

  useEffect(() => {
    loadData(user.token, id);
  }, [user.token, id]);

  const handleChangeEditUserData = (e) => {
    const { name, value } = e.target;
    setEditUserData({ ...editUserData, [name]: value });
  };
  // console.log(handleChangeEditUserData);

  const handleSaveEdit = async (e) => {
    e?.preventDefault();
    await updateUser(user.token, id, editUserData)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        navigate("/admin-page/list-user");
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  const updateData = () => {};

  // get Id
  const loadData = (authtoken, ID) => {
    readUser(authtoken, ID)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log("ERROR SEVER --->", err.response);
      });
  };
  return (
    <div className="create_profile_student_container">
      <div className="create_profile_student_header">
        แก้ไขผู้ใช้งาน(ผู้ดูแลระบบ)
      </div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">ข้อมูลผู้ดูแลระบบ</div>
        <div className="box_create_student">
          <div className="student_id">
            <label>เลขทะเบียนเจ้าหน้าที่</label>
            <input
              type="number"
              name="student_id"
              defaultValue={userData.student_id}
              onChange={handleChangeEditUserData}
            />
          </div>
          <div className="student_number_id">
            <label>หน่วยงาน</label>
            <input
              type="number"
              name="id_number"
              defaultValue={userData.id_number}
              onChange={handleChangeEditUserData}
            />
          </div>
        </div>

        <div className="admin_name">
          <label>ชื่อ-นามสกุล (ไทย)</label>
          <input
            type="text"
            name="user_fullname"
            defaultValue={userData.user_fullname}
            onChange={handleChangeEditUserData}
          />
        </div>
      </div>
      <div className="create_username_password_admin">
        <div className="title_create_profile_student_oldSchool">
          ข้อมูลบัญชีผู้ใช้
        </div>
        <div className="box_create_student_three">
          <div className="student_in_year">
            <label>Username</label>
            <input placeholder="Placeholder" />
          </div>
          <div className="student_in_year">
            <label>Password</label>
            <input placeholder="Placeholder" />
          </div>
          <div className="student_in_year">
            <label>ประเภทความปลอดภัย</label>
            <select>
              <option>Placeholder</option>{" "}
            </select>
          </div>
        </div>
        <div className="role_admin">
          <label>บทบาท</label>
          <select>
            <option>Placeholder</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default EditAdmin;
