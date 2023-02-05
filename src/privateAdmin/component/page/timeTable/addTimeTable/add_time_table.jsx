import React, { useEffect } from "react";
import Button_submit from "../../../componentReuse/button_submit/button_submit";
import Edit_create_page_title from "../../../componentReuse/edit_create_page_title/edit_create_page_title";
import "./add_time_table.scss";
import search_icon from "../../../../../image/search.png";
import { useState } from "react";

function Add_time_table() {
  const [component, setComponent] = useState(0);

  const componentSearchStudent = [];
  for (let i = 0; i <= component; i++) {
    componentSearchStudent.push(
      <div className="component_search_student_box">
        <div className="add_time_table_input_value_container">
          <div className="add_time_table_input_value_20per_container">
            <h2>รหัสนักศึกษา</h2>
            <div className="time_table_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
          <div className="add_time_table_input_value_60per_container">
            <h2>ชื่อ-นามสกุล</h2>
            <div className="time_table_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
          <div className="add_time_table_input_value_10per_container">
            <div className="close_table">
              <h2 onClick={() => setComponent(component - 1)}>{"X"}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (component < 0) {
      setComponent(0);
    }
  }, [component]);
  return (
    <div className="add_timetable_page_container">
      <Edit_create_page_title page={"เพิ่มตารางเรียน"} />
      <div className="add_time_table_box">
        {/* หัวข้อ */}
        <div className="add_time_table_title_text">ข้อมูลรายวิชา</div>
        {/* หัวข้อ */}
        <div className="add_time_table_input_value_container">
          <div className="add_time_table_input_value_20per_container">
            <h2>รหัสวิชา</h2>
            <input type="text" />
          </div>
          <div className="add_time_table_input_value_80per_container">
            <h2>ชื่อรายวิชา</h2>
            <input type="text" />
          </div>
        </div>
        <div className="add_time_table_input_value_container">
          <div className="add_time_table_input_value_33per_container">
            <h2>ภาคการศึกษา</h2>
            <select>
              <option value="">2/2565</option>
            </select>
          </div>
          <div className="add_time_table_input_value_33per_container">
            <h2>กลุ่ม</h2>
            <input type="text" />
          </div>
          <div className="add_time_table_input_value_33per_container">
            <h2>Block</h2>
            <input type="text" />
          </div>
        </div>
        <div className="add_time_table_input_value_container">
          <div className="add_time_table_input_value_25per_container">
            <h2>ระยะเวลา</h2>
            <select>
              <option value=""></option>
            </select>
          </div>
          <div className="add_time_table_input_value_25per_container">
            <h2>วัน</h2>
            <select>
              <option value=""></option>
            </select>
          </div>
          <div className="add_time_table_input_value_25per_container">
            <h2>ช่วงเวลา</h2>
            <select>
              <option value=""></option>
            </select>
          </div>
          <div className="add_time_table_input_value_25per_container">
            <h2>ห้อง</h2>
            <input type="text" />
          </div>
        </div>
        <div className="add_time_table_input_value_container">
          <div className="add_time_table_input_value_50per_container">
            <h2>รหัสอาจารย์</h2>
            <div className="time_table_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
          <div className="add_time_table_input_value_50per_container">
            <h2>อาจารย์ผู้สอน</h2>
            <div className="time_table_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="add_time_table_box">
        {/* หัวข้อ */}
        <div className="add_time_table_title_text">
          รายชื่อนักศึกษาในรายวิชา
        </div>
        {componentSearchStudent}
      </div>
      <div className="button_add_table_container">
        <div
          className="button_add_table"
          onClick={() => setComponent(component + 1)}
        >
          <h2>{"+"}</h2>
          <h3> เพิ่มรายชื่อนักศึกษา</h3>
        </div>
      </div>
      <Button_submit />
    </div>
  );
}

export default Add_time_table;
