import React from "react";
import "../../editUser/editUser.css";
import "../edit/editAdmin.css";

function CreateAdmin() {
  return (
    <div className="create_profile_student_container">
      <div className="create_profile_student_header">
        แก้ไขผู้ใช้งาน(ผู้ดูแลระบบ)
      </div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">ข้อมูลผู้ดูแลระบบ</div>
        <div className="box_create_admin">
          <div className="student_id">
            <label>เลขทะเบียนเจ้าหน้าที่</label>
            <input
              type="number"
              name="student_id"
              //   defaultValue={userData.student_id}
              //   onChange={handleChangeEditUserData}
            />
          </div>
          <div className="student_number_id">
            <label>หน่วยงาน</label>
            <input
              type="number"
              name="id_number"
              //   defaultValue={userData.id_number}
              //   onChange={handleChangeEditUserData}
            />
          </div>
        </div>

        <div className="admin_name">
          <label>ชื่อ-นามสกุล (ไทย)</label>
          <input
            type="text"
            name="user_fullname"
            // defaultValue={userData.user_fullname}
            // onChange={handleChangeEditUserData}
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
        <div className="close_and_submit_button">
          <button>ยกเลิก</button>
          <button>บันทึก</button>
        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
