import React from "react";
import { EditOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import vector from "../../../../../image/vector.png";
import vector_1 from "../../../../../image/vector (1).png";
import plus from "../../../../../image/add.png";
import viewButton from "../../../../../image/Button.png";
import more_vert from "../../../../../image/more_vert.png";

import "./capitalBurdenList.css";

import { mockDataCapitalBurden } from "./datamock/mockDataCapitalBurden";

function CapitalBurdenList() {
  return (
    <div className="list_user_page">
      <div className="list_user_title">
        <h1>ภาระทุน</h1>
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
          <div className="select_type_capital_option">
            <select>
              <option>ประเภท</option>
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
      <div className="table_capital_burden">
        <table>
          <thead>
            <tr>
              <th scope="col">ลำดับ</th>
              <th scope="col">ชื่อ-นามสกุล</th>
              <th scope="col">ภาคการศึกษา</th>
              <th scope="col">ประเภท</th>
              <th scope="col">ทุนการศึกษา</th>
              <th scope="col">จำนวนเงิน</th>
              <th scope="col">{""}</th>
            </tr>
          </thead>
          <tbody>
            {mockDataCapitalBurden.map((item, index) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.term}</td>
                  <td>{item.type_capital}</td>
                  <td>{item.capital}</td>
                  <td>{item.money}</td>
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

export default CapitalBurdenList;
