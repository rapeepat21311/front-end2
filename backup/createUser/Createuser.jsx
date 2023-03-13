import React, { useEffect, useState } from "react";
import "./createuser.css";
import default_user from "./default_create_user";
import defaultImage from "../../../../image/vector (16).png";
import { height } from "@mui/system";
import { useNavigate } from "react-router";

function Createuser() {
  const navigate = useNavigate();

  const [data, setData] = useState(default_user);
  const [image, setImage] = useState(null);
  const [fileName, setFilename] = useState("No select File");

  useEffect(() => {
    console.log("--> data --->", data);
  }, [data]);

  const onClickToggle = () => {
    setData(!data.user_status);
  };

  function handleSubmit(e) {
    e?.preventDefault();

    const formData = new FormData();

    formData.append("user_image", fileName);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const hanldeChangeFiles = (e) => {
    setFilename(e.target.file[0]);
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
              <input
                className="input_value_studentid"
                type="number"
                name="student_id"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">เลขที่บัตรประชาชน</p>
            </div>
            <div className="input_value_studentid_container">
              <input
                className="input_value_studentid"
                type="number"
                name="id_number"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="prefix_student_name">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">คำนำหน้า</p>
            </div>
            <div className="prefix_student_select_container">
              <select
                className="select_prefix_student_name"
                name="prefix_name"
                onChange={handleChange}
              >
                <option className="option_prefix_student" value={"นาย"}>
                  นาย
                </option>
                <option className="option_prefix_student" value={"นางสาว"}>
                  นางสาว
                </option>
                <option className="option_prefix_student" value={"นาง"}>
                  นาง
                </option>
              </select>
            </div>
          </div>
          <div className="student_fullname_th_container">
            <div className="student_create_title_text">
              <p className="prefix_student_text">ชื่อ</p>
            </div>
            <div className="input_student_fullname_th_container">
              <input
                className="input_student_fullname_th_text"
                type="text"
                name="user_first_name_th"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="student_fullname_eng_container">
            <div className="student_create_title_text">
              <p className="prefix_student_text">นามสกุล</p>
            </div>
            <div className="input_student_fullname_eng_container">
              <input
                className="input_student_fullname_th_text"
                type="text"
                name="user_last_name_th"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">First Name</p>
            </div>
            <div className="input_value_studentid_container">
              <input
                className="input_value_studentid"
                type="text"
                name="user_first_name_eng"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">Last Name</p>
            </div>
            <div className="input_value_studentid_container">
              <input
                className="input_value_studentid"
                type="text"
                name="user_last_name_eng"
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
                name="faculty"
                onChange={handleChange}
              >
                <option>เลือกคณะ</option>
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
                name="major"
                onChange={handleChange}
              >
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
              <input
                type="text"
                className="input_student_year"
                name="year"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="create_student_year_class">
            <div className="create_title_text_box">
              <p className="create_title_text">ชื่อรุ่น</p>
            </div>
            <div className="input_student_year_box">
              <input
                type="text"
                className="input_student_class"
                name="model_name"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="create_student_year_class">
            <div className="create_title_text_box">
              <p className="create_title_text">ชั้นปีที่</p>
            </div>
            <div className="input_student_year_box">
              <input
                type="text"
                className="input_student_year"
                name="class_year_student"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="create_student_select_container">
          <div className="create_student_email_box">
            <div className="create_title_text_box">
              <p className="create_title_text">อีเมลสถาบัน</p>
            </div>
            <div className="create_student_email">
              <input
                type="text"
                className="input_value_email_student"
                name="student_email_education"
                onChange={handleChange}
              />
              <p className="set_email_student_text">@northbkk.ac.th</p>
            </div>
          </div>
          <div className="select_status_on_university_box">
            <div className="create_title_text_box">
              <p className="create_title_text">สถานภาพ</p>
            </div>
            <div className="select_status_student_box">
              <select
                className="select_status_on_university"
                name="student_status"
                onChange={handleChange}
              >
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
                {data.user_image ? (
                  <img
                    src={data.user_image}
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
                  filename="user_image"
                  name="user_image"
                  onChange={() => {
                    // ({ target: { files } }
                    // )
                    hanldeChangeFiles();
                    //   files[0] && setFilename(files[0].name);
                    //   if (files) {
                    //     setImage(URL.createObjectURL(files[0]));
                  }}
                  // }}
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
              <input
                className="input_value_studentid"
                type="text"
                name="phone_number_home"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">หมายเลขโทรศัพท์มือถือ</p>
            </div>
            <div className="input_value_studentid_container">
              <input
                className="input_value_studentid"
                type="text"
                name="phone_number"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="student_address">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">ที่อยู่ปัจจุบัน</p>
            </div>
            <div className="text_area_box">
              <textarea rows="10" name="last_address" onChange={handleChange} />
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
              <input
                className="input_value_studentid"
                type="text"
                name="last_level_student"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">ชื่อสถานศึกษา</p>
            </div>
            <div className="input_value_studentid_container">
              <input
                className="input_value_studentid"
                type="text"
                name="old_school"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="prefix_fullname_eng_th_student_container">
          <div className="student_oldschool_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">แผนการเรียน</p>
            </div>
            <div className="input_value_studentid_container">
              <input
                className="input_value_studentid"
                type="text"
                name="last_major"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="student_oldschool_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">ปีการศึกษาที่จบ</p>
            </div>
            <div className="input_value_studentid_container">
              <input
                className="input_value_studentid"
                type="text"
                name="year_end_old_school"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="student_oldschool_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">เกรดระดับมัธยม</p>
            </div>
            <div className="input_value_studentid_container">
              <input
                className="input_value_studentid"
                type="text"
                name="gpx_hight_school"
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
        <div className="student_toggle_button_status_container">
          <div className="student_p_input_value_container">
            <div className="prefix_student_text_container">
              <p className="prefix_student_text">สถานะผู้ใช้งาน</p>
            </div>
            <div className="toggle_button_on_off_container">
              <div
                className={
                  data.user_status ? "button_toggle_on" : "button_toggle_off"
                }
                onClick={() => onClickToggle()}
              >
                <div
                  className={
                    data.user_status
                      ? "button_toggle_on_switch"
                      : "button_toggle_off_switch"
                  }
                ></div>
                <div
                  className={
                    data.user_status
                      ? "button_toggle_on_text"
                      : "button_toggle_off_text"
                  }
                >
                  <p>{data.user_status ? "ON" : "OFF"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button_onsubmit_unsubmit_container">
        <div
          className="button_unsubmit_container"
          onClick={() => navigate("/admin-page/list-user")}
        >
          <button className="button_unsubmit">ยกเลิก</button>
        </div>
        <div
          className="button_onsubmit_container"
          onClick={() => handleSubmit()}
        >
          <button className="button_onsubmit">บันทึก</button>
        </div>
      </div>
    </div>
  );
}

export default Createuser;
