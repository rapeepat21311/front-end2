import React from "react";
import Edit_create_page_title from "../../../componentReuse/edit_create_page_title/edit_create_page_title";

import search_icon from "../../../../../image/search.png";
import Button_submit from "../../../componentReuse/button_submit/button_submit";

function Capital_burden_edit() {
  return (
    <div className="capital_burden_page_container">
      <Edit_create_page_title page={"แก้ไขภาระทุน"} />
      <div className="capital_burden_title_input">
        <h1>ภาระทุน</h1>
      </div>
      {/*  */}
      <div className="capital_burden_input_value_container">
        <div className="capital_burden_input_value">
          <h2>ภาคการศึกษา</h2>
          <select>
            <option value="">2/2565</option>
          </select>
        </div>
        <div className="capital_burden_input_value">
          <h2>ประเภท</h2>
          <select>
            <option value="">เลือกประเภททุน</option>
          </select>
        </div>
      </div>
      {/*  */}
      <div className="capital_burden_input_value_container">
        <div className="capital_burden_input_value">
          <h2>ผู้ให้ทุน</h2>
          <input type="text" />
        </div>
        <div className="capital_burden_input_value">
          <h2>จำนวนเงิน</h2>
          <input type="text" />
        </div>
      </div>
      <div className="capital_burden_input_value_container">
        <div className="capital_burden_input_value">
          <h2>ส่วนลดทุน</h2>
          <input className="default_input" type="text" />
        </div>
        <div className="capital_burden_input_value">
          <h2>คงเหลือ</h2>
          <input className="default_input" type="text" />
        </div>
      </div>
      <div className="capital_burden_title_input_search_student">
        <h1>ข้อมูลนักศึกษา</h1>
      </div>
      <div className="capital_burden_input_value_container">
        <div className="capital_burden_input_value">
          <h2>รหัสนักศึกษา</h2>
          <div className="captial_input_search_container">
            <input type="text" />
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="capital_burden_input_value">
          <h2>ชื่อ-นามสกุล</h2>{" "}
          <div className="captial_input_search_container">
            <input type="text" />
            <img src={search_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="capital_burden_input_value_container">
        <div className="capital_burden_input_value">
          <h2>คณะ</h2>
          <input className="default_input" type="text" />
        </div>
        <div className="capital_burden_input_value">
          <h2>สาขา</h2>
          <input className="default_input" type="text" />
        </div>
      </div>
      <Button_submit />
    </div>
  );
}

export default Capital_burden_edit;
