import React, { useState } from "react";
import Header from "../../component/navbar/Header/Header";

import "./index.css";
import CreateBox from "./performAll/CreateBox";

import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
// import {Stack} from "@mui/material";
import { TbPlus } from "react-icons/tb";
import Footer from "../../component/navbar/Footer/Footer";

const navTab = [
  {
    tabName: "performAll",
    tabLabel: "ผลงานทั้งหมด",
    component: <CreateBox />,
  },
  {
    tabName: "performIn",
    tabLabel: "ผลงานภายใน",
    component: <performIn />,
  },
  {
    tabName: "performOut",
    tabLabel: "ผลงานภายนอก",
    component: <performOut />,
  },
];

function Perform() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Header />
      <div className="perform">
        <div className="perform_header">
          <p>{"หน้าหลัก > ตารางเรียน"}</p>
        </div>
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
          <div className="select_term">
            <h4>ภาคเรียนที่</h4>
            <select>
              <option>1/2565</option>
              <option>2/2565</option>
            </select>
            <div className="button_upload">
              <Button variant="contained" component="label" aria-label="add">
                  <TbPlus size={25} />
                เพิ่มรางวัล
                <input hidden accept="image/*" multiple type="file" />
                <IconButton color="primary" aria-label="add" component="label">
                  <input hidden accept="image/*" type="file" />
                  {/* <PhotoCamera /> */}
                </IconButton>
              </Button>
            </div>
          </div>
        </div>
        <div className="perform_component">{navTab[activeIndex].component}</div>
      </div>
      <Footer/>
    </>
  );
}
export default Perform;
