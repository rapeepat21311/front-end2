import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./view_document_component.css";

import ModeIcon from "@mui/icons-material/Mode";

function View_activity_hours({ onClose, id }) {
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
              onClick={() => navigate(`/admin-page/edit-activity-hours/${id}`)}
            >
              แก้ไข
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View_activity_hours;
