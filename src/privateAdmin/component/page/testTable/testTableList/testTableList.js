import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import vector from "../../../../../image/vector.png";
import vector_1 from "../../../../../image/vector (1).png";
import plus from "../../../../../image/add.png";
import viewButton from "../../../../../image/Button.png";
import more_vert from "../../../../../image/more_vert.png";
import { mockDataTestTable } from "./mockdata/datamockTestTable";
import Viewlist_teacher from "../../../componentReuse/viewlist_teacher";
import View_testable from "../../../componentReuse/view_testtable";
import { useNavigate } from "react-router";

function TesttableList() {
  const navigate = useNavigate();
  const [viewTestTable, setViewTestTable] = useState(false);
  const [testtableId, setTesttableId] = useState("");

  const onClickLinkEditPage = (id) => {
    setTesttableId(id);
  };

  return (
    <>
      <div
        className={`list_user_page ${
          viewTestTable && "list_user_page_inactive"
        }`}
      >
        <div className="list_user_title">
          <h1>ตารางสอบ</h1>
        </div>
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
              <div
                className="add_document"
                onClick={() => navigate("/admin-page/add-testtable")}
              >
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
                        <img
                          src={viewButton}
                          onClick={() => {
                            setViewTestTable(!viewTestTable);
                            onClickLinkEditPage(item._id);
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
          viewTestTable
            ? "view_user_container_active"
            : "view_user_container_inactive"
        }
      >
        <div
          className={viewTestTable ? "view_user_active" : "view_user_inactive"}
        >
          {viewTestTable ? (
            <View_testable
              id={testtableId}
              onClose={() => setViewTestTable(false)}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default TesttableList;
