import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../component/navbar/Header/Header";
import Footer from "../../../component/navbar/Footer/Footer";
import { TbArrowNarrowLeft } from "react-icons/tb";

import "./performAdd.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import JPGdefaultimage from "../../../image/vector (18).png";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Uploadfile from "../../../privateAdmin/component/componentReuse/uploadefile/uploadfile";
import Texteditor from "../../news/texteditor/texteditor";
import BackIcon from "../../../image/BackIcon.png"


import DefaultPicture from "../../../image/addpicture.png";
import { Button } from "@mui/material";

function PerformAdd() {
  const navigate = useNavigate();
  const [imageJPG, setImageJPG] = useState(null);
  const [jpgName, setJPGname] = useState("");
  const [value, setValue] = useState("");

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
          <p>
          <img onClick={() => navigate("/perform")} src={BackIcon}/>     
          </p>
          {/* <p onClick={() => navigate("/perform")}>กลับ</p> */}
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
              {/* <div className="performAdd_container_detail_text"> */}
              <div className="performAdd_container_text_box">
                {/* <h2>เนื้อหากิจกรรม</h2> */}
                <Texteditor
                  setValue={setValue}
                  value={value}
                  className={"text_editor"}
                />
              </div>
              {/* </div> */}
            </div>
            <div className="performAdd_container_img">
              <div className="performAdd_container_img_text">
                <p>รูปภาพรางวัล</p>
                <p1>{"(-/-) เพิ่มจำนวนรูป"}</p1>
              </div>
              {/* <div className="performAdd_container_imgin"> */}
              <Uploadfile
                image={DefaultPicture}
                setImage={setImageJPG}
                fileName={jpgName}
                setFilename={setJPGname}
                defaultImage={JPGdefaultimage}
                placeholder={"อัปโหลดไฟล์ .JPG (ขนาดไม่เกิน 5 mb)"}
              />
              {/* </div> */}
            </div>
            <div className="performAdd_container_env">
              <div className="performAdd_container_img_text">
                <p>รูปภาพบรรยากาศ</p>
                <p1>{"(-/-) เพิ่มจำนวนรูป"}</p1>
              </div>
              <Uploadfile
                image={DefaultPicture}
                setImage={setImageJPG}
                fileName={jpgName}
                setFilename={setJPGname}
                defaultImage={JPGdefaultimage}
                placeholder={"อัปโหลดไฟล์ .JPG (ขนาดไม่เกิน 5 mb)"}
              />
              <div className="performAdd_box_button">
                <div className="performAdd_container_button">
                  <Button>
                    <p>ยกเลิก</p>
                  </Button>
                </div>
                <div className="performAdd_container_button_agree">
                  <Button>
                    <p onClick={()=> navigate("/perform")}>บันทึก</p>
                  </Button>
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
