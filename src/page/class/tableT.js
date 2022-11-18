import React from "react";

import "./testTable.css"

function TableT({ dataList = [] }) {
  return (
    <div className="test_table_container">
      {!!dataList.length&&
        <table>
          <tr>
            <th>วัน</th>    
            <th>วันที่</th>    
            <th>เวลา</th>
            <th>ชื่อรายวิชา</th>
            <th>เลขที่นั่ง</th>
            <th>เลขห้อง</th>
          </tr>
          {dataList.map((val, i) => {
            return (
              <tr key={i}>
                <td>{val.วัน}</td>
                <td>{val.วันที่}</td>
                <td>{val.เวลา}</td>
                <td>{val.ชื่อรายวิชา}</td>
                <td>{val.เลขที่นั่ง}</td>
                <td>{val.เลขห้อง}</td>
              </tr>
            );
          })}
        </table>
      }
    </div>
  );
}

export default TableT;
