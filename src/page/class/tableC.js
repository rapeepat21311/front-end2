import React from "react";
import "./tableC.css"

function TableC({ dataList = [] }) {
  return (
    <div className="class_table">
      {!!dataList.length&&
        <table>
          <tr>
            <th>วัน</th>
            <th>เวลา</th>
            <th>ชื่อรายวิชา</th>
            <th>เลขห้อง</th>
          </tr>
          {dataList.map((val, i) => {
            return (
              <tr key={i}>
                <td>{val.วัน}</td>
                <td>{val.เวลา}</td>
                <td>{val.ชื่อรายวิชา}</td>
                <td>{val.เลขห้อง}</td>
              </tr>
            );
          })}
        </table>
      }
    </div>
  );
}

export default TableC;
