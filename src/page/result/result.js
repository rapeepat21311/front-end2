import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import Header from "../../component/navbar/Header/Header";
import "./result.css";
import Table from "./table/table_info";
import Card from "./resultCard";
import TableGpa from "./table/tableGpa";

import {
  mockTableList,
  mockTableGpaList,
  mockTableGpaxList,
} from "../../tableList";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



const mockTermData = { detailTable: mockTableList, GpaTable: mockTableGpaList };
const mockAccumulateData = mockTableGpaxList;

const defaultTermData = { detailTable: [], GpaTable: [] };
const calDefaultTerm = "1/2565";
export default function Result() {
  // const { user } = useSelector(state => ({...state}))
  const [term, setTerm] = useState(null);

  const [termData, setTermData] = useState(defaultTermData);
  const [accumulateData, setAccumulateData] = useState([]);

  useEffect(() => {
    setTerm(calDefaultTerm);
    fetchAccumulate();
  }, []);

  useEffect(() => {
    if (term !== null) {
      fetchTerm();
    }
  }, [term]);

  const fetchTerm = useCallback(() => {
    // send term state to apis
    setTermData(mockTermData);
  }, [term]);
  const fetchAccumulate = useCallback(() => {
    setAccumulateData(mockAccumulateData);
  }, []);
  // console.log("check ---->", user.username);
  return (
    <div style={{ backgroundColor: "red" }}>
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
          <Card
            topic="ผลการเรียนเฉลี่ย"
            abbr="GPA"
            grade={"3.00"}
            date={"2/2565"}
          />
          <Card
            topic="ผลการเรียนเฉลี่ยสะสม"
            abbr="GPAX"
            grade={"3.00"}
            date={"1/2562-2/2565"}
            icon="graph"
          />
        </div>
        <div className="select_year">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Year</InputLabel>
            <Select>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1/2565</MenuItem>
              <MenuItem value={2}>2/2565</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Table dataList={termData.detailTable} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TableGpa dataList={termData.GpaTable} />
          <TableGpa dataList={accumulateData} />
        </div>
      </div>
    </div>
  );
}
