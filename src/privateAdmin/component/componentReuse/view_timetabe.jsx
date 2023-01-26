import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./view_document_component.css";

import ModeIcon from "@mui/icons-material/Mode";

function View_TimeTable({ onClose, id }) {
  const navigate = useNavigate();

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
              onClick={() => navigate(`/admin-page/edit-timetable/${id}`)}
            >
              แก้ไข
            </p>
          </div>
        </div>
      </div>
      <div className="view_document_user_container">
        <div className="document_user_title">
          <p>ข้อทูลรายวิชา</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ภาคการศึกษา</h1>
          <p className="view_value">{"2/2565"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">รหัสวิชา</h1>
          <p className="view_value">{"SWE232"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อวิชา</h1>
          <p className="view_value">{"Database System Design I"}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">กลุ่ม</h1>
          <p className="view_value">{"1"}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">Block</h1>
          <p className="view_value">{"1"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ระยะเวลา</h1>
          <p className="view_value">{"16 สัปดาห์"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">วัน</h1>
          <p className="view_value">{"MON"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ช่วงเวลา</h1>
          <p className="view_value">{"09:00-12:00"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ห้อง</h1>
          <p className="view_value">{"2302"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">อาจารย์ผู้สอน</h1>
          <p className="view_value">{"ผศ. เจษฎา ซื้อสวัสดิ"}</p>
        </div>

        <div className="document_user_title">
          <p>รายชื่อนักศึกษาในรายวิชา</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">รายชื่อนักศึกษา</h1>
          <p className="view_value">{`621102685 เจษฎา ซื้อสวัสดิ
621109360 เอกพล โตเจริญ
621111391 ระพีพัฒน์ สุวรรณทอง
621112703 พัชช์ฐณณท์ เจริญเปี่ยม
621113759 ศุภกร กลีบพุฒ`}</p>
        </div>
      </div>
    </div>
  );
}

export default View_TimeTable;
