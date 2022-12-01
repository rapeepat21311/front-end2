import React, { useEffect, useState } from "react"; // { useContext, useEffect }
import { useSelector } from "react-redux";

// import userContext from "../../../context/userContext";
// import { listUser, readUser } from "../../../route/function/user";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import "./profileStudent.css";
import { readUser, updateUser } from "../../../route/function/user";
import { useNavigate } from "react-router";

export default function ProfileStudent() {
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();

  const [editValuesInput, setEditValuesInput] = useState({});

  const [valueUser, setValueUser] = useState({
    user_fullname: editValuesInput.user_fullname,
    name_eng: editValuesInput.name_eng,
    phone_number: editValuesInput.phone_number,
    email: editValuesInput.email,
  });

  const [editInput, setEditInput] = useState(false);

  const loadData = (token, id) => {
    readUser(token, id)
      .then((res) => {
        console.log("CHECK TRUE ---->", res.data);
        setEditValuesInput(res.data);
      })
      .catch((err) => {
        console.log("CHECK FALSE ---->", err);
      });
  };

  useEffect(() => {
    loadData(user.token, user._id);
    // console.log(editValuesInput);
  }, []);
  // console.log("check ----> ", user.username);
  // const [user, setUser] = useContext(userContext);
  // useEffect(() => {
  //   //code
  //   loadData();
  // }, []);

  const handleClickEdit = () => {
    setEditInput(!editInput);
  };

  const handleChangeValue = (e) => {
    e?.preventDefault();
    const { name, value } = e.target;
    setValueUser({ ...valueUser, [name]: value });
  };

  const handleClickSubmit = (e) => {
    // e?.preventDefault();
    updateUser(user.token, user._id, valueUser)
      .then((res) => {
        navigate("/profile");
        console.log(res.data);
        // alert(res.data);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  return (
    <div className="profile_student">
      <div className="profile_student_image">
        <div className="profile_student_image_text">
          <h2>ข้อมูลนักศึกษา</h2>
        </div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
        <div className="profile_student_image_name">
          <p>{editValuesInput.student_id}</p>
          <p>{editValuesInput.user_fullname}</p>
        </div>

        <p
          className={
            editValuesInput.student_status === "กำลังเรียน"
              ? "profile_student_status_study"
              : "profile_student_status_inactive"
          }
        >
          {editValuesInput.student_status}
        </p>
      </div>
      <div className="profile_student_container_left">
        <div className="profiel_student_container_header">
          <h2>ข้อมูลส่วนตัว</h2>
          <p onClick={handleClickEdit}>
            {editInput ? (
              <div className="student_button_close_submit">
                <button onClick={handleClickEdit}>ยกเลิก</button>
                <button onClick={handleClickSubmit}>บันทึก</button>
              </div>
            ) : (
              <EditRoundedIcon />
            )}
          </p>
        </div>
        <div className="profile_student_left">
          {editInput ? (
            <>
              <div className="student_profile_left">
                <div className="student_can_change">
                  <h4>ชื่อ(ภาษาไทย) </h4>
                  <input
                    type="text"
                    name="user_fullname"
                    autoComplete="off"
                    onChange={handleChangeValue}
                    defaultValue={editValuesInput.user_fullname}
                  />
                  <h4>ชื่อ(ภาษาอังกฤษ) </h4>
                  <input
                    className="student_can_change"
                    type="text"
                    name="name_eng"
                    autoComplete="off"
                    onChange={handleChangeValue}
                    defaultValue={editValuesInput.name_eng}
                  />
                </div>
                <h4>รหัสนักศึกษา </h4>
                <input autoComplete="off" value={editValuesInput.student_id} />
                <h4>เลขประจำตัวประชาชน </h4>
                <input autoComplete="off" value={editValuesInput.id_number} />
                <h4>คณะ </h4>
                <input autoComplete="off" value={editValuesInput.faculty} />
                <h4>สาขา </h4>
                <input autoComplete="off" value={editValuesInput.major} />
              </div>
              <div className="student_profile_right">
                <div className="student_can_change">
                  <h4>อีเมล </h4>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    onChange={handleChangeValue}
                    defaultValue={editValuesInput.email}
                  />
                  <h4>เบอร์มือถือ</h4>
                  <input
                    type="tel"
                    name="phone_number"
                    autoComplete="off"
                    onChange={handleChangeValue}
                    defaultValue={editValuesInput.phone_number}
                  />
                </div>
                <h4>ระดับการศึกษา</h4>
                <input
                  autoComplete="off"
                  value={editValuesInput.education_level}
                />
                <h4>ปีการศึกษาที่เข้า</h4>
                <input
                  name="year"
                  autoComplete="off"
                  value={editValuesInput.year}
                />
                <h4>จบการศึกษาจาก</h4>
                <input
                  name="old_school"
                  autoComplete="off"
                  value={editValuesInput.old_school}
                />
                <h4>สถานภาพ</h4>
                <input
                  name="student_status"
                  autoComplete="off"
                  value={editValuesInput.student_status}
                />
              </div>
            </>
          ) : (
            <>
              <div className="student_profile_left">
                <h4>ชื่อ(ภาษาไทย) </h4>
                <p>{editValuesInput.user_fullname}</p>
                <h4>ชื่อ(ภาษาอังกฤษ) </h4>
                <p>{editValuesInput.name_eng}</p>
                <h4>รหัสนักศึกษา </h4>
                <p>{editValuesInput.student_id}</p>
                <h4>เลขประจำตัวประชาชน </h4>
                <p> {editValuesInput.id_number}</p>
                <h4>คณะ </h4>
                <p>{editValuesInput.faculty}</p>
                <h4>สาขา </h4>
                <p>{editValuesInput.major}</p>
              </div>
              <div className="student_profile_right">
                <h4>Email </h4>
                <p>{editValuesInput.email}</p>
                <h4>เบอร์มือถือ</h4>
                <p>{editValuesInput.phone_number}</p>
                <h4>ระดับการศึกษา</h4>
                <p>{editValuesInput.education_level}</p>
                <h4>ปีการศึกษาที่เข้า</h4>
                <p>{editValuesInput.year}</p>
                <h4>จบการศึกษาจาก</h4>
                <p>{editValuesInput.old_school}</p>
                <h4>สถานภาพ</h4>
                <p>{editValuesInput.student_status}</p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="student_teacher_profile_right">
        <div className="student_teacher_profile_title">
          <h2>ข้อมูลอาจารย์ที่ปรึกษา</h2>
        </div>
        <div className="student_teacher_profile_text_left">
          <h4>อาจารย์ที่ปรึกษา</h4>
          <p>{editValuesInput.advisor}</p>
          <h4>คณะ</h4>
          <p> {editValuesInput.faculty}</p>
          <h4>สาขาวิชา</h4>
          <p> {editValuesInput.major}</p>
        </div>
        <div className="student_teacher_profile_text_right">
          <h4>เบอร์โทรศัพท์อาจารย์ที่ปรึกษา</h4>
          <p>{editValuesInput.phone_number_advisor}</p>
          <h4>อีเมล์อาจารย์ที่ปรึกษา</h4>
          <p>{editValuesInput.email_advisor}</p>
        </div>
      </div>
    </div>
  );
}
