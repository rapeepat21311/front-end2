import React from "react";
import { tableList } from "../../tableList";

function Table() {
    return (
      <div className="Table">
        <table>
          <tr>
            <th>no</th>
            <th>รหัสวิชา</th>
            <th>ชื่อรายวิชา</th>
            <th>หน่วยกิต</th>
            <th>เกรด</th>
          </tr>
          {tableList.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.no}</td>
                <td>{val.รหัสวิชา}</td>
                <td>{val.ชื่อรายวิชา}</td>
                <td>{val.หน่วยกิต}</td>
                <td>{val.เกรด}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }
    
  export default Table;