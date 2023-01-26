import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./view_document_component.css";

import ModeIcon from "@mui/icons-material/Mode";

function View_student_inclass({ onClose, id }) {
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
          <p>ข้อมูลอาจารย์ที่ปรึกษา</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">รหัสอาจารย์</h1>
          <p className="view_value">{"621111391"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อ-นามสกุล (ไทย)</h1>
          <p className="view_value">{"นาย ศุภกร กลีบพุฒ"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">คณะ</h1>
          <p className="view_value">{"621113759"}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">สาขา</h1>
          <p className="view_value">{"supakorn.klee@northbkk.ac.th"}</p>
        </div>

        <div className="document_user_title">
          <p>นักศึกษาในการดูแล</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ขื่อรุ่น</h1>
          <p className="view_value">{`SWE62`}</p>
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

export default View_student_inclass;
