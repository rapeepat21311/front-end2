import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { readUser, updateUser } from "../../../../route/function/user";
import "./editUser.css";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  const [userData, setUserData] = useState([]);
  const [editUserData, setEditUserData] = useState({
    noun: "",
    studentId: userData.studentId,
    idNumber: userData.idNumber,
    nameTh: userData.nameTh,
    nameEng: userData.nameEng,
    faculty: userData.faculty,
    major: userData.major,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
    educationLevel: userData.educationLevel,
    year: userData.year,
    oldSchool: userData.oldSchool,
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
    <div className="layout_body">
      <div className="edit_page_body">
        <div className="edit_header">
          <h1>แก้ไขผู้ใช้งาน</h1>
          <h3>ข้อมูลนักศึกษา</h3>
        </div>
        <form onSubmit={handleSaveEdit}>
          <div className="img_edit_user">
            <img src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI=" />
          </div>
          <div className="edit_user_container_id_noun">
            <div className="edit_user_container_id_noun_left">
              <h4>เลขทะเบียนนักศึกษา</h4>
              <input
                name="studentId"
                // defaultValue={userData.studentId}
                value={userData.studentId}
                onChange={handleChangeEditUserData}
              />
            </div>
            <div className="edit_user_container_id_noun_right">
              <h4>คำนำหน้า</h4>
              <select
                value={editUserData.noun}
                onChange={handleChangeEditUserData}
                name="noun"
              >
                <option>นางสาว</option>
                <option>นาย</option>
              </select>
            </div>
          </div>
          <div className="edit_user_name_lastname_Th">
            <div className="edit_user_name">
              <h4>ชื่อ</h4>
              <input
                name="nameTh"
                defaultValue={userData.nameTh}
                onChange={handleChangeEditUserData}
              />
            </div>
            <div className="edit_user_lastname">
              <h4>นามสกุล</h4>
              <input
                // name="nameTh"
                defaultValue={"ยังไม่ได้เพิ่ม fields database"}
                onChange={handleChangeEditUserData}
              />
            </div>
          </div>
          <div className="edit_user_year">
            <div className="edit_user_year_left">
              <h4>ปีที่รับเข้า</h4>
              <select>
                <option>2565{"ไม่สามารถแก้ไขได้"}</option>
              </select>
            </div>
            <div className="edit_user_year_center">
              <h4>ปีที่จบการศึกษาตามหลักสูตร</h4>
              <select>
                <option>
                  2565+{"checkmajor"} if major {"brabra"}
                </option>
              </select>
            </div>
            <div className="edit_user_year_right">
              <h4>ปีที่จบการศึกษาจริง</h4>
              <select>
                <option>2565</option>
              </select>
            </div>
          </div>
          <div className="edit_user_class_major">
            <div className="edit_user_class_major_left">
              <h4>ชั้นปีที่</h4>
              <select>
                <option> ---</option>
                <option> 1</option>
              </select>
            </div>
            <div className="edit_user_class_major_center">
              <h4>ภาคการศึกษา</h4>
              <select>
                <option> ---</option>
                <option> 1</option>
              </select>
            </div>
            <div className="edit_user_class_major_right">
              <h4>สาขาวิชา</h4>
              <select>
                <option> ---</option>
                <option> 1</option>
              </select>
            </div>
          </div>
          <div className="edit_status_student">
            <div className="edit_student_major">
              <h4>กลุ่มวิชา/สาขา</h4>
              <select>
                <option>...</option>
              </select>
            </div>
            <div className="edit_student_status">
              <h4>สถานภาพนักศึกษา</h4>
              <select>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="private_student_edit">
            <h2>ข้อมูลส่วนตัว</h2>
          </div>
          {/* <button type="submit">update</button> */}
        </form>
      </div>
    </div>
  );
}

export default EditUser;
