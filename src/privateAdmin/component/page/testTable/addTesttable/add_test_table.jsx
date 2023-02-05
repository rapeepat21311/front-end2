import React, { useEffect, useState } from "react";
import Button_submit from "../../../componentReuse/button_submit/button_submit";
import Edit_create_page_title from "../../../componentReuse/edit_create_page_title/edit_create_page_title";
import "./add_test_table.scss";
import search_icon from "../../../../../image/search.png";

function Add_test_table() {
  const [component, setComponent] = useState(0);

  const componentSearchStudent = [];
  for (let i = 0; i <= component; i++) {
    componentSearchStudent.push(
      <div className="component_search_student_box">
        <div className="add_test_table_input_value_container">
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "20%" }}
          >
            <h2>รหัสนักศึกษา</h2>
            <div className="test_table_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "70%" }}
          >
            <h2>ชื่อ-นามสกุล</h2>
            <div className="test_table_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "10%" }}
          >
            <h2>เลขที่นั่งสอบ</h2>

            <input type="number" />
          </div>
          <div className="add_test_table_input_value_10per_container">
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
    <div className="add_testtable_page_container">
      <Edit_create_page_title page={"เพิ่มตารางสอบ"} />
      <div className="add_test_table_title_text">ข้อมูลรายวิชา</div>
      <div className="add_test_table_box">
        <div className="add_test_table_input_value_container">
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "20%" }}
          >
            <h2>รหัสอาจารย์</h2>
            <div className="test_table_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "80%" }}
          >
            <h2>ชื่อรายวิชา</h2>
            <div className="test_table_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
        </div>
        <div className="add_test_table_input_value_container">
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "33.33%" }}
          >
            <h2>ภาคการศึกษา</h2>
            <input type="text" />
          </div>
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "33.33%" }}
          >
            <h2>กลุ่ม</h2>
            <input type="text" />
          </div>
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "33.33%" }}
          >
            <h2>Block</h2>
            <input type="text" />
          </div>
        </div>
        <div className="add_test_table_input_value_container">
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "50%" }}
          >
            <h2>วันที่สอบ</h2>
            <input type="date" />
          </div>
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "50%" }}
          >
            <h2>ช่วงเวลา</h2>

            <select name="" id="">
              <option value="">12.00-14.00</option>
            </select>
          </div>
        </div>
        <div className="add_test_table_input_value_container">
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "50%" }}
          >
            <h2>ห้อง</h2>
            <input type="text" />
          </div>
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "50%" }}
          >
            <h2>อาจารย์ผู้คุมสอบ</h2>
            <div className="test_table_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
        </div>
        <div className="add_test_table_title_text">รายชื่อนักศึกษา</div>
        {componentSearchStudent}
      </div>
      <div className="button_add_table_container">
        <div
          className="button_add_table"
          onClick={() => setComponent(component + 1)}
        >
          <h3>{"+"}</h3>
          <h3> เพิ่มรายชื่อนักศึกษา</h3>
        </div>
      </div>
      <Button_submit />
    </div>
  );
}

export default Add_test_table;
