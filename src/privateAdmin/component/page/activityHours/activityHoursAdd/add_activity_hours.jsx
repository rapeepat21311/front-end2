import React from "react";
import Edit_create_page_title from "../../../componentReuse/edit_create_page_title/edit_create_page_title";
import "./add_activity_hours.scss";
function Add_activity_hours() {
  return (
    <div className="create_activity_hours_container">
      <Edit_create_page_title page={"เพื่มรายงานชั่วโมงกิจกรรม"} />
    </div>
  );
}

export default Add_activity_hours;
