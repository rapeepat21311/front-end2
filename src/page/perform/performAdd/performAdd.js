import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../component/navbar/Header/Header";
import Footer from "../../../component/navbar/Footer/Footer";
import  {TbArrowNarrowLeft}  from "react-icons/tb";

import "./performAdd.css";

function PerformAdd() {
  const navigate = useNavigate();

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
            <p onClick={()=> navigate("/perform")}>
            <TbArrowNarrowLeft /> กลับ
            </p>
        </div>
        <div className="performAdd_container">
            <p>เพิ่มข้อมูลผลงาน</p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PerformAdd;
