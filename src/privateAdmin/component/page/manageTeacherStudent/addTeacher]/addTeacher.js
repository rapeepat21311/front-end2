import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

function AddTeacher() {
  return (
    <div className="create_profile_student_container">
      <div className="create_profile_student_header">เพิ่มอาจารย์ที่ปรึกษา</div>
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
            <label>ชื่อ-นามสกุล</label>
            <input
              type="number"
              name="id_number"
              placeholder="Placeholder"
              // onChange={handleChangeEditUserData}
            />
          </div>
        </div>
        <div className="box_create_admin">
          <div className="student_id">
            <label>คณะ</label>
            <input
              type="number"
              name="student_id"
              placeholder="Placeholder"
              // onChange={handleChangeEditUserData}
            />
          </div>
          <div className="student_number_id">
            <label>สาขา</label>
            <input
              type="number"
              name="id_number"
              placeholder="Placeholder"
              // onChange={handleChangeEditUserData}
            />
          </div>
        </div>
      </div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">นักศึกษาในการดูแล</div>
        <div className="box_add_student_in_teacher">
          <div className="close_add_student">
            <p>
              <CloseIcon />
            </p>
          </div>
          <div className="box_add_student">
            <div className="box_add_student_in_teacher_id_student">
              <div className="box_id_student">
                <label>รหัสนักศึกษา</label>
                <input placeholder="Placeholder" />
              </div>
              <div className="box_name_student">
                <label>ชื่อ-นามสกุล</label>
                <input placeholder="Placeholder" />
              </div>
            </div>
            <div className="box_add_student_in_teacher_major_student">
              <div className="box_faculty_student">
                <label>คณะ</label>
                <input placeholder="Placeholder" />
              </div>
              <div className="box_major_student">
                <label>สาขา</label>
                <input placeholder="Placeholder" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="report_student">
        <div className="button_report_student">
          <p>
            <AddIcon />
          </p>
          <h3>เพิ่มการประเมิน</h3>
        </div>
      </div>
      <div className="close_and_submit_button">
        <button>ยกเลิก</button>
        <button>บันทึก</button>
      </div>
    </div>
  );
}

export default AddTeacher;
