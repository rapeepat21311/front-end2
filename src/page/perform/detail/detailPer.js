import React from "react";
import Header from "../../../component/navbar/Header/Header";
import { TbArrowNarrowLeft } from "react-icons/tb";
import Big_icon from "../../../image/Frame 11469.png";
import { useNavigate } from "react-router-dom";
import "./detailPer.css";
import Thebestproject from "../../../image/thebestproject.png"
import Footer from "../../../component/navbar/Footer/Footer"

function DetailPer() {

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="detail">
        <div className="detail_header">
        <p onClick={() => navigate("/")}>หน้าหลัก</p> {" > "}
            <p onClick={()=> navigate("/perform")}>ผลงาน</p> {">"}
            <p>รายละเอียดผลงาน</p>
        </div>
        <div className="detail_title">
          <p onClick={()=> navigate("/perform")}>
            <TbArrowNarrowLeft /> กลับ
          </p>
        </div>
        <div className="detail_container">
          <div className="detail_sub_header">
          <img src="thebestproject.png" />
          </div>
            <div className="detail_sub_title">
                <h1>สโมสรนักศึกษามหาวิทยาลัยนอร์ทกรุงเทพ คว้ารางวัลชนะเลิศ THE BEST PROJECT โครงการมหาวิทยาลัยสู่ตำบลสร้างรากแก้วให้ประเทศ</h1>
            </div>
                <div className="detail_sub_title_date">
                  <p>เผยแพร่วันที่ 12/12/2022</p>
                  <p>เผยแพร่วันที่ 12/12/2022</p>
                </div>
          <div className="detail_sub_center">
            <div className="detail_sub_center_text">
              <h3>สโมสรนักศึกษามหาวิทยาลัยนอร์ทกรุงเทพ คว้ารางวัลชนะเลิศ THE BEST PROJECT โครงการมหาวิทยาลัยสู่ตำบลสร้างรากแก้วให้ประเทศ</h3>
              <p>สโมสรนักศึกษามหาวิทยาลัยนอร์ทกรุงเทพ ได้รับคัดเลือกให้เข้าร่วมโครงการโฆษกกระทรวง อว. ประจำมหาวิทยาลัย รุ่นที่ 1″ จากการคัดเลือกนักศึกษามหาวิทยาลัยภาครัฐและเอกชนทั่วประเทศ กว่า 1,000 คน นำโดยนายพัชช์ฐณณท์ เจริญเปี่ยม นายกสโมสรนักศึกษามหาวิทยาลัยนอร์ทกรุงเทพ พร้อมด้วย นายณรงศ์ชัย ยุพาพิน อุปนายกสโมสรนักศึกษาคนที่ 1 และ นายนิธิพล อัมระนันท์ สโมสรนักศึกษาฝึกหัด ร่วมเป็นตัวแทนมหาวิทยาลัย เข้าร่วมโครงการ “โฆษกกระทรวง อว. ประจำมหาวิทยาลัย รุ่นที่ 1” ภายใต้กิจกรรม U2T Growth Mindset โครงการมหาวิทยาลัยสู่ตำบลสร้างรากแก้วให้ประเทศ พร้อมทั้งให้น้องๆได้แสดงศัยกภาพของการผู้นำนักศึกษาโดยการนำเสนอผลงาน ซึ่งสโมสรนักศึกษามหาวิทยาลัยนอร์ทกรุงเทพ คว้ารางวัลชนะเลิศ The Best Project จากการเข้าร่วมกิจกรรมครั้งนี้ </p>
              <p1>โดยมี รองศาสตราจารย์(พิเศษ) ดร.ดวงฤทธิ์ เบ็ญจาธิกุล ชัยรุ่งเรือง เลขานุการรัฐมนตรีและโฆษกกระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม และดร.พัชรินรุจา จันทโรนานนท์ ที่ปรึกษารัฐมนตรีฯ ให้เกียรติเข้าร่วมงานและมอบรางวัลแก่นักศึกษาที่ได้รับรางวัลจากกิจกรรมในครั้งนี้ </p1>
              <p>สำหรับกิจกรรม “โฆษกกระทรวง อว. ประจำมหาวิทยาลัย รุ่นที่ 1” เป็นกิจกรรมการรวมพลังสร้างเครือข่ายนักศึกษาเพื่อการพัฒนาที่ยั่งยืน ให้ตระหนักถึงบทบาทของรัฐบาลในการยกระดับเศรษฐกิจและสังคมแบบบูรณาการ ตลอดจนเพิ่มศักยภาพในการสื่อสารในยุคดิจิทัล โดยจัดกิจกรรมขึ้นระหว่าง วันที่ 13 -17 ธันวาคม 2564 ณ พิพิธภัณฑ์วิทยาศาสตร์แห่งชาติ คลองห้า อำเภอคลองหลวง จังหวัดปทุมธานี</p>
            </div>
          </div>
            <div className="detail_sub_center_image">
              <h3>รูปภาพภายในงาน</h3>
              </div>
              <div className="detail_image_column">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
            </div>
            <div className="detail_sub_center_image_reward">
              <h3>รูปภาพรางวัล</h3>
              </div>
              <div className="detail_image_column_reward">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
            </div>
        </div>
      <Footer/>
      </div>
    </div>
  );
}

export default DetailPer;
