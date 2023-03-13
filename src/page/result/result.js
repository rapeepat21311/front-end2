import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import Header from "../../component/navbar/Header/Header";
import "./result.scss";
import Table from "./table/table_info";
import Card from "./resultCard";
import TableGpa from "./table/tableGpa";
import Footer from "../../component/navbar/Footer/Footer";

import IconProfile from "../../image/IconProfile.png";
import Gradeleft from "../../image/Gradecount.png"
import Graderight from "../../image/Gradecountright.png"




import {
  mockTableList,
  mockTableGpaList,
  mockTableGpaxList,
} from "../../tableList";

import { useNavigate } from "react-router-dom";
import TableGpax from "./table/tableGpax";

const mockTermData = { detailTable: mockTableList, GpaTable: mockTableGpaList };
const mockAccumulateData = mockTableGpaxList;

const defaultTermData = { detailTable: [], GpaTable: [] };
const calDefaultTerm = "1/2565";
export default function Result() {
  // const { user } = useSelector(state => ({...state}))
  const [term, setTerm] = useState(null);

  const [termData, setTermData] = useState(defaultTermData);
  const [accumulateData, setAccumulateData] = useState([]);
  const navigete = useNavigate();

  useEffect(() => {
    setTerm(calDefaultTerm);
    fetchAccumulate();
  }, [term]);

  useEffect(() => {
    if (term !== null) {
      fetchTerm();
    }
  }, [term]);

  const fetchTerm = useCallback(() => {
    // send term state to apis
    setTermData(mockTermData);
  }, []);
  const fetchAccumulate = useCallback(() => {
    setAccumulateData(mockAccumulateData);
  }, []);
  // console.log("check ---->", user.username);
  return (
    <div>
      <Header />

      <div className="result">
        <div className="result_body">
          <div className="result_H">
            <p onClick={() => navigete("/dashboard")}>หน้าหลัก</p>
            {" > "}
            <p>ผลการศึกษา</p>
          </div>
          <div className="result_title">
            <p>ผลการศึกษา</p>
          </div>
          <div className="result_header">
            <div className="result_profile">
              {/* <div className="img_profile">
              </div> */}
              <img src={IconProfile}/>
            </div>
            <div className="result_student_info">
              <p>{"นาย"}</p>
              <h1>{"ศุภกร"}</h1>
              <h1>{"กลีบพุฒ"}</h1>
              <p>
                รุ่น: {"SWE62"} ID: {"621113759"}
              </p>
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
                  <div className="result_group_sub_section">
                  <p className="result_group_text_label_mj">สาขา :</p>
                  <p className="result_group_text_highlight">
                    {"วิศวกรรมซอฟต์แวร์"}
                  </p>
                  </div>
                </div>
                <div className="result_group_section">
                  <div className="result_group_sub_section_ed">
                  <p className="result_group_text_label_ed">การศึกษา :</p>
                  <p className="result_group_text_highlight">{"ภาคปกติ"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grade_sum">
          <img src={Gradeleft}/>
          <img src={Graderight}/>
          {/* <Card
            topic="ผลการเรียนเฉลี่ย"
            abbr="GPA"
            dates="2/2565"
          
          />
          <Card
            topic="ผลการเรียนเฉลี่ยสะสม"
            abbr="GPAX"
            date={"1/2562-2/2565"}
            icon="graph"
          /> */}
        </div>
          <div className="select_year">
            <h4>ภาคเรียนที่</h4>
            <select>
              <option>1/2565</option>
              <option>2/2565</option>
            </select>
          </div>
        <div className="table_data">
          <Table dataList={termData.detailTable} />
        </div>
        <div className="table_gp">
          <div className="table_gp_container">
            <TableGpa dataList={termData.GpaTable} />
          </div>
          <div className="table_gpx_container">
            <TableGpax dataList={accumulateData} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
