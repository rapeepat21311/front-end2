import React from "react";
import Header from "../../component/navbar/Header/Header";

import "./eport.css"

function eport() {
  return (
    <div>
      <Header />
      <div className="eport">
        <div className="eport_title"><p>{"หน้าหลัก > e-Portfolio"}</p></div>
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

export default eport;
