import React, { Component } from "react";
import Header from "../../component/navbar/Header/Header";
import { Navigate, useNavigate } from "react-router-dom";
import { DefaultEditor } from "react-simple-wysiwyg";
import "./eport.css";
import { green } from "@mui/material/colors";
import { Checkbox } from "@mui/material";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function Eport() {
  const navigate = useNavigate();
  const [html, setHtml] = React.useState("my <b>HTML</b>");
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  onchange = (e) => {
    setHtml(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="eport">
        <div className="eport_body">
          <div className="eport_title">
            <p onClick={() => navigate("/")}>หน้าหลัก</p> {" > "}
            <p>Curriculum Vitae</p>
          </div>
          <div className="eport_header">
            <h1> Curriculum Vitae</h1>
          </div>
          <div className="container_eport">
            <div className="container_eport_info">
              <p>ข้อมูลส่วนตัว</p>
            </div>
            <div className="section_name_info">
              <p>ชื่อ-นามสกุล</p>
              <input value={"ศุภกร กลีบพุฒ"} />
            </div>
            <div className="container_pn">
              <div className="section_position_info">
                <p>ตำแหน่งงานที่สนใจ</p>
                <input value={"UX/UI Design"} />
              </div>
              <div className="section_number_info">
                <p>เบอร์โทรศัพท์</p>
                <input value={"064-264-3756"} />
              </div>
            </div>
            <div className="container_es">
              <div className="section_email_info">
                <p>E-mail</p>
                <input value={"supakornkleebput@mail.com"} />
              </div>
              <div className="section_social_info">
                <p>Facebook</p>
                <input value={"supakorn kleebput"} />
              </div>
            </div>
            <div className="container_address">
              <p>ที่อยู่</p>
              <div className="section_text">
                <DefaultEditor
                  value={
                    "เลขที่ 77/102-103 อาคารสินสาธร ชั้น 25 ถนนกรุงธนบุรี แขวงคลองต้นไทร เขตคลองสาน กรุงเทพมหานคร 10600"
                  }
                  onChange={onchange}
                />
              </div>
            </div>
          </div>
          <div className="container_eport_endpoint">
            <div className="container_eport_endpoint_info">
              <p>จุดมุ่งหมายในการทำงาน</p>
              <Checkbox />
            </div>
            <div className="container_endpoint">
              <p>ข้อมูลโปรไฟล์</p>
              <div className="section_text_endpoint">
                <DefaultEditor
                  value={
                    "ฉันหวังว่าจะได้ทำงานและเรียนรู้สิ่งที่เกี่ยวข้องกับการออกแบบและเรียนรู้เพิ่มเติมเกี่ยวกับการจัดการโครงการ การเขียนโค้ด การทดสอบ"
                  }
                  onChange={onchange}
                />
              </div>
            </div>
          </div>
          <div className="container_eport_education">
            <div className="container_education">
              <p>ประวัติการศึกษา</p>
              <Checkbox />
            </div>
            <div className="section_school">
              <div className="sub_section_school">
                <Checkbox />
                <p>โรงเรียนนวมินทราชูทิศ กรุงเทพมหานคร </p>
              </div>
              <div className="sub_section_branch">
                <p>ศิลป์-คำนวณ</p>
                <p>2016 - 2018</p>
              </div>
            </div>
            <div className="section_uni">
              <div className="sub_section_uni">
                <Checkbox />
                <p>มหาวิทยาลัยนอร์ทกรุงเทพ </p>
              </div>
              <div className="sub_section_branch_uni">
                <p>วิศวกรรมซอฟต์แวร์</p>
                <p>2019 - ปัจจุบัน</p>
              </div>
            </div>
          </div>
          <div className="container_experience">
            <div className="sub_container_experience">
              <p>ประสบการณ์</p>
              <Checkbox />
            </div>
            <div className="sub_container_experience_detail">
              <div className="detail_experience">
                <Checkbox />
                <p> Trainee UX/UI</p>
              </div>
              <div className="experience_company">
                <p>บริษัท วินเซิร์ฟ คอร์ปอเรชั่น จำกัด</p>
              </div>
              <div className="experience_year">
                <p>2565 - ปัจจุบัน</p>
                <h4>ซ่อนรายละเอียด</h4>
              </div>
              <div className="experience_info">
                <p>- ฝึกทักษะเกี่ยวกับ UX/UI</p>
                <p>- ได้เข้าร่วมทีมออกแบบของ Project e-Port ของทางบริษัท</p>
              </div>
            </div>
            <div className="company_info">
              <div className="company_info_position">
                <p>ตำแหน่งงาน</p>
              </div>
              <div className="sub_company_info_possition"></div>
              <div className="company_info_location">
                <p>สถานที่ / บริษัท</p>
              </div>
              <div className="sub_company_info_possition"></div>
              <div className="company_info_time">
                <p>ระยะเวลา</p>
              </div>
              <div className="sub_company_info_possition"></div>
              <div className="company_info_detail">
                <p>รายละเอียด</p>
              </div>
              <div className="sub_company_info_possition"></div>
            </div>
            <div className="bt_add_experience">
              <div className="bt_experience">
                <p>เพิ่มข้อมูลประสบการณ์</p>
              </div>
            </div>
          </div>
          <div className="containers_resulft">
            <div className="section_resulft">
              <p>ผลงาน</p>
              <Checkbox />
            </div>
            <div className="section_container_resulft">
              <div className="section_container_resulft_detail">
                <Checkbox />
                <p>
                  เกียรติบัตรนักเรียนดีเด่นด้านวิชาการ กลุ่ม English
                  Programระดับ มัธยมศึกษาตอนปลาย
                </p>
              </div>
              <div className="section_container_resulft_year">
                <p>2022</p>
              </div>
            </div>
          </div>
          <div className="option_eport">
            <div className="option_eport_box_img">
              <p>รูปภาพนักศึกษา</p>
              <div className="option_toggle">
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
            <div className="option_eport_box_language">
              <div className="language_box">
                <p>ภาษา</p>
                <Checkbox />
              </div>
              <div className="slide_bar_one">
                <div className="slide_bar_thai">
                  <p>ไทย</p>
                  <p>0/100</p>
                </div>
                <div className="slide_bar_score">
                  <Box width={250}>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </div>
              </div>
              <div className="slide_bar_two">
                <div className="slide_bar_english">
                  <p>อังกฤษ</p>
                  <p>0/100</p>
                </div>
                <div className="slide_bar_score">
                  <Box width={250}>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </div>
              </div>
            </div>
            <div className="option_eport_box_skill">
              <div className="etc_skill">
                <p>ทักษะอื่นๆ</p>
                <Checkbox />
              </div>
              <div className="slide_bar_T">
                <div className="slide_bar_think">
                  <p>ความคิดสร้างสรรค์</p>
                  <p>0/100</p>
                </div>
                <div className="slide_bar_score">
                  <Box width={250}>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </div>
              </div>
              <div className="slide_bar_Q">
                <div className="slide_bar_quest">
                  <p>การแก้ไขปัญหา</p>
                  <p>0/100</p>
                </div>
                <div className="slide_bar_score">
                  <Box width={250}>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </div>
              </div>
              <div className="slide_bar_lead">
                <div className="slide_bar_leader">
                  <p>ความเป็นผู้นำ</p>
                  <p>0/100</p>
                </div>
                <div className="slide_bar_score">
                  <Box width={250}>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </div>
              </div>
              <div className="slide_bar_MT">
                <div className="slide_bar_time">
                  <p>การจัดการเวลา</p>
                  <p>0/100</p>
                </div>
                <div className="slide_bar_score">
                  <Box width={250}>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eport;
