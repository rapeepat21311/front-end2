import React, { useEffect, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

function AddTeacherManageStudent() {
  const [component, setComponent] = useState(0);

  useEffect(() => {
    if (component < 0) {
      setComponent(0);
    }
  }, [component]);

  let add_component = [];

  for (let i = 0; i <= component; i++) {
    add_component.push(
      <div className="box_add_student_in_teacher">
        <div
          className="close_add_student"
          onClick={() => setComponent(component - 1)}
        >
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
        </div>
      </div>
    );
  }
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
        {add_component}
      </div>
      <div
        className="report_student"
        onClick={() => {
          setComponent(component + 1);
        }}
      >
        <div className="button_report_student">
          <p>
            <AddIcon />
          </p>
          <h3>เพิ่มการประเมิน</h3>
        </div>
      </div>
      {/* BUTTON */}
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

export default AddTeacherManageStudent;
