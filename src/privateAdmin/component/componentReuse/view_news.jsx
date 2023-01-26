import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./view_document_component.css";

import ModeIcon from "@mui/icons-material/Mode";

function View_news({ onClose, id }) {
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
              onClick={() => navigate(`/admin-page/edit-news/${id}`)}
            >
              แก้ไข
            </p>
          </div>
        </div>
      </div>
      <div className="view_document_user_container">
        <div className="document_user_title">
          <p>ข้อมูลข่าวสาร</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ลำดับ</h1>
          <p className="view_value">{"5"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">รูปภาพปก</h1>
          <p className="view_value">{"image.png"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">หัวข่าว</h1>
          <p className="view_value">
            {"นอร์ทกรุงเทพ โบว์ลิ่งเกมส์ 2565 ครั้งที่ 4"}
          </p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">เนื้อหาข่าว</h1>
          <p className="view_value">
            {
              "88 SANDBOX พัฒนาศักยภาพ Startup ในงาน 88 Match & Mentor รวบรวมดาวเด่นด้าน Smart City 2022"
            }
          </p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ประเภทข่าว</h1>
          <p className="view_value">{"ข่าวประชาสัมพันธ์"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">วันที่ประกาศ</h1>
          <p className="view_value">{"12/12/2565"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">เอกสารแนบ</h1>
          <p className="view_value">{"file.pdf"}</p>
        </div>
      </div>
    </div>
  );
}

export default View_news;
