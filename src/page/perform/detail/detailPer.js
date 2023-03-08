import React from "react";
import Header from "../../../component/navbar/Header/Header";
import { TbArrowNarrowLeft } from "react-icons/tb";
import Big_icon from "../../../image/Frame 11469.png";
import { useNavigate } from "react-router-dom";
import "./detailPer.css";
import Thebestproject from "../../../image/thebestproject.png";
import Detailpro from "../../../image/detailpro.png";
import Footer from "../../../component/navbar/Footer/Footer";
import Edit from "../../../image/edit.png";
import BackIcon from "../../../image/BackIcon.png"
import TBJ from "../../../image/TBJ.png"

function DetailPer() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="detail">
        <div className="detail_header">
          <p onClick={() => navigate("/dashboard")}>หน้าหลัก</p> {" > "}
          <p onClick={() => navigate("/perform")}>ผลงาน</p> {">"}
          <p>รายละเอียดผลงาน</p>
        </div>
        <div className="detail_title">
          <p onClick={() => navigate("/perform")}>
          <img  src={BackIcon}/> 
          </p>
        </div>
        <div className="detail_container">
        <img onClick={() => navigate("/performEdit")} src={TBJ}/> 
          {/* <div className="detail_container_header">
            <img src={Edit} />
            <p onClick={() => navigate("/performEdit")}>แก้ไข</p>
          </div>
          <div className="detail_sub_header">
            <img src={Thebestproject} />
          </div>
          <div className="detail_sub_title">
            <h1>
              สโมสรนักศึกษามหาวิทยาลัยนอร์ทกรุงเทพ คว้ารางวัลชนะเลิศ THE BEST
              PROJECT โครงการมหาวิทยาลัยสู่ตำบลสร้างรากแก้วให้ประเทศ
            </h1>
          </div>
          <div className="detail_sub_title_date">
            <p>เผยแพร่วันที่ 12/12/2022</p>
            <p>เผยแพร่วันที่ 12/12/2022</p>
          </div>
          <div className="detail_sub_center">
            <div className="detail_sub_center_text">
              <h3>
                สโมสรนักศึกษามหาวิทยาลัยนอร์ทกรุงเทพ คว้ารางวัลชนะเลิศ THE BEST
                PROJECT โครงการมหาวิทยาลัยสู่ตำบลสร้างรากแก้วให้ประเทศ
              </h3>
              <p>
                สโมสรนักศึกษามหาวิทยาลัยนอร์ทกรุงเทพ
                ได้รับคัดเลือกให้เข้าร่วมโครงการโฆษกกระทรวง อว. ประจำมหาวิทยาลัย
                รุ่นที่ 1″
                จากการคัดเลือกนักศึกษามหาวิทยาลัยภาครัฐและเอกชนทั่วประเทศ กว่า
                1,000 คน นำโดยนายพัชช์ฐณณท์ เจริญเปี่ยม
                นายกสโมสรนักศึกษามหาวิทยาลัยนอร์ทกรุงเทพ พร้อมด้วย นายณรงศ์ชัย
                ยุพาพิน อุปนายกสโมสรนักศึกษาคนที่ 1 และ นายนิธิพล อัมระนันท์
                สโมสรนักศึกษาฝึกหัด ร่วมเป็นตัวแทนมหาวิทยาลัย เข้าร่วมโครงการ
                “โฆษกกระทรวง อว. ประจำมหาวิทยาลัย รุ่นที่ 1” ภายใต้กิจกรรม U2T
                Growth Mindset โครงการมหาวิทยาลัยสู่ตำบลสร้างรากแก้วให้ประเทศ
                พร้อมทั้งให้น้องๆได้แสดงศัยกภาพของการผู้นำนักศึกษาโดยการนำเสนอผลงาน
                ซึ่งสโมสรนักศึกษามหาวิทยาลัยนอร์ทกรุงเทพ คว้ารางวัลชนะเลิศ The
                Best Project จากการเข้าร่วมกิจกรรมครั้งนี้{" "}
              </p>
              <p1>
                โดยมี รองศาสตราจารย์(พิเศษ) ดร.ดวงฤทธิ์ เบ็ญจาธิกุล ชัยรุ่งเรือง
                เลขานุการรัฐมนตรีและโฆษกกระทรวงการอุดมศึกษา วิทยาศาสตร์
                วิจัยและนวัตกรรม และดร.พัชรินรุจา จันทโรนานนท์
                ที่ปรึกษารัฐมนตรีฯ
                ให้เกียรติเข้าร่วมงานและมอบรางวัลแก่นักศึกษาที่ได้รับรางวัลจากกิจกรรมในครั้งนี้{" "}
              </p1>
              <p>
                สำหรับกิจกรรม “โฆษกกระทรวง อว. ประจำมหาวิทยาลัย รุ่นที่ 1”
                เป็นกิจกรรมการรวมพลังสร้างเครือข่ายนักศึกษาเพื่อการพัฒนาที่ยั่งยืน
                ให้ตระหนักถึงบทบาทของรัฐบาลในการยกระดับเศรษฐกิจและสังคมแบบบูรณาการ
                ตลอดจนเพิ่มศักยภาพในการสื่อสารในยุคดิจิทัล
                โดยจัดกิจกรรมขึ้นระหว่าง วันที่ 13 -17 ธันวาคม 2564 ณ
                พิพิธภัณฑ์วิทยาศาสตร์แห่งชาติ คลองห้า อำเภอคลองหลวง
                จังหวัดปทุมธานี
              </p>
            </div>
          </div>
          <div className="detail_sub_center_image">
            <h3>รูปภาพภายในงาน</h3>
          </div>
          <div className="detail_image_column">
            <img src={Detailpro} />
          </div>
          <div className="detail_sub_center_image_reward">
            <h3>รูปภาพรางวัล</h3>
          </div>
          <div className="detail_image_column_reward">
            <img src={Detailpro} />
          </div> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DetailPer;
