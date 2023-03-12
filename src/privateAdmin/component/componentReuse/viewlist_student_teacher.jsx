import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./view_document_component.scss";

import ModeIcon from "@mui/icons-material/Mode";
import { useSelector } from "react-redux";
import { avisorId } from "../../../route/function/teacher";

function Viewlist_teacher_student({ onClose, id }) {
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    avisorId(user.token, id)
      .then((res) => {
        setData(res.data.data.data_teacher);
      })
      .catch((err) => console.log(err));
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
              onClick={() =>
                navigate(`/admin-page/edit-teacher-student-inclass/${id}`)
              }
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
          <p className="view_value">{data.teacher_id}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อ-นามสกุล (ไทย)</h1>
          <p className="view_value">{data.teacher_fullname}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">คณะ</h1>
          <p className="view_value">{data.teacher_faculty}</p>
        </div>

        <div className="view_private_document_text_container">
          <h1 className="view_field_name">สาขา</h1>
          <p className="view_value">{data.teacher_major}</p>
        </div>

        <div className="document_user_title">
          <p>นักศึกษาในการดูแล</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">ชื่อรุ่น</h1>
          <p className="view_value">{"SWE62"}</p>
        </div>
        <div className="view_private_document_text_container">
          <h1 className="view_field_name">รายชื่อนักศึกษา</h1>
          <div className="div">
            {data.students?.map((item) => {
              return (
                <div className="container_map_data">
                  {/* <p>{item.student_id}</p> */}
                  <p>{item.user_fullname}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewlist_teacher_student;
