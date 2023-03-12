import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./view_document_component.scss";

import ModeIcon from "@mui/icons-material/Mode";

function View_event({ onClose, id }) {
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
              onClick={() => navigate(`/admin-page/edit-events/${id}`)}
            >
              แก้ไข
            </p>
          </div>
        </div>
      </div>
      <div className="view_document_user_container">
        <div className="document_user_title">
          <p>ข้อมูลกิจกรรม</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ลำดับ</h1>
          <p className="view_value">{"5"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">วันที่ประกาศ</h1>
          <p className="view_value">{"12/12/2565"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">รูปภาพปก</h1>
          <p className="view_value">{"image.png"}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">หัวข้อกิจกรรม</h1>
          <p className="view_value">
            {
              "ขอเชิญเข้าร่วมประชุมปฏิบัติการออนไลน์ในหัวข้อ “GLOBAL ENGLISH CHALLENGES”"
            }
          </p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">เนื้อหากิจกรรม</h1>
          <p className="view_value">{`จัดโดย หลักสูตรศิลปศาสตรมหาบัณฑิตและหลักสูตรปรัชญาบัณฑิต สาขาวิชาภาษาอังกฤษศึกษา

หลักสูตรศิลปศาสตรบัณฑิต สาขาวิชาภาษาอังกฤษธุรกิจสากลและการสอนภาษาอังกฤษเพื่อผู้ำพูดภาษาอื่น
ณ มหาวิทยาลัยนอร์ทกรุงเทพ วันอาทิตย์ที่ 6 ...`}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ประเภทกิจกรรม</h1>
          <p className="view_value">{"กิจกรรมภายใน"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">เวลาที่เริ่ม</h1>
          <p className="view_value">{"25/12/2565 09:00"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">เวลาที่สิ้นสุด</h1>
          <p className="view_value">{"25/12/2565 18:00"}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">สถานที่</h1>
          <p className="view_value">{"มหาวิทยาลัยนอร์ทกรุงเทพ"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">เอกสารแนบ</h1>
          <p className="view_value">{"file.pdf"}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">สถานะ</h1>
          <p className="view_value">{"กิจกรรมแนะนำ"}</p>
        </div>
      </div>
    </div>
  );
}

export default View_event;
