import React, { useState } from "react";
import Body from "../home/home";
import Header from "../../component/navbar/Header/Header";
import Footer from "../../component/navbar/Footer/Footer";
import "./index.css";

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

  return (
    <>
      <Header />
      <div className="class">
        <div className="class_header"><p>{"หน้าหลัก > ตารางเรียน"}</p></div>
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
        </div>
        <div className="class_component">{navTab[activeIndex].component}</div>
      </div>
      <Footer />
    </>
  );
}

export default Index; 