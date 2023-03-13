import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { editAdmin, readAdmin } from "../../../../../route/function/admin";
import { readUser, updateUser } from "../../../../../route/function/user";
import "../../editUser/editUser.css";
import "./editAdmin.css";

function EditAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  const [admin, setAdmin] = useState({});
  useEffect(() => {
    loadData(user.token, id);
    console.log(admin);
  }, [user.token, id]);

  const handleChangeEditUserData = (e) => {
    e?.preventDefault();
    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));
  };
  // console.log(handleChangeEditUserData);

  const handleSaveEdit = async (e) => {
    e?.preventDefault();
    await editAdmin(user.token, id, admin)
      .then((res) => {
        console.log(res.data);
        alert(res.data.msg);
        navigate("/admin-page/list-admin");
      })
      .catch((err) => {
        alert(err.msg);
      });
  };

  // get Id
  const loadData = (authtoken, ID) => {
    readAdmin(authtoken, ID)
      .then((res) => {
        setAdmin(res.data);
      })
      .catch((err) => {
        alert(err.msg);
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
              <input
                className="input_value_studentid"
                type="number"
                name="admin_id"
                value={admin.admin_id}
                onChange={handleChangeEditUserData}
              />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">ตำแหน่ง</p>
            </div>
            <div className="input_value_studentid_container">
              <input
                className="input_value_studentid"
                type="text"
                name="admin_position"
                value={admin.admin_position}
                onChange={handleChangeEditUserData}
              />
            </div>
          </div>
        </div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">ชื่อ</p>
            </div>
            <div className="input_value_studentid_container">
              <input
                className="input_value_studentid"
                type="text"
                name="admin_first_name_th"
                defaultValue={admin.admin_first_name_th}
                onChange={handleChangeEditUserData}
              />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">นามสกุล</p>
            </div>
            <div className="input_value_studentid_container">
              <input
                className="input_value_studentid"
                type="text"
                name="admin_last_name_th"
                defaultValue={admin.admin_last_name_th}
                onChange={handleChangeEditUserData}
              />
            </div>
          </div>
        </div>
        <div className="create_student_select_container">
          <div className="create_student_select_major_container">
            <div className="create_title_text_box">
              <p className="create_title_text">เลือกคณะ</p>
            </div>
            <div className="create_student_select_option">
              <select
                className="select_major"
                name="admin_faculty"
                onChange={handleChangeEditUserData}
              >
                <option value={admin.admin_faculty}>
                  {admin.admin_faculty}
                </option>
              </select>
            </div>
          </div>
          <div className="create_student_select_faculty_container">
            <div className="create_title_text_box">
              <p className="create_title_text">เลือกสาขา</p>
            </div>
            <div className="create_student_select_option">
              <select className="select_major">
                <option value={admin.admin_major}>{admin.admin_major}</option>
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
              <input
                className="input_value_studentid"
                type="text"
                name="admin_phone_number"
                value={admin.admin_phone_number}
                onChange={handleChangeEditUserData}
              />
            </div>
          </div>
          <div className="create_student_select_faculty_container">
            <div className="create_title_text_box">
              <p className="create_title_text">อีเมลสถาบัน</p>
            </div>
            <div className="create_student_email">
              <input
                type="text"
                className="input_value_email_student"
                name="email_education"
                value={admin.email_education}
                onChange={handleChangeEditUserData}
              />
              {/* <p className="set_email_student_text">@northbkk.ac.th</p> */}
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
              <input
                className="input_student_class"
                type="text"
                name="username"
                value={admin.username}
                onChange={handleChangeEditUserData}
              />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">password</p>
            </div>
            <div className="input_value_studentid_container">
              <input
                className="input_student_class"
                type="password"
                name="password"
                value={admin.password}
                onChange={handleChangeEditUserData}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="button_onsubmit_unsubmit_container">
        <div className="button_unsubmit_container">
          <button
            className="button_unsubmit"
            onClick={() => navigate("/admin-page/list-admin")}
          >
            ยกเลิก
          </button>
        </div>
        <div className="button_onsubmit_container">
          <button className="button_onsubmit" onClick={handleSaveEdit}>
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditAdmin;
