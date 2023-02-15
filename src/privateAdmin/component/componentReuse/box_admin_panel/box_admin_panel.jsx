import { height } from "@mui/system";
import React from "react";
import "./box_admin_panel.scss";
function Box_admin_panel({
  width = "33.33",
  height = "126px",
  text_header,
  persent,
  total,
}) {
  return (
    <div
      className="box_admin_panel_container"
      style={{ width: `${width}%`, height: height }}
    >
      <div className="box_admin_panel_box">
        <div className="box_admin_panel_title_text">{text_header}</div>
        <div className="box_admin_panel_description_container">
          <div className="box_admin_panel_description_text">
            <h5>{persent}</h5>
            <h6>เมื่อเปรียบเทียบกับปีก่อนหน้า</h6>
          </div>
          <div className="box_admin_panel_total_text">{total}</div>
        </div>
      </div>
    </div>
  );
}

export default Box_admin_panel;
