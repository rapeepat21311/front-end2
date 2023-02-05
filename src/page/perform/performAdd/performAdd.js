import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../component/navbar/Header/Header";
import Footer from "../../../component/navbar/Footer/Footer";
import { TbArrowNarrowLeft } from "react-icons/tb";

import "./performAdd.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { DefaultEditor } from "react-simple-wysiwyg";

function PerformAdd() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="performAdd">
        <div className="performAdd_header">
          <p onClick={() => navigate("/")}>หน้าหลัก</p>
          {" > "}
          <p onClick={() => navigate("/perform")}>ผลงาน</p>
          {" > "}
          <p>เพิ่มข้อมูลผลงาน</p>
        </div>
        <div className="performAdd_title">
          <p onClick={() => navigate("/perform")}>
            <TbArrowNarrowLeft /> กลับ
          </p>
        </div>
        <div className="performAdd_container">
          <div className="performAdd_container_box">
            <p>เพิ่มข้อมูลผลงาน</p>
            <div className="performAdd_container_name">
              <p>ชื่อการแข่งขัน / งาน</p>
              <input value={"กรอกชื่อการแข่งขัน / งาน"} />
            </div>
            <div className="performAdd_container_location">
              <div className="performAdd_container_location_date">
                <p>สถานที่</p>
                <input value={"กรอกสถานที่"} />
              </div>
              <div className="performAdd_container_date">
                <p>วันที่</p>
                <input value={"กรอกวันที่"} />
              </div>
            </div>

            <div className="performAdd_container_result">
              <p>ชื่อรางวัลที่ได้รับ</p>
              <input value={"กรอกชื่อรางวัลที่ได้รับ"} />
            </div>
            <div className="performAdd_container_type_result">
              <p>ประเภทผลงาน</p>
              <div className="performAdd_container_checkbox_type">
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value=""
                      control={<Radio />}
                      label="ผลงานภายใน"
                    />
                    <FormControlLabel
                      value=""
                      control={<Radio />}
                      label="ผลงานภายนอก"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="performAdd_container_detail">
              <p>ราละเอียด</p>
              <div className="performAdd_container_detail_text">
                <div className="performAdd_container_text_box">
                  <DefaultEditor value=""/>
                </div>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PerformAdd;
