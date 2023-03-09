import React from "react";
import "./CV.scss";
import Header from "../navbar/Header/Header";
import Footer from "../navbar/Footer/Footer";
import FileDownload from "../../svgimage/fileDownload";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import CvIcon from "../../image/cvIcon.png";
import BackIcon from "../../image/BackIcon.png";


const CV = ({ data }) => {
  const navigate = useNavigate();
  const displayName = "ศุภกร กลีบพุฒ";
  const jobPosition = "UX/UI Design";
  const email = "supakornkleebput@gmail.com ";
  const phone = "064-264-3756";
  const socalNetwork = "supakorn kleebput";
  const detail =
    "เลขที่ 77/102-103 อาคารสินสาธร ชั้น 25 ถนนกรุงธนบุรี แขวงคลองต้นไทร เขตคลองสาน กรุงเทพมหานคร 10600";
  const display_leng = true;
  const leng_en = 50;
  const leng_th = 100;

  return (
    <div>
      {/* <Header /> */}
      <div className="cv">
        {/* <div className="cv-title">
        <p onClick={() => navigate("/dashboard")}>หน้าหลัก</p> {" > "}
          <p>Curriculum Vitae</p>
        </div> */}
        {/* <div className="cv-title-header">
          <p>Curriculum Vitae</p>
        </div>
        <div className="cv-button">
          <img  onClick={()=>navigate("/dashboard")} src={BackIcon}/>
          <div className="cv-button-dw">
          <Button>
                    <p>
                        <FileDownload/>
                    </p>
                    <p>Download</p>
                </Button>
          </div>
        </div> */}
        <div className="cv-container">
          <div className="cv-header">
            <img className="img-profile" alt="tree" src={CvIcon} />
            <div style={{ paddingTop: "12px" }}>{displayName}</div>
            <div className="cv-header-sub">
              <div style={{ padding: "5px" }}>
                <img className="img-header-sub" src="./icon/work.svg" />
                {jobPosition}
              </div>
              <div style={{ padding: "12px" }}>
                <img className="img-header-sub" src="./icon/mail.svg" />
                {email}
              </div>
              <div style={{ padding: "12px" }}>
                <img className="img-header-sub" src="./icon/phone.svg" />
                {phone}
              </div>
              <div style={{ padding: "12px" }}>
                <img className="img-header-sub" src="./icon/facebook.svg" />
                {socalNetwork}
              </div>
            </div>
          </div>

          <div className="cv-body">
            <div className="cv-body-col-1">
              <div className="cv-body-detail">
                <div className="cv-body-title">รายละเอียด</div>
                <div className="cv-body-data">{detail}</div>
              </div>

              <div className="cv-body-detail">
                <div className="cv-body-title">ภาษา</div>
                <div className="cv-body-data">
                  {"ไทย"}
                  <div class="chart">
                    <div className="bar" style={{ width: "100%" }}></div>
                  </div>
                  {"อังกฤษ"}
                  <div class="chart">
                    <div className="bar" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
              <div className="cv-body-detail">
                <div className="cv-body-title">ทักษะ</div>
                <div className="cv-body-data">
                  {"ความสามารถในการปรับตัว"}
                  <div class="chart">
                    <div className="bar" style={{ width: "100%" }}></div>
                  </div>
                  {"ความคิดสร้างสรรค์"}
                  <div class="chart">
                    <div className="bar" style={{ width: "80%" }}></div>
                  </div>
                  {"ความเป็นผู้นำ"}
                  <div class="chart">
                    <div className="bar" style={{ width: "100%" }}></div>
                  </div>
                  {"การแก้ปัญหา"}
                  <div class="chart">
                    <div className="bar" style={{ width: "80%" }}></div>
                  </div>
                  {"การจัดการเวลา"}
                  <div class="chart">
                    <div className="bar" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cv-body-col-2">
              <div className="cv-body-contain">
                <div className="cv-body-header">
                  <img
                    className="img-profile-icon"
                    alt="tree"
                    src="/icon/flag.svg"
                  />
                  <div className="cv-body-title-start">
                    จุดมุ่งหมายในการทำงาน
                  </div>
                </div>
                <div className="cv-body-data-start">
                  ฉันหวังว่าจะได้ทำงานและเรียนรู้สิ่งที่เกี่ยวข้องกับการออกแบบและเรียนรู้เพิ่มเติมเกี่ยวกับการจัดการโครงการ
                  การเขียนโค้ด การทดสอบ
                </div>
              </div>
              <div className="cv-body-contain">
                <div className="cv-body-header">
                  <img
                    className="img-profile-icon"
                    alt="tree"
                    src="/icon/education.svg"
                  />
                  <div className="cv-body-title-start">ประวัติการศึกษา</div>
                </div>
                <div className="cv-body-data-start">
                  <div style={{ paddingBottom: "8px" }}>
                    โรงเรียนนวมินทราชูทิศ กรุงเทพมหานคร (ศิลป์-คํานวณ)
                    <br />
                    2016 - 2018
                  </div>

                  <div style={{ paddingBottom: "8px" }}>
                    มหาวิทยาลัยนอร์ทกรุงเทพ (วิศวกรรมซอฟต์แวร์)
                    <br />
                    2019 - ปัจจุบัน
                  </div>
                </div>
              </div>
              <div className="cv-body-contain">
                <div className="cv-body-header">
                  <img
                    className="img-profile-icon"
                    alt="tree"
                    src="/icon/experience.svg"
                  />
                  <div className="cv-body-title-start">ประสบการณ์</div>
                </div>
                <div className="cv-body-data-start">
                  <div>
                    <h3 style={{ margin: 0 }}>Trainee UX/UI</h3>
                    บริษัท วินเซิร์ฟ คอร์ปอเรชั่น จำกัด
                    <br />
                    2565 - ปัจจุบัน
                    <br />
                    - ฝึกทักษะเกี่ยวกับ UX/UI
                    <br />- ได้เข้าร่วมทีมออกแบบของ Project e-Port ของทางบริษัท
                  </div>
                </div>
              </div>
              <div className="cv-body-contain">
                <div className="cv-body-header">
                  <img
                    className="img-profile-icon"
                    alt="tree"
                    src="/icon/reward.svg"
                  />
                  <div className="cv-body-title-start">ผลงาน</div>
                </div>
                <div className="cv-body-data-start">
                  <div style={{ paddingBottom: "8px" }}>
                    เกียรติบัตรนักเรียนดีเด่นด้านวิชาการ กลุ่ม English Program
                    <br />
                    ระดับมัธยมศึกษาตอนปลาย
                    <br />
                    2018
                  </div>
                  <div style={{ paddingBottom: "8px" }}>
                    เกียรติบัตรนักเรียนดีเด่นด้านวิชาการ กลุ่ม English Program
                    <br />
                    ระดับมัธยมศึกษาตอนปลาย
                    <br />
                    2018
                  </div>
                  <div style={{ paddingBottom: "8px" }}>
                    เกียรติบัตรนักเรียนดีเด่นด้านวิชาการ กลุ่ม English Program
                    <br />
                    ระดับมัธยมศึกษาตอนปลาย
                    <br />
                    2018
                  </div>
                  <div style={{ paddingBottom: "8px" }}>
                    เกียรติบัตรนักเรียนดีเด่นด้านวิชาการ กลุ่ม English Program
                    <br />
                    ระดับมัธยมศึกษาตอนปลาย
                    <br />
                    2018
                  </div>
                  <div style={{ paddingBottom: "8px" }}>
                    เกียรติบัตรนักเรียนดีเด่นด้านวิชาการ กลุ่ม English Program
                    <br />
                    ระดับมัธยมศึกษาตอนปลาย
                    <br />
                    2018
                  </div>
                  <div style={{ paddingBottom: "8px" }}>
                    เกียรติบัตรนักเรียนดีเด่นด้านวิชาการ กลุ่ม English Program
                    <br />
                    ระดับมัธยมศึกษาตอนปลาย
                    <br />
                    2018
                  </div>
                  <div style={{ paddingBottom: "8px" }}>
                    เกียรติบัตรนักเรียนดีเด่นด้านวิชาการ กลุ่ม English Program
                    <br />
                    ระดับมัธยมศึกษาตอนปลาย
                    <br />
                    2018
                  </div>
                  <div style={{ paddingBottom: "8px" }}>
                    เกียรติบัตรนักเรียนดีเด่นด้านวิชาการ กลุ่ม English Program
                    <br />
                    ระดับมัธยมศึกษาตอนปลาย
                    <br />
                    2018
                  </div>
                  <div style={{ paddingBottom: "8px" }}>
                    เกียรติบัตรนักเรียนดีเด่นด้านวิชาการ กลุ่ม English Program
                    <br />
                    ระดับมัธยมศึกษาตอนปลาย
                    <br />
                    2018
                  </div>
                  <div style={{ paddingBottom: "8px" }}>
                    เกียรติบัตรนักเรียนดีเด่นด้านวิชาการ กลุ่ม English Program
                    <br />
                    ระดับมัธยมศึกษาตอนปลาย
                    <br />
                    2018
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* <Footer/> */}
      </div>
    </div>
  );
};

export default CV;
