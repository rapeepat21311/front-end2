import React, { useState, useMemo, useEffect } from "react";
import "./create_news.scss";

import fileImage from "../../../../../image/vector (17).png";
import defaultImage from "../../../../../image/vector (16).png";
import Texteditor from "../../../../../page/news/texteditor/texteditor";
import Uploadfile from "../../../componentReuse/uploadefile/uploadfile";
import Button_submit from "../../../componentReuse/button_submit/button_submit";

function CreateNews() {
  const [image, setImage] = useState(null);
  const [pdffile, setPDFFile] = useState(null);
  const [pdffileName, setPDFFileName] = useState("");
  const [fileName, setFilename] = useState("No select File");
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("file", fileName);
    console.log("pdffile", pdffileName);
  }, [fileName,pdffile]);

  return (
    <div className="create_news_page_container">
      <div className="page_text_container">
        <h1 className="page_text">เพิ่มข่าวสาร</h1>
      </div>
      <div className="input_value_container">
        <div className="input_value_tittle_text">ข้อมูลผลงาน</div>
        <div className="text_field_title_container">
          <h2>ลำดับ</h2>
          <p>{"1"}</p>
        </div>
        <div className="student_avatar_container">
          <div className="create_title_text_box">
            <p className="create_title_text">รูปภาพ</p>
          </div>
          <div className="student_avatar">
            <div className="avatar_image_container">
              <div className="avatar_image">
                {image ? (
                  <img
                    src={image}
                    alt={fileName}
                    style={{
                      width: "100%",
                      height: "64px",
                      borderRadius: "8px",
                    }}
                  />
                ) : (
                  <img src={defaultImage} />
                )}
              </div>
            </div>
            <div className="avatar_upload_description_text_container">
              <p>อัปโหลดรูปภาพ (ขนาดไม่เกิน 5 mb)</p>
            </div>
            <div className="avatar_upload_file">
              <form
                onClick={() =>
                  document.querySelector(".input_avatar_student").click()
                }
              >
                <input
                  type="file"
                  className="input_avatar_student"
                  hidden
                  onChange={({ target: { files } }) => {
                    files[0] && setFilename(files[0].name);
                    if (files) {
                      setImage(URL.createObjectURL(files[0]));
                    }
                  }}
                />
                <p>อัพโหลด</p>
              </form>
            </div>
          </div>
        </div>
        <div className="text_field_title_container">
          <h2>หัวข้อข่าว</h2>
          <input type="text" />
        </div>
        <div className="text_field_title_container">
          <h2>เนื้อหาข่าว</h2>
          <Texteditor
            setValue={setValue}
            className={"texteditor"}
            value={value}
          />
        </div>
        <div className="text_field_title_container">
          <h2>ประเภทข่าว</h2>
          <select>
            <option>เลือกประเภทข่าว</option>
            <option>ภายใน</option>
            <option>ภายนอก</option>
          </select>
        </div>
        <div className="text_field_title_container">
          <h2>เอกสารแนบ</h2>
          <Uploadfile
            placeholder={"อัปโหลดไฟล์ .PDF (ขนาดไม่เกิน 5 mb)"}
            defaultImage={fileImage}
            fileName={pdffileName}
            setFilename={setPDFFileName}
            image={pdffile}
            setImage={setPDFFile}
          />
        </div>
        <Button_submit />
      </div>
    </div>
  );
}

export default CreateNews;
