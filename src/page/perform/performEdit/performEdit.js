import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../component/navbar/Header/Header";
import Footer from "../../../component/navbar/Footer/Footer";
import { TbArrowNarrowLeft } from "react-icons/tb";

import "./performEdit.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import JPGdefaultimage from "../../../image/vector (18).png";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Uploadfile from "../../../privateAdmin/component/componentReuse/uploadefile/uploadfile";
import Texteditor from "../../news/texteditor/texteditor";
import { Button } from "@mui/material";
import BackIcon from "../../../image/BackIcon.png"

import DefaultPicture from "../../../image/addpicture.png"

function PerformEdit() {
  const navigate = useNavigate();
  const [imageJPG, setImageJPG] = useState(null);
  const [jpgName, setJPGname] = useState("");
  const [value, setValue] = useState("");

  return (
    <>
      <Header />
      <div className="performEdit">
        <div className="performEdit_header">
          <p onClick={() => navigate("/")}> หน้าหลัก </p>
          {" > "}
          <p onClick={() => navigate("/perform")}> ผลงาน </p>
          {" > "}
          <p> แก้ไขข้อมูลผลงาน </p>
        </div>
        <div className="performEdit_title">
          <p onClick={() => navigate("/perform")}>
          <img  src={BackIcon}/>   
          </p>
        </div>
        <div className="performEdit_container">
          <div className="performEdit_container_box">
            <p>แก้ไขข้อมูลผลงาน</p>
            <div className="performEdit_container_name">
              <p>ชื่อการแข่งขัน / งาน</p>
              <input value={"การประกวดผลงานเยาวชนอาสาสานต่อพระราชดำริ ภายใต้หัวข้อ “สืบสาน รักษา ต่อยอด” ในโครงการค่ายเยาวชนรู้งานสืบสานพระราชดำริ (RDPB CAMP) รุ่นที่ 12"}/>
            </div>
            <div className="performEdit_container_location">
              <div className="performEdit_container_location_date">
                <p>สถานที่</p>
                <input value={"โครงการพัฒนาพื้นที่ลุ่มน้ำปากพนัง จ.นครศรีธรรมราช"} />
              </div>
              <div className="performEdit_container_date">
                <p>วันที่</p>
                <input value={"10 / 10 / 2565"} />
              </div>
            </div>

            <div className="performEdit_container_result">
              <p>ชื่อรางวัลที่ได้รับ</p>
              <input value={"รางวัลชมเชย “ด้านการพัฒนาคุณภาพชีวิต”"} />
            </div>
            <div className="performEdit_container_type_result">
              <p>ประเภทผลงาน</p>
              <div className="performEdit_container_checkbox_type">
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
            <div className="performEdit_container_detail">
              <p>ราละเอียด</p>
              {/* <div className="performEdit_container_detail_text"> */}
                <div className="performEdit_container_text_box">
                  {/* <h2>เนื้อหากิจกรรม</h2> */}
                  <Texteditor
                    setValue={setValue}
                    value={"นักศึกษามหาวิทยาลัยนอร์ทกรุงเทพ ทีม NBU เยาวชนคนสร้าง คว้ารางวัลชมเชย “ด้านการพัฒนาคุณภาพชีวิต” การประกวดผลงานเยาวชนอาสาสานต่อพระราชดำริ ภายใต้หัวข้อ “สืบสาน รักษา ต่อยอด” ในโครงการค่ายเยาวชนรู้งานสืบสานพระราชดำริ (RDPB Camp) รุ่นที่ 12 โดยได้รับเกียรติจาก นายลลิต ถนอมสิงห์ เลขาธิการ กปร. เป็นประธานในพิธีประกาศและมอบรางวัล  โครงการดังกล่าวมีเยาวชนที่ผ่านการคัดเลือกเข้าร่วมโครงการ จำนวน 10 ทีม จาก 10 สถาบันการศึกษาในระดับอุดมศึกษาทั่วประเทศ จัดทำโครงการโดยนำองค์ความรู้ที่ได้รับจากการเข้าค่ายเยาวชนรู้งานสืบสานพระราชดำริ มาประยุกต์ใช้ในการผลิตผลงานส่งเข้าประกวด"}
                    className={"text_editor"}
                  />
                </div>
              {/* </div> */}
            </div>
            <div className="performEdit_container_img">
              <p>รูปภาพรางวัล</p>
              
              {/* <div className="performEdit_container_imgin"> */}
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
            <div className="performEdit_container_env">
              <p>รูปภาพบรรยากาศ</p>
              <Uploadfile
                image={DefaultPicture}
                setImage={setImageJPG}
                fileName={jpgName}
                setFilename={setJPGname}
                defaultImage={JPGdefaultimage}
                placeholder={"อัปโหลดไฟล์ .JPG (ขนาดไม่เกิน 5 mb)"}
              />
          <div className="performEdit_box_button">
                <div className="performEdit_container_button">
                  <Button>
                    <p onClick={() => navigate("/perform")}>ยกเลิก</p>
                  </Button>
                </div>
                <div className="performEdit_container_button_agree">
                  <Button>
                    <p onClick={() => navigate("/perform")} >บันทึก</p>
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

export default PerformEdit;
