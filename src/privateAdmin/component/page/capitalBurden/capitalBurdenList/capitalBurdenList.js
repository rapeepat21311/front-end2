import React from "react";
import { EditOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./capitalBurdenList.css";

import { mockDataCapitalBurden } from "./datamock/mockDataCapitalBurden";

function CapitalBurdenList() {
  return (
    <div className="layout_body">
      <div className="list_user_page">
        <div className="list_user_title">
          <h1>ภาระทุน</h1>
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

export default CapitalBurdenList;
