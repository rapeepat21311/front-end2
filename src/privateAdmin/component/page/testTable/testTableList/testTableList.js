import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function TesttableList() {
  return (
    <div className="layout_body">
      <div className="list_user_page">
        <div className="list_user_title">
          <h1>ตารางสอบ</h1>
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
      </div>
    </div>
  );
}

export default TesttableList;
