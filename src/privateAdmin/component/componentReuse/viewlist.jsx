import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./view_document_component.css";

import ModeIcon from "@mui/icons-material/Mode";

function Viewlist({ onClose, id, data }) {
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
          <p className="view_value">{"621111391"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">เลขที่บัตรประชาชน</h1>
          <p className="view_value">{"1110201221311"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อ-นามสกุล</h1>
          <p className="view_value">{"นาย ระพีพัฒน์ สุวรรณทอง"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">Full Name</h1>
          <p className="view_value">{"Mr.Rapeepat Suwanthon"}</p>
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
          <h1 className="view_field_name">ปีการศึกษาที่เข้า</h1>
          <p className="view_value">{"1/2562"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อรุ่น</h1>
          <p className="view_value">{"SWE62"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชั้นปีที่ 4</h1>
          <p className="view_value">{"Mr.Rapeepat Suwanthon"}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">อีเมลสถาบัน</h1>
          <p className="view_value">{"rapeepat.suwa@northbkk.ac.th"}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">สถานภาพ</h1>
          <p className="view_value">{"กำลังศึกษา"}</p>
        </div>

        <div className="document_user_title">
          <p>ข้อมูลส่วนตัว</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">หมายเลขโทรศัพท์บ้าน</h1>
          <p className="view_value">{"02-999-9999"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">หมายเลขโทรศัพท์มือถือ</h1>
          <p className="view_value">{"096-999-9999"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ที่อยู่ปัจจุบัน</h1>
          <p className="view_value">
            {
              "เลขที่ 77/102-103 อาคารสินสาธร ชั้น 25 ถนนกรุงธนบุรี แขวงคลองต้นไทร เขตคลองสาน กรุงเทพมหานคร 10600"
            }
          </p>
        </div>
        <div className="document_user_title">
          <p>ข้อมูลการศึกษา</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ระดับการศึกษา</h1>
          <p className="view_value">{"มัธยมศึกษาตอนปลาย"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อสถานศึกษา</h1>
          <p className="view_value">{"โรงเรียนนวมินทราชูทิศ กรุงเทพมหานคร"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">แผนการเรียน</h1>
          <p className="view_value">{"ศิลป์-คํานวณ"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ปีจบการศึกษา</h1>
          <p className="view_value">{"2561"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">เกรดระดับมัธยม</h1>
          <p className="view_value">{"2.78"}</p>
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

export default Viewlist;
