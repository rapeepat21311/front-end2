import React, { useEffect } from "react";
import { useSelector} from "react-redux";
import Header from "../../component/navbar/Header/Header";
import "./result.css";
import Table from "./table_info";
import Card from "./resultCard"

export default function Result() {
  
  // const { user } = useSelector(state => ({...state}))
  
  



  // console.log("check ---->", user.username);
  return (
    <div>
      <Header />

      <div className="result">
        <div className="result_body">
          <div className="result_title">
            <p>ผลการศึกษา(1/2555)</p>
          </div>
          <div className="result_header">
            <div className="result_profile"></div>
            <div className="result_student_info">
            <h3>{"นาย"}</h3>
              <h1>{"ศุภกร กลีบพุฒ"}</h1>
              <h3>
                รุ่น: {"SWE62"} ID: {"621113759"}
              </h3>
            </div>
            <div className="result_group">
              <div className="result_group_section">
                <p className="result_group_text_label">คณะ :</p>
                <p className="result_group_text_highlight">
                  {"คณะเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"}
                </p>
              </div>
              <div className="result_group_row">
                <div className="result_group_section">
                  <p className="result_group_text_label">สาขา :</p>
                  <p className="result_group_text_highlight">
                    {"วิศวกรรมซอฟต์แวร์"}
                  </p>
                </div>
                <div className="result_group_section">
                  <p className="result_group_text_label">การศึกษา :</p>
                  <p className="result_group_text_highlight">{"ภาคปกติ"}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
              <div className="grade_sum">
                <Card topic="ผลการเรียนเฉลี่ย" abbr="GPA" grade={"3.00"} date={"2/2565"}/>
                <Card topic="ผลการเรียนเฉลี่ยสะสม" abbr="GPAX" grade={"3.00"} date={"1/2562-2/2565"} icon="graph" />
              </div>
              <div><Table/></div>
        </div>
      </div>
  );
}


