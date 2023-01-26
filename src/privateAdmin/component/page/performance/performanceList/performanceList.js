import React, { useState } from "react";

import "./performanceList.css";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import vector from "../../../../../image/vector.png";
import vector_1 from "../../../../../image/vector (1).png";
import plus from "../../../../../image/add.png";
import viewButton from "../../../../../image/Button.png";
import more_vert from "../../../../../image/more_vert.png";
import { mockPerformance } from "./datamock/mockPerformance";
import Viewlist_teacher from "../../../componentReuse/viewlist_teacher";
import { useNavigate } from "react-router";
import View_performance from "../../../componentReuse/view_performance";

function PerformanceList() {
  const navigate = useNavigate();
  const [viewPerformance, setViewPerformance] = useState(false);
  const [performanceId, setPerformanceId] = useState("");

  const onClickLinkEditPage = (id) => {
    setPerformanceId(id);
  };
  return (
    <>
      <div
        className={`list_user_page ${
          viewPerformance && "list_user_page_inactive"
        }`}
      >
        <div className="list_user_title">
          <h1>ผลงาน</h1>
        </div>
        <div className="search_text">
          <div className="search_left_container">
            <div className="search">
              <input placeholder="Search" type="search" />
              <SearchIcon />
            </div>
            <div className="select_term_capital_option">
              <select>
                <option>วันที่</option>
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
              <div
                className="add_document"
                onClick={() => navigate("/admin-page/add-performance")}
              >
                <img src={plus} />
                <button>เพิ่มข้อมูล</button>
              </div>
            </div>
          </div>
        </div>
        <div className="table_performance">
          <table>
            <thead>
              <tr>
                <th scope="col">ภาคการศึกษา</th>
                <th scope="col">วันที่บันทึกข้อมูล</th>
                <th scope="col">ชื่อ-นามสกุล</th>
                <th scope="col">ชื่อการแข่งขัน/งาน</th>
                <th scope="col">ชื่อรางวัลที่ได้รับ</th>
                <th scope="col">ประเภทผลงาน</th>
                {/* <th scope="col">อาจารย์ผู้สอน</th> */}
                <th scope="col">{""}</th>
              </tr>
            </thead>
            <tbody>
              {mockPerformance.map((item, index) => {
                return (
                  <tr>
                    <td>{item.term}</td>
                    <td>{item.date_on_submit}</td>
                    <td>{item.user_fullname}</td>
                    <td>{item.name_of_performance}</td>
                    <td>{item.name_of_reward}</td>
                    <td>{item.type_of_performance}</td>
                    {/* <td>{item.teacher_on_subject}</td> */}
                    <td>
                      <div className="list_view_delete">
                        <img
                          src={viewButton}
                          onClick={() => {
                            onClickLinkEditPage(item._id);
                            setViewPerformance(!viewPerformance);
                          }}
                        />
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
      <div
        className={
          viewPerformance
            ? "view_user_container_active"
            : "view_user_container_inactive"
        }
      >
        <div
          className={
            viewPerformance ? "view_user_active" : "view_user_inactive"
          }
        >
          {viewPerformance ? (
            <View_performance
              id={performanceId}
              onClose={() => setViewPerformance(!viewPerformance)}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default PerformanceList;
