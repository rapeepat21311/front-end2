import React from "react";
import Header from "../../../component/navbar/Header/Header";
import { TbArrowNarrowLeft } from "react-icons/tb";
import Big_icon from "../../../image/Frame 11469.png";
import { useNavigate } from "react-router-dom";
import "./eventDetail.css";
import Thebestproject from "../../../image/thebestproject.png";
import Detailpro from "../../../image/detailpro.png";
import Footer from "../../../component/navbar/Footer/Footer";
import Edit from "../../../image/edit.png";
import BackIcon from "../../../image/BackIcon.png"
import Tonmai from "../../../image/TonmaiDee.png"

function EventDetail() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="event_detail">
        <div className="event_detail_header">
          <p onClick={() => navigate("/dashboard")}>หน้าหลัก</p> {" > "}
          <p onClick={() => navigate("/profile")}>ประวัตินักศึกษา</p> {">"}
          <p>รายละเอียดชั่วโมงกิจกรรม</p>
        </div>
        <div className="event_detail_title">
          <p onClick={() => navigate("/profile")}>
            <img src={BackIcon}/> 
          </p>
        </div>
        <div className="event_detail_container">
            <img src={Tonmai}/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default EventDetail;
