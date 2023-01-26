import React, { useState } from "react";
import Edit_create_page_title from "../../../componentReuse/edit_create_page_title/edit_create_page_title";
import Uploadfile from "../../../componentReuse/uploadefile/uploadfile";

import JPGdefaultimage from "../../../../../image/vector (18).png";
import Texteditor from "../../../../../page/news/texteditor/texteditor";
import Button_submit from "../../../componentReuse/button_submit/button_submit";

function EditEvent() {
  const [imageJPG, setImageJPG] = useState(null);
  const [jpgName, setJPGname] = useState("");
  const [imagePDF, setImagePDF] = useState(null);
  const [pdfName, setPDFname] = useState("");
  const [value, setValue] = useState("");
  return (
    <div className="create_event_page_container">
      <Edit_create_page_title page={"แก้ไขกิจกรรม"} />
      <div className="create_news_input_value_text_container">
        <h2>ลำดับ</h2>
        <p>{"1"}</p>
      </div>
      <div className="create_news_input_value_text_container">
        <h2>รูปภาพปก</h2>
        <Uploadfile
          image={imageJPG}
          setImage={setImageJPG}
          fileName={jpgName}
          setFilename={setJPGname}
          defaultImage={JPGdefaultimage}
          placeholder={"อัปโหลดไฟล์ .JPG (ขนาดไม่เกิน 5 mb)"}
        />
      </div>
      <div className="create_news_input_value_text_container">
        <h2>หัวข้อกิจกรรม</h2>
        <input type="text" />
      </div>
      <div className="create_news_input_value_text_container">
        <h2>เนื้อหากิจกรรม</h2>
        <Texteditor
          setValue={setValue}
          value={value}
          className={"text_editor"}
        />
      </div>
      <div className="create_news_input_value_text_container">
        <h2>ประเภทกิจกรรม</h2>
        <select>
          <option>เลือกประเภท</option>
        </select>
      </div>

      <div className="create_event_time_container">
        <div className="select_time_event">
          <h2>วันที่เริ่ม</h2>
          <input type={"date"} />
        </div>
        <div className="select_time_event">
          <h2>เวลาที่เริ่ม</h2>
          <input type={"time"} />
        </div>
        <div className="select_time_event">
          <h2>วันที่สิ้นสุด</h2>
          <input type={"date"} />
        </div>
        <div className="select_time_event">
          <h2>เวลาที่สิ้นสุด</h2>
          <input type={"time"} />
        </div>
      </div>
      <div className="create_news_input_value_text_container">
        <h2>สถานที่</h2>
        <input type={"text"} />
      </div>
      <div className="create_news_input_value_text_container">
        <h2>เอกสารแนบ</h2>
        <Uploadfile
          image={imagePDF}
          setImage={setImagePDF}
          fileName={pdfName}
          setFilename={setPDFname}
          defaultImage={JPGdefaultimage}
          placeholder={"อัปโหลดไฟล์ .PDF (ขนาดไม่เกิน 5 mb)"}
        />
      </div>
      <Button_submit />
    </div>
  );
}

export default EditEvent;
