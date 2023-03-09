import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { creatAdmin } from "../../../../../route/function/admin";
import "../../editUser/editUser.css";
import "../edit/editAdmin.css";

function CreateAdmin() {
  const { user } = useSelector((prev) => ({ ...prev }));
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    username: "",
    password: "",
    admin_position: "",
    admin_id: "",
    admin_first_name_th: "",
    admin_last_name_th: "",
    admin_faculty: "",
    admin_major: "",
    admin_phone_number: "",
    email_education: "",
  });

  useEffect(() => {
    console.log(admin);
  }, [admin]);

  const handleChange = (e) => {
    e?.preventDefault();

    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    creatAdmin(user.token, admin)
      .then((res) => {
        alert(res.data.msg);
        navigate("/admin-page/list-admin");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="create_profile_student_container">
      <div className="create_profile_student_header">เพิ่มผู้ดูแลระบบ</div>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              >
                <option value={""}>กรุณาเลือกคณะ</option>
                <option value={"เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"}>
                  เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล
                </option>
                <option value={"บริหารธุรการ "}>บริหารธุรการ </option>
                <option value={"ศิลปศาสตร์"}>ศิลปศาสตร์ </option>
                <option value={"รัฐศาสตร์"}>รัฐศาสตร์ </option>
                <option value={"นิเทศศาสตร์"}>นิเทศศาสตร์ </option>
                <option value={"ศึกษาศาสตร์"}>ศึกษาศาสตร์ </option>
                <option value={"พยาบาลศาสตร์"}>พยาบาลศาสตร์ </option>
              </select>
            </div>
          </div>
          <div className="create_student_select_faculty_container">
            <div className="create_title_text_box">
              <p className="create_title_text">เลือกสาขา</p>
            </div>
            <div className="create_student_select_option">
              <select
                className="select_major"
                name="admin_major"
                onChange={handleChange}
              >
                <option>กรุณาเลือกสาขา</option>
                <option value={"วิศวกรรมซอฟต์แวร์"}>วิศวกรรมซอฟต์แวร์</option>
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
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
              <input
                className="input_student_class"
                type="text"
                name="username"
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="button_onsubmit_unsubmit_container">
        <div className="button_unsubmit_container">
          <button className="button_unsubmit">ยกเลิก</button>
        </div>
        <div className="button_onsubmit_container">
          <button className="button_onsubmit" onClick={handleSubmit}>
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
