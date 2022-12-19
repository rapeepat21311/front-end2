import React from "react";

import { EditOutlined } from "@ant-design/icons";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./gradeList.css";
import { mockGrade } from "./mockData/mockGrade";

function GradeList() {
  return (
    <div className="layout_body">
      <div className="list_user_page">
        <div className="list_user_title">
          <h1>ผลการศึกษา</h1>
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
        <div className="table_grade_list_admin">
          <table>
            <thead>
              <tr>
                <th scope="col">ภาคเรียน</th>
                <th scope="col">ชื่อกิจกรรม</th>
                <th scope="col">รหัสนักศึกษา</th>
                <th scope="col">ชื่อ-นามสกุล</th>
                <th scope="col">ชั่วโมงกิจกรรม</th>
                <th scope="col">หน่วยกิต</th>
                <th scope="col">เกรด</th>
                <th scope="col">{""}</th>
              </tr>
            </thead>
            <tbody>
              {mockGrade.map((item, index) => {
                return (
                  <tr>
                    <td>{item.student_id}</td>
                    <td>{item.student_fullname}</td>
                    <td>{item.term}</td>
                    <td>{item.code_subject}</td>
                    <td>{item.name_subject}</td>
                    <td>{item.subject_unit}</td>
                    <td>{item.grade_gpx}</td>
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

export default GradeList;
