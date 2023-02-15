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
        แก้ไขข้อมูลผู้ดูแลระบบ
      </div>
      <div className="create_profile_student">
        <div className="prefix_fullname_eng_th_student_container">
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">รหัสอาจารย์</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="number" />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">ตำแหน่ง</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="text" />
            </div>
          </div>
        </div>
        <div className="create_teacher_name_container">
          <div className="prefix_student_text_container">
            <p className="prefix_student_text">ชื่อ-นามสกุล(ไทย)</p>
          </div>
          <div className="input_value_studentid_container">
            <input className="input_value_studentid" type="text" />
          </div>
        </div>
        <div className="create_student_select_container">
          <div className="create_student_select_major_container">
            <div className="create_title_text_box">
              <p className="create_title_text">เลือกคณะ</p>
            </div>
            <div className="create_student_select_option">
              <select className="select_major">
                <option></option>
              </select>
            </div>
          </div>
          <div className="create_student_select_faculty_container">
            <div className="create_title_text_box">
              <p className="create_title_text">เลือกสาขา</p>
            </div>
            <div className="create_student_select_option">
              <select className="select_major">
                <option></option>
              </select>
            </div>
          </div>
        </div>
        <div className="create_student_select_container">
          <div className="create_student_select_major_container">
            <div className="create_title_text_box">
              <p className="create_title_text">หมายเลขโทรศัพท์</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="text" />
            </div>
          </div>
          <div className="create_student_select_faculty_container">
            <div className="create_title_text_box">
              <p className="create_title_text">อีเมลสถาบัน</p>
            </div>
            <div className="create_student_email">
              <input type="text" className="input_value_email_student" />
              <p className="set_email_student_text">@northbkk.ac.th</p>
            </div>
          </div>
        </div>
        {/* <div className="create_teacher_name_container">
        <div className="prefix_student_text_container">
          <p className="prefix_student_text">บทบาทของผู้ใช้งาน</p>
        </div>
        <div className="input_value_studentid_container">
          <select name="" id="">
            <option value="">ผู้ใช้งานทั่วไป</option>
            <option value="">ผู้ดูแลระบบ</option>
          </select>
        </div>
      </div> */}
      </div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">ข้อมูลบัญชีผู้ใช้</div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">username</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_student_class" type="text" />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">password</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_student_class" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="button_onsubmit_unsubmit_container">
        <div className="button_unsubmit_container">
          <button className="button_unsubmit">ยกเลิก</button>
        </div>
        <div className="button_onsubmit_container">
          <button className="button_onsubmit">บันทึก</button>
        </div>
      </div>
    </div>
  );
}

export default EditAdmin;
