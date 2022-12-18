import React from "react";
import "./createuser.css";

function Createuser() {
  return (
    // <div className="layout_body">
    <div className="create_profile_student_container">
      <div className="create_profile_student_header">
        เพิ่มผู้ใช้งาน(นักศึกษา)
      </div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">ข้อมูลนักศึกษา</div>
        <div className="box_create_student">
          <div className="student_id">
            <label>รหัสนักศึกษา</label>
            <input type="number" placeholder="placeholder" />
          </div>
          <div className="student_number_id">
            <label>รหัสบัตรประชาชน</label>
            <input type="number" placeholder="placeholder" />
          </div>
        </div>
        <div className="box_create_student">
          <div className="student_id">
            <label>ชื่อ-นามสกุล (ไทย)</label>
            <input type="text" placeholder="placeholder" />
          </div>
          <div className="student_number_id">
            <label>ชื่อ-นามสกุล (อังกฤษ)</label>
            <input type="text" placeholder="placeholder" />
          </div>
        </div>
        <div className="box_create_student">
          <div className="student_id">
            <label>สาขา</label>
            <select>
              <option>Placeholder</option>{" "}
            </select>
          </div>
          <div className="student_number_id">
            <label>คณะ</label>
            <select>
              <option>Placeholder</option>{" "}
            </select>
          </div>
        </div>
        <div className="box_create_student">
          <div className="student_in_year">
            <label>ปีการศึกษาที่เข้า</label>
            <input placeholder="Placeholder" />
          </div>
          <div className="student_in_year">
            <label>ชื่อรุ่น</label>
            <input placeholder="Placeholder" />
          </div>
          <div className="student_in_year">
            <label>ชั้นปีที่</label>
            <input placeholder="Placeholder" />
          </div>
        </div>
        <div className="box_create_student">
          <div className="student_id">
            <label>อีเมลสถาบัน</label>
            <input type="text" placeholder="placeholder" />
          </div>
          <div className="student_number_id">
            <label>สถานะภาพ</label>
            <select>
              <option>Placeholder</option>{" "}
            </select>
          </div>
        </div>
      </div>
      <div className="box_create_student_private">
        <div className="box_create_student_private_container">
          <div className="title_create_profile_student">ข้อมูลส่วนตัว</div>
          <div className="box_create_student">
            <div className="student_in_year">
              <label>อีเมล</label>
              <input placeholder="Placeholder" />
            </div>
            <div className="student_in_year">
              <label>หมายเลขโทรศัพท์บ้าน</label>
              <input placeholder="Placeholder" />
            </div>
            <div className="student_in_year">
              <label>หมายเลขโทรศัพท์มือถือ</label>
              <input placeholder="Placeholder" />
            </div>
          </div>
          <div className="textarea_address">
            <label>ที่อยู่บัจจุบัน</label>
            <textarea placeholder="Placeholder" />
          </div>
        </div>
      </div>
      <div className="document_of_old_school">
        <div className="title_create_profile_student_oldSchool">
          ข้อมูลการศึกษา
        </div>
        <div className="box_create_student">
          <div className="student_id">
            <label>ระดับการศึกษา</label>
            <input type="text" placeholder="placeholder" />
          </div>
          <div className="student_number_id">
            <label>ชื่อสถานศึกษา</label>
            <input type="text" placeholder="placeholder" />
          </div>
        </div>
        <div className="box_create_student">
          <div className="student_in_year">
            <label>แผนการเรียน</label>
            <input placeholder="Placeholder" />
          </div>
          <div className="student_in_year">
            <label>ปีการศึกษาที่จบ</label>
            <input placeholder="Placeholder" />
          </div>
          <div className="student_in_year">
            <label>เกรดระดับมัธยม</label>
            <input placeholder="Placeholder" />
          </div>
        </div>
      </div>
      <div className="create_username_password">
        <div className="title_create_profile_student_oldSchool">
          ข้อมูลการศึกษา
        </div>
        <div className="box_create_student">
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

export default Createuser;
