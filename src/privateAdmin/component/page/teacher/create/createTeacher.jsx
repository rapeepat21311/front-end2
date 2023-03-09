import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createTeacher } from "../../../../../route/function/teacher";

function CreateTeacher() {
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  const [teacherData, setTeacherData] = useState({
    username: "",
    password: "",
    teacher_postion: "",
    teacher_id: "",
    teacher_first_name_th: "",
    teacher_last_name_th: "",
    teacher_faculty: "",
    teacher_major: "",
    teacher_phone_number: "",
    email_education: "",
  });

  useEffect(() => {
    console.log(teacherData);
  }, [teacherData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    createTeacher(user.token, teacherData)
      .then((res) => {
        alert(res.data);
        navigate("/admin-page/list-teacher");
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <div className="create_profile_student_container">
      <div className="create_profile_student_header">เพิ่มข้อมูลอาจารย์</div>
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
                name="teacher_id"
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
                name="teacher_postion"
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
                type="string"
                name="teacher_first_name_th"
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
                name="teacher_last_name_th"
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
                name="teacher_faculty"
                onChange={handleChange}
              >
                <option value={""}>เลือกคณะ</option>
                <option value={"เทคโนโลยีสารสนเทศ"}>
                  เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล{" "}
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
                name="teacher_major"
                onChange={handleChange}
              >
                <option>เลือกสาขา</option>
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
                name="teacher_phone_number"
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
                type="text"
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

export default CreateTeacher;
