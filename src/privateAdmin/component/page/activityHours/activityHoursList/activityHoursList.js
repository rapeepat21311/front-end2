import React from "react";
import { EditOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./activityHours.css";

import { activityHoursListDataMock } from "./datamock/activityHoursListDataMock";

function ActivityHoursList() {
  return (
    <div className="layout_body">
      <div className="list_user_page">
        <div className="list_user_title">
          <h1>รายชั่วโมงจิตอาสา</h1>
        </div>
        <div className="search_text">
          <div className="search">
            <input placeholder="seacrch" type="search" />
            <SearchIcon />
          </div>
          <div className="list_user_text_option">
            <select>
              <option>
                <AccountCircleIcon /> Text
              </option>
            </select>
            <select>
              <option>Text</option>
            </select>
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
                    {/* <Link to={`/admin-page/edit-capital_burden/${item.id}`}> */}
                    <td>
                      {/* <p onClick={navigate(`/admin-page/edit-user/${users._id}`)}> */}
                      <EditOutlined />
                      {/* </p> */}
                    </td>
                    {/* </Link> */}
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

export default ActivityHoursList;
