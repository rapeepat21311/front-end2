import React, { useState } from "react";
import Edit_create_page_title from "../../../componentReuse/edit_create_page_title/edit_create_page_title";
import "../../testTable/addTesttable/add_test_table";
import default_image from "../../../../../image/vector (16).png";
import search_icon from "../../../../../image/search.png";
import Button_submit from "../../../componentReuse/button_submit/button_submit";
import Uploadfile from "../../../componentReuse/uploadefile/uploadfile";

function Add_performance() {
  const [imagePerformance, setImagePerformance] = useState(default_image);
  const [image, setImage] = useState([default_image]);
  const [imagePerformanceName, setImagePerformanceName] =
    useState("No Select Image");
  const [imageName, setImageName] = useState("No Select Image");

  return (
    <div className="add_testtable_page_container">
      <Edit_create_page_title page={"เพิ่มผลงาน"} />
      <div className="add_test_table_title_text">ข้อมูลนักศึกษา</div>
      <div className="add_test_table_box">
        <div className="add_test_table_input_value_container">
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "50%" }}
          >
            <h2>รหัสนักศึกษา</h2>
            <div className="test_table_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "50%" }}
          >
            <h2>ชื่อ-นามสกุล</h2>
            <div className="test_table_input_search_container">
              <input type="text" />
              <img src={search_icon} alt="" />
            </div>
          </div>
        </div>
        <div className="add_test_table_input_value_container">
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "50%" }}
          >
            <h2>คณะ</h2>
            <p className="default_input">{"value"} </p>
          </div>
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "50%" }}
          >
            <h2>สาขา</h2>
            <p className="default_input">{"value"} </p>
          </div>
        </div>
        <div className="add_test_table_input_value_container">
          <div
            className="add_test_table_input_value_width_container"
            style={{ width: "100%" }}
          >
            <h2>อีเมลสถาบัน</h2>
            <p className="default_input">{"value"} </p>
          </div>
        </div>

        <div className="add_test_table_title_text">ข้อมูลรายวิชา</div>
        <div className="add_test_table_box">
          <div className="add_test_table_input_value_container">
            <div
              className="add_test_table_input_value_width_container"
              style={{ width: "50%" }}
            >
              <h2>ภาคการศึกษา</h2>
              <select name="" id="">
                <option value="">2/2565</option>
              </select>
            </div>
            <div
              className="add_test_table_input_value_width_container"
              style={{ width: "50%" }}
            >
              <h2>วันที่บันทึกข้อมูล</h2>
              <input type="date" />
            </div>
          </div>
          <div className="add_test_table_input_value_container">
            <div
              className="add_test_table_input_value_width_container"
              style={{ width: "100%" }}
            >
              <h2>ชื่อการแข่งขัน/งาน</h2>
              <input type={"text"} />
            </div>
          </div>
          <div className="add_test_table_input_value_container">
            <div
              className="add_test_table_input_value_width_container"
              style={{ width: "50%" }}
            >
              <h2>สถานที่</h2>
              <input type={"text"} />
            </div>
            <div
              className="add_test_table_input_value_width_container"
              style={{ width: "50%" }}
            >
              <h2>วันที่</h2>
              <input type={"date"} />
            </div>
          </div>
          <div className="add_test_table_input_value_container">
            <div
              className="add_test_table_input_value_width_container"
              style={{ width: "100%" }}
            >
              <h2>ชื่อรางวัลที่ได้รับ</h2>
              <input type={"text"} />
            </div>
          </div>
          <div className="add_test_table_input_value_container">
            <div
              className="add_test_table_input_value_width_container"
              style={{ width: "100%" }}
            >
              <h2>ประเภทผลงาน</h2>
              <select>
                <option value="">เลือกประเภทผลงาน</option>
                <option value="">ผลงานภายใน</option>
                <option value="">ผลงานภายนอก</option>
              </select>
            </div>
          </div>
          <div className="add_test_table_input_value_container">
            <div
              className="add_test_table_input_value_width_container"
              style={{ width: "100%" }}
            >
              <h2>หมวดหมู่</h2>
              <p>เลือกหมวดหมู่</p>
            </div>
          </div>
          <div className="add_test_table_input_value_container">
            <div
              className="add_test_table_input_value_width_container"
              style={{ width: "100%" }}
            >
              <h2>รูปภาพรางวัล</h2>
              <Uploadfile
                placeholder={"อัปโหลดไฟล์ .PNG (ขนาดไม่เกิน 5 mb)"}
                defaultImage={default_image}
                fileName={imagePerformanceName}
                setFilename={setImagePerformanceName}
                image={imagePerformance}
                setImage={setImagePerformance}
              />
            </div>
          </div>
          <div className="add_test_table_input_value_container">
            <div
              className="add_test_table_input_value_width_container"
              style={{ width: "100%" }}
            >
              <h2>รูปภาพบรรยากาศ</h2>
              <Uploadfile
                placeholder={"อัปโหลดไฟล์ .PNG (ขนาดไม่เกิน 5 mb)"}
                defaultImage={default_image}
                fileName={imageName}
                setFilename={setImageName}
                image={image}
                setImage={setImage}
              />
            </div>
          </div>
        </div>
      </div>
      <Button_submit />
    </div>
  );
}

export default Add_performance;
