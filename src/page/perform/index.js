import React, { useState } from "react";
import Header from "../../component/navbar/Header/Header";

import "./index.css";
import CreateBox from "./performAll/CreateBox";




const navTab = [
  {
    tabName:"performAll",
    tabLabel:"ผลงานทั้งหมด",
    component:<CreateBox/>,
  },
  {
    tabName:"performIn",
    tabLabel:"ผลงานภายใน",
    component:<performIn/>,
  },
  {
    tabName:"performOut",
    tabLabel:"ผลงานภายนอก",
    component:<performOut/>,
  },
];

function Perform() {
  const [activeIndex,setActiveIndex] =useState(0);  

  return (
    <div>
      <Header />
      <div className="perform">
        <div className="perform_header"><p>{"หน้าหลัก > ตารางเรียน"}</p></div>
        <div className="perform_title">
          <h1>ผลงาน</h1>
        </div>
        <div className="perform_tab_container">
          {navTab.map((tab, index) => {
            return (
              <div
                className={`perform_tab ${
                  index === activeIndex && "perform_tab_active"
                } `}
                onClick={() => setActiveIndex(index)}
              >
                <h1
                  className={`perform_tab_text ${
                    index === activeIndex && "perform_tab_text_active"
                  }`}
                >
                  {tab.tabLabel}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="perform_component">{navTab[activeIndex].component}</div>
      </div>
    </div>
  );
}
export default Perform;
