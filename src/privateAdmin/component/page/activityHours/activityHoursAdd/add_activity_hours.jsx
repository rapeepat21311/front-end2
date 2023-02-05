import React from "react";
import Edit_create_page_title from "../../../componentReuse/edit_create_page_title/edit_create_page_title";
import "./add_activity_hours.scss";

import search_icon from "../../../../../image/search.png";
import Button_submit from "../../../componentReuse/button_submit/button_submit";
function Add_activity_hours() {
  return (
    <div className="create_activity_hours_container">
      <Edit_create_page_title page={"เพื่มรายงานชั่วโมงกิจกรรม"} />
      <div className="create_activity_hours_box">
        <div className="create_activity_hours_title">ข้อมูลนักศึกษา</div>
        <div className="create_activity_hours_input_value_container">
          <div className="create_activity_hours_input_value">
            <h2>รหัสนักศึกษา</h2>
            <div className="captial_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
          <div className="create_activity_hours_input_value">
            <h2>ชื่อ-นามสกุล</h2>{" "}
            <div className="captial_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
        </div>
        <div className="create_activity_hours_input_value_container">
          <div className="create_activity_hours_input_value">
            <h2>คณะ</h2>
            <input className="default_input" type="text" />
          </div>
          <div className="create_activity_hours_input_value">
            <h2>สาขา</h2>
            <input className="default_input" type="text" />
          </div>
        </div>
        <div className="create_activity_hours_input_email_value">
          <h2>อีเมลสถาบัน</h2>
          <input className="default_input" type="text" />
        </div>
      </div>
      <div className="create_activity_hours_box">
        <div className="create_activity_hours_title">ข้อมูลกิจกรรม</div>
        <div className="create_activity_hours_input_value_container">
          <div className="create_activity_hours_input_value">
            <h2>ภาคการศึกษา</h2>
            <select>
              <option value="">2/2565</option>
            </select>
          </div>
          <div className="create_activity_hours_input_value">
            <h2>ตำแหน่ง</h2>
            <input type="text" />
          </div>
        </div>
        <div className="create_activity_hours_input_email_value">
          <h2>ชื่อกิจกรรม</h2>
          <input type="text" />
        </div>
        <div className="create_activity_hours_input_value_container">
          <div className="create_activity_hours_input_value">
            <h2>วันที่ทำกิจกรรม</h2>
            <input type="date" />
          </div>
          <div className="create_activity_hours_input_value">
            <h2>ชั่วโมงกิจกรรมสะสม</h2>
            <input type="number" />
          </div>
        </div>
        <div className="create_activity_hours_input_email_value">
          <h2>หมวดหมู่</h2>
          <select name="" id="">
            <option value="">เลือกหมวดหมู่</option>
          </select>
        </div>
      </div>
      <Button_submit />
    </div>
  );
}

export default Add_activity_hours;
