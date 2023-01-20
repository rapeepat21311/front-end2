import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./view_document_component.css";

import ModeIcon from "@mui/icons-material/Mode";

function Viewlist_teacher({ onClose, id }) {
  const navigate = useNavigate();

  const [getId, setGetId] = useState();

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
              onClick={() => navigate(`/admin-page/edit-teacher/${id}`)}
            >
              แก้ไข
            </p>
          </div>
        </div>
      </div>
      <div className="view_document_user_container">
        <div className="document_user_title">
          <p>ข้อมูลอาจารย์</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">รหัสอาจารย์</h1>
          <p className="view_value">{"0258001"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ตำแหน่ง</h1>
          <p className="view_value">{"ผศ."}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อ-นามสกุล</h1>
          <p className="view_value">{"ศุภกร กลีบพุฒ"}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">คณะ</h1>
          <p className="view_value">{"เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">สาขา</h1>
          <p className="view_value">{"วิศวกรรมซอฟต์แวร์"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">หมายเลขโทรศัพท์มือถือ</h1>
          <p className="view_value">{"019-191-9119"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">อีเมลสถาบัน</h1>
          <p className="view_value">{"supakorn.klee@northbkk.ac.th"}</p>
        </div>

        <div className="document_user_title">
          <p>ข้อมูลบัญชีผู้ใช้</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">Username</h1>
          <p className="view_value">{"621113759"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">Password</h1>
          <p className="view_value">{"621113759"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">สถานะของผู้ใช้</h1>
          <p className="view_value">{"Active"}</p>
        </div>
      </div>
    </div>
  );
}

export default Viewlist_teacher;
