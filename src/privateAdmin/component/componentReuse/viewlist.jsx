import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./view_document_component.scss";

import ModeIcon from "@mui/icons-material/Mode";
import { readUser } from "../../../route/function/user";
import { useSelector } from "react-redux";

function Viewlist({ onClose, id }) {
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();

  const [data, setData] = useState({});

  useEffect(() => {
    readUser(user.token, id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {}, [data]);

  // const {
  //   student_id,
  //   id_number,
  //   user_fullname_th,
  //   user_fullname_eng,
  //   faculty,
  //   major,
  //   class_year_student,
  //   gpx_hight_school,
  //   model_name,
  //   student_email_education,
  //   student_status,
  //   phone_number,
  //   phone_number_home,
  //   last_address,
  //   last_level_student,
  //   old_school,
  //   last_major,
  //   username,
  //   user_status,
  // } = data;
  return (
    <div className="view_document_component">
      <div className="view_header_container">
        <div className="view_header_text_close_modal">
          <div className="view_header_text">
            <p className="header_text">รายละเอียด</p>
          </div>
          <div className="button_close_view_modal">
            <p onClick={onClose} className="button_close_modal">
              X
            </p>
          </div>
        </div>
        <div className="view_link_to_edit_document">
          <div className="button_edit_link_navigate_container">
            <ModeIcon className="pen_edit" />
            <p
              className="button_edit_link_navigate"
              onClick={() => navigate(`/admin-page/edit-user/${id}`)}
            >
              แก้ไข
            </p>
          </div>
        </div>
      </div>
      <div className="view_document_user_container">
        <div className="document_user_title">
          <p>ข้อมูลนักศึกษา</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">รหัสนักศึกษา</h1>
          <p className="view_value">{data.student_id}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">เลขที่บัตรประชาชน</h1>
          <p className="view_value">{data.id_number}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อ-นามสกุล</h1>
          <p className="view_value">{data.user_fullname_th}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">Full Name</h1>
          <p className="view_value">{data.user_fullname_eng}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">คณะ</h1>
          <p className="view_value">{data.faculty}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">สาขา</h1>
          <p className="view_value">{data.major}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ปีการศึกษาที่เข้า</h1>
          <p className="view_value">{data.year}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อรุ่น</h1>
          <p className="view_value">{data.model_name}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชั้นปีที่</h1>
          <p className="view_value">{data.class_year_student}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">อีเมลสถาบัน</h1>
          <p className="view_value">{data.student_email_education}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">สถานภาพ</h1>
          <p className="view_value">{data.student_status}</p>
        </div>

        <div className="document_user_title">
          <p>ข้อมูลส่วนตัว</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">หมายเลขโทรศัพท์บ้าน</h1>
          <p className="view_value">{data.phone_number_home}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">หมายเลขโทรศัพท์มือถือ</h1>
          <p className="view_value">{data.phone_number}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ที่อยู่ปัจจุบัน</h1>
          <p className="view_value">{data.last_address}</p>
        </div>
        <div className="document_user_title">
          <p>ข้อมูลการศึกษา</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ระดับการศึกษา</h1>
          <p className="view_value">{data.last_level_student}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อสถานศึกษา</h1>
          <p className="view_value">{data.old_school}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">แผนการเรียน</h1>
          <p className="view_value">{data.last_major}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ปีจบการศึกษา</h1>
          <p className="view_value">{data.year_end_old_school}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">เกรดระดับมัธยม</h1>
          <p className="view_value">{data.gpx_hight_school}</p>
        </div>
        <div className="document_user_title">
          <p>ข้อมูลบัญชีผู้ใช้</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">Username</h1>
          <p className="view_value">{data.username}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">Password</h1>
          <p className="view_value">{"621113759"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">สถานะของผู้ใช้</h1>
          <p className="view_value">
            {data.user_status ? "ACTIVE" : "INACTIVE"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Viewlist;
