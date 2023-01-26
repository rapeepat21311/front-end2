import React, { useState } from "react";
import "./createuser.css";
import defaultImage from "../../../../image/vector (16).png";
import { height } from "@mui/system";

function Createuser() {
  const [toggle, setToggle] = useState(false);
  const [image, setImage] = useState(null);
  const [fileName, setFilename] = useState("No select File");

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    // <div className="layout_body">
    <div className="create_profile_student_container">
      <div className="create_profile_student_header">
        เพิ่มผู้ใช้งาน(นักศึกษา)
      </div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">ข้อมูลนักศึกษา</div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">รหัสนักศึกษา</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="number" />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">เลขที่บัตรประชาชน</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="number" />
            </div>
          </div>
        </div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="prefix_student_name">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">คำนำหน้า</p>
            </div>
            <div className="prefix_student_select_container">
              <select className="select_prefix_student_name">
                <option className="option_prefix_student">นาย</option>
                <option className="option_prefix_student">นางสาว</option>
                <option className="option_prefix_student">นาง</option>
              </select>
            </div>
          </div>
          <div className="student_fullname_th_container">
            <div className="student_create_title_text">
              <p className="prefix_student_text">ชื่อ</p>
            </div>
            <div className="input_student_fullname_th_container">
              <input className="input_student_fullname_th_text" type="text" />
            </div>
          </div>
          <div className="student_fullname_eng_container">
            <div className="student_create_title_text">
              <p className="prefix_student_text">นามสกุล</p>
            </div>
            <div className="input_student_fullname_eng_container">
              <input className="input_student_fullname_th_text" type="text" />
            </div>
          </div>
        </div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">First Name</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="text" />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">Last Name</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="text" />
            </div>
          </div>
        </div>
        <div className="create_student_select_container">
          <div className="create_student_select_major_container">
            <div className="create_title_text_box">
              <p className="create_title_text">เลือกคณะ</p>
            </div>
            <div className="create_student_select_option">
              <select className="select_major">
                <option>เลือกคณะ</option>
              </select>
            </div>
          </div>
          <div className="create_student_select_faculty_container">
            <div className="create_title_text_box">
              <p className="create_title_text">เลือกสาขา</p>
            </div>
            <div className="create_student_select_option">
              <select className="select_major">
                <option>เลือกสาขา</option>
              </select>
            </div>
          </div>
        </div>
        <div className="create_student_select_container">
          <div className="create_student_year_class">
            <div className="create_title_text_box">
              <p className="create_title_text">ปีการศึกษาที่เข้า</p>
            </div>
            <div className="input_student_year_box">
              <input type="date" className="input_student_year" />
            </div>
          </div>

          <div className="create_student_year_class">
            <div className="create_title_text_box">
              <p className="create_title_text">ชื่อรุ่น</p>
            </div>
            <div className="input_student_year_box">
              <input type="text" className="input_student_class" />
            </div>
          </div>

          <div className="create_student_year_class">
            <div className="create_title_text_box">
              <p className="create_title_text">ชั้นปีที่</p>
            </div>
            <div className="input_student_year_box">
              <input type="text" className="input_student_year" />
            </div>
          </div>
        </div>
        <div className="create_student_select_container">
          <div className="create_student_email_box">
            <div className="create_title_text_box">
              <p className="create_title_text">อีเมลสถาบัน</p>
            </div>
            <div className="create_student_email">
              <input type="text" className="input_value_email_student" />
              <p className="set_email_student_text">@northbkk.ac.th</p>
            </div>
          </div>
          <div className="select_status_on_university_box">
            <div className="create_title_text_box">
              <p className="create_title_text">สถานภาพ</p>
            </div>
            <div className="select_status_student_box">
              <select className="select_status_on_university">
                <option>กำลังศึกษา</option>
              </select>
            </div>
          </div>
        </div>
        <div className="student_avatar_container">
          <div className="create_title_text_box">
            <p className="create_title_text">รูปภาพ</p>
          </div>
          <div className="student_avatar">
            <div className="avatar_image_container">
              <div className="avatar_image">
                {image ? (
                  <img
                    src={image}
                    alt={fileName}
                    style={{
                      width: "100%",
                      height: "64px",
                      borderRadius: "8px",
                    }}
                  />
                ) : (
                  <img src={defaultImage} />
                )}
              </div>
            </div>
            <div className="avatar_upload_description_text_container">
              <p>อัปโหลดรูปภาพ (ขนาดไม่เกิน -- mb)</p>
            </div>
            <div className="avatar_upload_file">
              <form
                onClick={() =>
                  document.querySelector(".input_avatar_student").click()
                }
              >
                <input
                  type="file"
                  className="input_avatar_student"
                  hidden
                  onChange={({ target: { files } }) => {
                    files[0] && setFilename(files[0].name);
                    if (files) {
                      setImage(URL.createObjectURL(files[0]));
                    }
                  }}
                />
                <p>อัพโหลด</p>
              </form>
            </div>
          </div>
        </div>
        {/* s */}
      </div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">ข้อมูลส่วนตัว</div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">หมายเลขโทรศัพท์บ้าน</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="text" />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">หมายเลขโทรศัพท์มือถือ</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="text" />
            </div>
          </div>
        </div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="student_address">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">ที่อยู่ปัจจุบัน</p>
            </div>
            <div className="text_area_box">
              <textarea name="" id="" rows="10" />
            </div>
          </div>
        </div>
      </div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">ข้อมูลการศึกษา</div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">ระดับการศึกษา</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="text" />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">ชื่อสถานศึกษา</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="text" />
            </div>
          </div>
        </div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="student_oldschool_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">แผนการเรียน</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="text" />
            </div>
          </div>
          <div className="student_oldschool_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">ปีการศึกษาที่จบ</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="text" />
            </div>
          </div>
          <div className="student_oldschool_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">เกรดระดับมัธยม</p>
            </div>
            <div className="input_value_studentid_container">
              <input className="input_value_studentid" type="text" />
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
        <div className="student_toggle_button_status_container">
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">สถานะผู้ใช้งาน</p>
            </div>
            <div className="toggle_button_on_off_container">
              <div
                className={toggle ? "button_toggle_on" : "button_toggle_off"}
                onClick={() => onClickToggle()}
              >
                <div
                  className={
                    toggle
                      ? "button_toggle_on_switch"
                      : "button_toggle_off_switch"
                  }
                ></div>
                <div
                  className={
                    toggle ? "button_toggle_on_text" : "button_toggle_off_text"
                  }
                >
                  <p>{toggle ? "ON" : "OFF"}</p>
                </div>
              </div>
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

export default Createuser;
