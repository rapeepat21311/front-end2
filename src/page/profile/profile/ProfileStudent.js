import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";

import userContext from "../../../context/userContext";
import { listUser, readUser } from "../../../route/function/user";

import "./profileStudent.css";

export default function ProfileStudent() {
  const { user } = useSelector((state) => ({ ...state }));

  // console.log("check ----> ", user._id);
  // const [user, setUser] = useContext(userContext);
  // useEffect(() => {
  //   //code
  //   loadData();
  // }, []);

  // const loadData = () => {
  //   listUser(user.token)
  //     .then((res) => {
  //       console.log("CHECK TRUE ---->", res);
  //     })
  //     .catch((err) => {
  //       console.log("CHECK FALSE ---->", err);
  //     });
  // };

  return (
    <div className="profile_student">
      <div className="profile_student_container_left">
        <h2>ข้อมูลส่วนตัว</h2>
        <div className="profile_student_left">
          <div className="student_profile_left">
            <h4>รหัสนักศึกษา </h4>
            <p>{user.studentId}</p>
            <h4>เลขประจำตัวประชาชน </h4>
            <p> {user.idNumber}</p>
            <h4>ชื่อ(ภาษาไทย) </h4>
            <p>{user.nameTh}</p>
            <h4>ชื่อ(ภาษาอังกฤษ) </h4>
            <p>{user.nameEng}</p>
            <h4>คณะ </h4>
            <p>{user.faculty}</p>
            <h4>สาขา </h4>
            <p>{user.major}</p>
          </div>
          <div className="student_profile_right">
            <h4>Email </h4>
            <p>{user.email}</p>
            <h4>เบอร์มือถือ</h4>
            <p>{user.phoneNumber}</p>
            <h4>ระดับการศึกษา</h4>
            <p>{user.educationLevel}</p>
            <h4>ปีการศึกษาที่เข้า</h4>
            <p>{user.year}</p>
            <h4>จบการศึกษาจาก</h4>
            <p>{user.oldSchool}</p>
            <h4>สถานภาพ</h4>
            <p>{user.status}</p>
          </div>
        </div>
      </div>
      <div className="student_teacher_profile_right">
        <h2>ข้อมูลอาจารย์ที่ปรึกษา</h2>
        <div className="student_teacher_profile_text">
          <h4>อาจารย์ที่ปรึกษา</h4>
          <p>{user.advisor}</p>
          <h4>สังกัดอาจารย์ที่ปรึกษา</h4>
          <p> {user.aa}</p>
          <h4>เบอร์โทรศัพท์อาจารย์ที่ปรึกษา</h4>
          <p>{user.phone_number_advisor}</p>
          <h4>อีเมล์อาจารย์ที่ปรึกษา</h4>
          <p>{user.email_advisor}</p>
        </div>
      </div>
    </div>
  );
}
