import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import vector from "../../../../../image/vector.png";
import vector_1 from "../../../../../image/vector (1).png";
import plus from "../../../../../image/add.png";
import viewButton from "../../../../../image/Button.png";
import more_vert from "../../../../../image/more_vert.png";

import "./newsList.css";

import { mockNewsList } from "./mockdata/mocknewlist";

function NewsList() {
  return (
    <div className={`list_user_page ${viewuser && "list_user_page_inactive"}`}>
      <div className="list_user_title">
        <h1>ข่าวสาร</h1>
      </div>
      <div className="search_text">
        <div className="search_left_container">
          <div className="search">
            <input placeholder="Search" type="search" />
            <SearchIcon />
          </div>
          <div className="select_term_capital_option">
            <select>
              <option>วันที่ประกาศ</option>
              <option>รหัสอาจารย์ 1</option>
            </select>
          </div>
          <div className="select_type_capital_option">
            <select>
              <option>ประเภทข่าว</option>
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
      <div className="table_news_list">
        <table>
          <thead>
            <tr>
              <th scope="col">ลำดับ</th>
              <th scope="col">หัวข้อข่าว</th>
              <th scope="col">ประเภทข่าว</th>
              <th scope="col">วันที่ประกาศ</th>
              <th scope="col">{""}</th>
            </tr>
          </thead>
          <tbody>
            {mockNewsList.map((item, index) => {
              return (
                <tr>
                  <td>{item.number}</td>
                  <td>{item.news_title}</td>
                  <td>{item.news_type}</td>
                  <td>{item.news_post_date}</td>
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

export default NewsList;
