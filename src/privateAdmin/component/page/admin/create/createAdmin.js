import React from "react";
import "../../editUser/editUser.css";
import "../edit/editAdmin.css";

function CreateAdmin() {
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
              <input className="input_value_studentid" type="number" />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">ตำแหน่ง</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="text" />
            </div>
          </div>
        </div>
        <div className="create_teacher_name_container">
          <div className="prefix_student_text_container">
            <p className="prefix_student_text">ชื่อ-นามสกุล(ไทย)</p>
          </div>
          <div className="input_value_studentid_container">
            <input className="input_value_studentid" type="text" />
          </div>
        </div>
        <div className="create_student_select_container">
          <div className="create_student_select_major_container">
            <div className="create_title_text_box">
              <p className="create_title_text">เลือกคณะ</p>
            </div>
            <div className="create_student_select_option">
              <select className="select_major">
                <option></option>
              </select>
            </div>
          </div>
          <div className="create_student_select_faculty_container">
            <div className="create_title_text_box">
              <p className="create_title_text">เลือกสาขา</p>
            </div>
            <div className="create_student_select_option">
              <select className="select_major">
                <option></option>
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
              <input className="input_value_studentid" type="text" />
            </div>
          </div>
          <div className="create_student_select_faculty_container">
            <div className="create_title_text_box">
              <p className="create_title_text">อีเมลสถาบัน</p>
            </div>
            <div className="create_student_email">
              <input type="text" className="input_value_email_student" />
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
              <input className="input_student_class" type="text" />
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
          <button className="button_onsubmit">บันทึก</button>
        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
