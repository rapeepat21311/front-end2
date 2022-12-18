import React from "react";

function CreateTeacher() {
  return (
    <div className="create_profile_student_container">
      <div className="create_profile_student_header">
        แก้ไขผู้ใช้งาน(อาจารย์)
      </div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">ข้อมูลอาจารย์</div>
        <div className="box_create_admin">
          <div className="student_id">
            <label>รหัสอาจารย์</label>
            <input
              type="number"
              name="student_id"
              placeholder="Placeholder"
              // onChange={handleChangeEditUserData}
            />
          </div>
          <div className="student_number_id">
            <label>ตำแหน่ง</label>
            <input
              type="number"
              name="id_number"
              placeholder="Placeholder"
              // onChange={handleChangeEditUserData}
            />
          </div>
        </div>

        <div className="admin_name">
          <label>ชื่อ-นามสกุล (ไทย)</label>
          <input
            type="text"
            name="user_fullname"
            placeholder="Placeholder"
            //   onChange={handleChangeEditUserData}
          />
        </div>

        <div className="box_create_student">
          <div className="student_id">
            <label>คณะ</label>
            <select>
              <option>Placeholder</option>{" "}
            </select>
          </div>
          <div className="student_number_id">
            <label>สาขา</label>
            <select>
              <option>Placeholder</option>{" "}
            </select>
          </div>
        </div>
        <div className="box_create_student">
          <div className="student_id">
            <label>คณะ</label>
            <select>
              <option>Placeholder</option>{" "}
            </select>
          </div>
          <div className="student_number_id">
            <label>สาขา</label>
            <input placeholder="Placeholder" />
          </div>
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

        <div className="close_and_submit_button">
          <button>ยกเลิก</button>
          <button>บันทึก</button>
        </div>
      </div>
    </div>
  );
}

export default CreateTeacher;
