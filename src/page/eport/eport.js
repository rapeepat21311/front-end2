import React from "react";
import Header from "../../component/navbar/Header/Header";
import { Navigate, useNavigate } from "react-router-dom";

import "./eport.css"

function Eport() {

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="eport">
        <div className="eport_title">
        <p onClick={() => navigate("/")}>หน้าหลัก</p> {" > "}
            <p>e-Protfolio</p>
        </div>
          <div className="eport_header">
            <h1> e-Portfolio</h1>
          </div>
          <div className="container_eport">
            <div className="eport_container_left"><p></p></div>
            <div className="eport_container_right"><p></p></div>
          </div>
      </div>
    </div>
  );
}

export default Eport;
