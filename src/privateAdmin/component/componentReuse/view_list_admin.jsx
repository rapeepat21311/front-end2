import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./view_document_component.scss";

import ModeIcon from "@mui/icons-material/Mode";
import { useSelector } from "react-redux";
import { readAdmin } from "../../../route/function/admin";

function Viewlist_admin({ onClose, id }) {
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    readAdmin(user.token, id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              onClick={() => navigate(`/admin-page/edit-admin/${id}`)}
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
          <p className="view_value">{data.admin_id}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ตำแหน่ง</h1>
          <p className="view_value">{data.admin_position}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อ-นามสกุล</h1>
          <p className="view_value">{data.admin_full_name_th}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">คณะ</h1>
          <p className="view_value">{data.admin_faculty}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">สาขา</h1>
          <p className="view_value">{data.admin_major}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">หมายเลขโทรศัพท์มือถือ</h1>
          <p className="view_value">{data.admin_phone_number}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">อีเมลสถาบัน</h1>
          <p className="view_value">{data.email_education}</p>
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
            {data.admin_status ? "ACTIVE" : "INACTIVE"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Viewlist_admin;
