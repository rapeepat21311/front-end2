import React from "react";
import { EditOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./activityHours.css";
import vector from "../../../../../image/vector.png";
import vector_1 from "../../../../../image/vector (1).png";
import plus from "../../../../../image/add.png";
import viewButton from "../../../../../image/Button.png";
import more_vert from "../../../../../image/more_vert.png";

import { activityHoursListDataMock } from "./datamock/activityHoursListDataMock";

function ActivityHoursList() {
  return (
    <div className="list_user_page">
      <div className="list_user_title">
        <h1>รายชั่วโมงจิตอาสา</h1>
      </div>
      <div className="search_text">
        <div className="search_left_container">
          <div className="search">
            <input placeholder="Search" type="search" />
            <SearchIcon />
          </div>
          <div className="select_term_capital_option">
            <select>
              <option>จำนวนชั่วโมงกิจกรรม</option>
              <option>รหัสอาจารย์ 1</option>
            </select>
          </div>
          <div className="select_type_capital_option">
            <select>
              <option>ภาคการศึกษา</option>
              <option>คณะ2</option>
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
      <div className="table_activity_hours_admin">
        <table>
          <thead>
            <tr>
              <th scope="col">ภาคเรียน</th>
              <th scope="col">ชื่อกิจกรรม</th>
              <th scope="col">รหัสนักศึกษา</th>
              <th scope="col">ชื่อ-นามสกุล</th>
              <th scope="col">ชั่วโมงกิจกรรม</th>
              <th scope="col">ตำแหน่ง</th>
              <th scope="col">{""}</th>
            </tr>
          </thead>
          <tbody>
            {activityHoursListDataMock.map((item, index) => {
              return (
                <tr>
                  <td>{item.term}</td>
                  <td>{item.name_activity}</td>
                  <td>{item.student_id}</td>
                  <td>{item.student_fullname}</td>
                  <td>{item.activity_hours}</td>
                  <td>{item.position}</td>
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
  );
}

export default ActivityHoursList;
