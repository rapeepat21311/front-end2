import React, { useState } from "react";
import Body from "../home/home";
import Header from "../../component/navbar/Header/Header";
import Footer from "../../component/navbar/Footer/Footer";
import "./index.css";
import { Navigate, useNavigate } from "react-router-dom";

import Class from "../class/class/class";
// import Paratoon from "./Paratoon/Paratoon";
import TestClass from "../class/testClass/testClass";

const navTab = [
  {
    tabName: "classData",
    tabLabel: "ตารางเรียน",
    component: <Class />,
  },
  // {
  //   tabName: "paratoonData",
  //   tabLabel: "ภาระทุน",
  //   component: <Paratoon />,
  // },
  {
    tabName: "testclassData",
    tabLabel: "ตารางสอบ",
    component: <TestClass />,
  },
];

function Index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="class">
        <div className="class_header">
        <p onClick={() => navigate("/")}>หน้าหลัก</p> {" > "}
            <p>ตารางเรียน</p>
        </div>
        <div className="class_title">
          <h1>ตารางเรียน</h1>
        </div>

        <div className="class_tab_container">
          {navTab.map((tab, index) => {
            return (
              <div
                className={`class_tab ${
                  index === activeIndex && "class_tab_active"
                } `}
                onClick={() => setActiveIndex(index)}
              >
                <h1
                  className={`class_tab_text ${
                    index === activeIndex && "class_tab_text_active"
                  }`}
                >
                  {tab.tabLabel}
                </h1>
              </div>
            );
          })}
          <div className="select_C">
            <h4>ภาคเรียนที่</h4>
            <select>
              <option>1/2565</option>
              <option>2/2565</option>
            </select>
          </div>
        </div>
        <div className="class_component">{navTab[activeIndex].component}</div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
