import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { readUser, updateUser } from "../../../../../route/function/user";
import "../../editUser/editUser.css";
import "../../admin/edit/editAdmin.css";
import { editTeacher, getTeacher } from "../../../../../route/function/teacher";

function EditTeacher() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  const [teacherData, setTeacherData] = useState({});

  useEffect(() => {
    getTeacherId(user.token, id);
  }, [teacherData]);

  const getTeacherId = (token, id) => {
    getTeacher(token, id)
      .then((res) => {
        console.log("data --->", res.data);
        // setTeacherData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleChange = (e) => {
    e?.preventDefault();

    const { name, value } = e.target;
    setTeacherData((prev) => ({ ...prev, [name]: value }));
  };

  const hanleEdit = (e) => {
    e?.preventDefault();

    editTeacher(user.token, id, teacherData)
      .then((res) => {
        alert(res.data);
      })
      .catch((e) => {
        alert(e);
      });
  };

  // const [userData, setUserData] = useState([]);
  // const [editUserData, setEditUserData] = useState({
  //   student_id: userData.student_id,
  //   id_number: userData.id_number,
  //   user_fullname: userData.user_fullname,
  //   name_th: userData.name_th,
  //   name_eng: userData.name_eng,
  //   faculty: userData.faculty,
  //   major: userData.major,
  //   email: userData.email,
  //   phone_number: userData.phone_number,
  //   education_level: userData.education_level,
  //   year: userData.year,
  //   old_school: userData.old_school,
  //   status: userData.status,
  //   advisor: userData.advisor,
  //   aa: userData.aa,
  //   phone_number_advisor: userData.phone_number_advisor,
  //   email_advisor: userData.email_advisor,
  // });

  // useEffect(() => {
  //   loadData(user.token, id);
  // }, [user.token, id]);

  // const handleChangeEditUserData = (e) => {
  //   const { name, value } = e.target;
  //   setEditUserData({ ...editUserData, [name]: value });
  // };
  // // console.log(handleChangeEditUserData);

  // const handleSaveEdit = async (e) => {
  //   e?.preventDefault();
  //   await updateUser(user.token, id, editUserData)
  //     .then((res) => {
  //       console.log(res.data);
  //       alert(res.data);
  //       navigate("/Teacher-page/list-user");
  //     })
  //     .catch((err) => {
  //       alert(err.response);
  //     });
  // };

  // const updateData = () => {};

  // // get Id
  // const loadData = (authtoken, ID) => {
  //   readUser(authtoken, ID)
  //     .then((res) => {
  //       setUserData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("ERROR SEVER --->", err.response);
  //     });
  // };
  return (
    // <input
    //   type="number"
    //   name="student_id"
    //   defaultValue={userData.student_id}
    //   onChange={handleChangeEditUserData}
    // />
    <div className="create_profile_student_container">
      <div className="create_profile_student_header">แก้ไขข้อมูลอาจารย์</div>
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
                value={teacherData.teacher_id}
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
                defaultValue={teacherData.teacher_postion}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="create_teacher_name_container">
          <div className="prefix_student_text_container">
            <p className="prefix_student_text">ชื่อ-นามสกุล(ไทย)</p>
          </div>
          <div className="input_value_studentid_container">
            <input
              className="input_value_studentid"
              type="text"
              name="teacher_name_th"
              defaultValue={teacherData.teacher_name_th}
              onChange={handleChange}
            />
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
                <option value={teacherData.teacher_faculty}>
                  {teacherData.teacher_faculty}
                </option>
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
                <option value={teacherData.teacher_major}>
                  {teacherData.teacher_major}
                </option>
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
                defaultValue={teacherData.teacher_phone_number}
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
                defaultValue={teacherData.email_education}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
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
                value={teacherData.username}
              />
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
          <button className="button_onsubmit" onClick={hanleEdit}>
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTeacher;
