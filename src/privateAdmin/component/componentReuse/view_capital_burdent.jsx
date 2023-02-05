import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./view_document_component.css";

import ModeIcon from "@mui/icons-material/Mode";

function View_capital_burden({ onClose, id }) {
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
              onClick={() => navigate(`/admin-page/edit-capital-burden/${id}`)}
            >
              แก้ไข
            </p>
          </div>
        </div>
      </div>
      <div className="view_document_user_container">
        <div className="document_user_title">
          <p>ข้อมูลภาระทุน</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ภาคการศึกษา</h1>
          <p className="view_value">{"2/2565"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ประเภท</h1>
          <p className="view_value">{"E30"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ผู้ให้ทุน</h1>
          <p className="view_value">{"-"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">จำนวนเงิน </h1>
          <p className="view_value">{"14,680"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ส่วนลดทุน</h1>
          <p className="view_value">{"4,404"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">คงเหลือ</h1>
          <p className="view_value">{"10,276"}</p>
        </div>
      </div>
      <div className="view_document_user_container">
        <div className="document_user_title">
          <p>ข้อมูลนักศึกษา</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">รหัสนักศึกษา</h1>
          <p className="view_value">{"621113759"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อ-นามสกุล (ไทย)</h1>
          <p className="view_value">{"นาย ศุภกร กลีบพุฒ"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">คณะ</h1>
          <p className="view_value">{"เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">สาขา </h1>
          <p className="view_value">{"วิศวกรรมซอฟต์แวร์"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">อีเมลสถาบัน</h1>
          <p className="view_value">{"supakorn.klee@northbkk.ac.th"}</p>
        </div>
      </div>
    </div>
  );
}

export default View_capital_burden;
