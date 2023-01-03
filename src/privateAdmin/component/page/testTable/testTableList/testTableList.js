import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import vector from "../../../../../image/vector.png";
import vector_1 from "../../../../../image/vector (1).png";
import plus from "../../../../../image/add.png";
import viewButton from "../../../../../image/Button.png";
import more_vert from "../../../../../image/more_vert.png";
import { mockDataTestTable } from "./mockdata/datamockTestTable";

function TesttableList() {
  return (
    <div className="layout_body">
      <div className="list_user_page">
        <div className="search_text">
          <div className="search_left_container">
            <div className="search">
              <input placeholder="Search" type="search" />
              <SearchIcon />
            </div>
            <div className="select_term_capital_option">
              <select>
                <option>ภาคการศึกษา</option>
                <option>รหัสอาจารย์ 1</option>
              </select>
            </div>
          </div>
          <div className="list_user_text_option">
            <div className="export_document_container">
              <div className="export_document">
                <button>ส่งออกข้อมูล</button>
                <img src={vector} />
              </div>
            </div>
            <div className="import_document_container">
              <div className="import_document">
                <button>นำเข้าข้อมูล</button>
                <img src={vector_1} />
              </div>
            </div>
            <div className="add_document_container">
              <div className="add_document">
                <img src={plus} />
                <button>เพิ่มข้อมูล</button>
              </div>
            </div>
          </div>
        </div>
        <div className="table_timetable">
          <table>
            <thead>
              <tr>
                <th scope="col">ภาคการศึกษา</th>
                <th scope="col">รหัสวิชา</th>
                <th scope="col">ชื่อวิชา</th>
                <th scope="col">กลุ่ม</th>
                <th scope="col">วัน</th>
                <th scope="col">ช่วงเวลา</th>
                <th scope="col">อาจารย์ผู้สอน</th>
                <th scope="col">{""}</th>
              </tr>
            </thead>
            <tbody>
              {mockDataTestTable.map((item, index) => {
                return (
                  <tr>
                    <td>{item.term}</td>
                    <td>{item.code_subject}</td>
                    <td>{item.name_subject}</td>
                    <td>{item.group}</td>
                    <td>{item.wkday}</td>
                    <td>{item.distance}</td>
                    <td>{item.teacher_on_subject}</td>
                    <td>
                      <div className="list_view_delete">
                        <img src={viewButton} />
                        <img src={more_vert} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TesttableList;
