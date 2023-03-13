import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import defaultImage from "../../../../image/vector (16).png";
import { useNavigate, useParams } from "react-router";
import { readUser, updateUser } from "../../../../route/function/user";
import "./editUser.css";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  const [userData, setUserData] = useState({});
  const [image, setImage] = useState(null);
  const [fileName, setFilename] = useState("No select File");

  useEffect(() => {
    loadData(user.token, id);
  }, [user.token, id]);

  useEffect(() => {
    console.log("data --->", userData);
    // console.log(userData.user_image);
  }, [userData]);

  const handleChangeEditUserData = (e) => {
    e?.preventDefault();

    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const hanldeChangeFiles = (e) => {
    setFilename(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleEdit = (e) => {
    e?.preventDefault();

    const formData = new FormData();
    formData.append("user_image", fileName);
    // formData.append("username", userData.username);
    // formData.append("password", userData.password);
    // formData.append("student_id", userData.student_id);
    // formData.append("id_number", userData.id_number);
    formData.append("prefix_name", userData.prefix_name);
    formData.append("user_first_name_th", userData.user_first_name_th);
    formData.append("user_last_name_th", userData.user_last_name_th);
    formData.append("user_first_name_eng", userData.user_first_name_eng);
    formData.append("user_last_name_eng", userData.user_last_name_eng);
    formData.append("faculty", userData.faculty);
    formData.append("major", userData.major);
    formData.append("year", userData.year);
    formData.append("model_name", userData.model_name);
    formData.append("class_year_student", userData.class_year_student);
    formData.append(
      "student_email_education",
      userData.student_email_education
    );
    formData.append("student_status", userData.student_status);
    formData.append("phone_number_home", userData.phone_number_home);
    formData.append("phone_number", userData.phone_number);
    formData.append("last_address", userData.last_address);
    formData.append("last_level_student", userData.last_level_student);
    formData.append("old_school", userData.old_school);
    formData.append("last_major", userData.last_major);
    formData.append("year_end_old_school", userData.year_end_old_school);
    formData.append("gpx_hight_school", userData.gpx_hight_school);
    formData.append("user_status", userData.user_status || false);
    // for (var pair of formData.entries()) {
    //   console.log("formdata -->", pair[0] + ", " + pair[1]);
    // }
    updateUser(user.token, id, formData)
      .then((res) => {
        alert(res.data.msg);
        navigate("/admin-page/list-user");
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
    <div className="create_profile_student_container">
      <div className="create_profile_student_header">แก้ไขข้อมูลนักศึกษา</div>
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
                defaultValue={userData.student_id}
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
                defaultValue={userData.id_number}
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
                onChange={handleChangeEditUserData}
              >
                <option
                  className="option_prefix_student"
                  value={userData.prefix_name}
                >
                  นาย
                </option>
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
                defaultValue={userData.user_first_name_th}
                onChange={handleChangeEditUserData}
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
                defaultValue={userData.user_last_name_th}
                onChange={handleChangeEditUserData}
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
                defaultValue={userData.user_first_name_eng}
                onChange={handleChangeEditUserData}
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
                defaultValue={userData.user_last_name_eng}
                onChange={handleChangeEditUserData}
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
                onChange={handleChangeEditUserData}
              >
                <option value={userData.faculty}>{userData.faculty}</option>
                <option value={"เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"}>
                  เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล
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
                name="major"
                onChange={handleChangeEditUserData}
              >
                <option>{userData.major}</option>
                <option value={"วิศวกรรมซอฟต์แวร์"}>วิศวกรรมซอฟต์แวร์</option>
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
                type="string"
                className="input_student_year"
                name="year"
                defaultValue={userData.year}
                onChange={handleChangeEditUserData}
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
                defaultValue={userData.model_name}
                onChange={handleChangeEditUserData}
              />
            </div>
          </div>

          <div className="create_student_year_class">
            <div className="create_title_text_box">
              <p className="create_title_text">ชั้นปีที่</p>
            </div>
            <div className="input_student_year_box">
              <input
                type="number"
                className="input_student_year"
                name="class_year_student"
                defaultValue={userData.class_year_student}
                onChange={handleChangeEditUserData}
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
                defaultValue={userData.student_email_education}
                onChange={handleChangeEditUserData}
              />

              {/* <p className="set_email_student_text">@northbkk.ac.th</p> */}
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
                <img
                  src={
                    image ? image : null
                    // : `http://localhost:8080/uploads/${userData[0]?.user_image.filename}`
                  }
                  alt={fileName}
                  style={{
                    width: "100%",
                    height: "64px",
                    borderRadius: "8px",
                  }}
                />
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
                  name="user_image"
                  onChange={hanldeChangeFiles}
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
                defaultValue={userData.phone_number_home}
                onChange={handleChangeEditUserData}
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
                defaultValue={userData.phone_number}
                onChange={handleChangeEditUserData}
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
              <textarea
                id=""
                rows="10"
                name="last_address"
                defaultValue={userData.last_address}
                onChange={handleChangeEditUserData}
              />
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
                defaultValue={userData.last_level_student}
                onChange={handleChangeEditUserData}
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
                defaultValue={userData.old_school}
                onChange={handleChangeEditUserData}
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
                defaultValue={userData.last_major}
                onChange={handleChangeEditUserData}
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
                defaultValue={userData.year_end_old_school}
                onChange={handleChangeEditUserData}
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
                type="number"
                name="gpx_hight_school"
                defaultValue={userData.gpx_hight_school}
                onChange={handleChangeEditUserData}
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
                defaultValue={userData.username}
                // onChange={handleChangeEditUserData}
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
                name="student_email_education"
                // defaultValue={userData.student_email_education}
                // onChange={handleChangeEditUserData}
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
                  userData.user_status
                    ? "button_toggle_on"
                    : "button_toggle_off"
                }
                onClick={() =>
                  setUserData((prev) => ({
                    ...prev,
                    user_status: !userData.user_status,
                  }))
                }
              >
                <div
                  className={
                    userData.user_status
                      ? "button_toggle_on_switch"
                      : "button_toggle_off_switch"
                  }
                ></div>
                <div
                  className={
                    userData.user_status
                      ? "button_toggle_on_text"
                      : "button_toggle_off_text"
                  }
                >
                  <p>{userData.user_status ? "ON" : "OFF"}</p>
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
          <button
            className="button_unsubmit"
            onClick={() => navigate("/admin-page/list-user")}
          >
            ยกเลิก
          </button>
        </div>
        <div className="button_onsubmit_container">
          <button className="button_onsubmit" onClick={handleEdit}>
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
