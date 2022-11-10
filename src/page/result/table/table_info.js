import React from "react";

function Table({ dataList = [] }) {
  return (
    <div className="general-table">
      {!!dataList.length&&
        <table>
          <tr>
            <th>no</th>
            <th>รหัสวิชา</th>
            <th>ชื่อรายวิชา</th>
            <th>หน่วยกิต</th>
            <th>เกรด</th>
          </tr>
          {dataList.map((val, i) => {
            return (
              <tr key={i + ""}>
                <td>{i + 1}</td>
                <td>{val.รหัสวิชา}</td>
                <td>{val.ชื่อรายวิชา}</td>
                <td>{val.หน่วยกิต}</td>
                <td>{val.เกรด}</td>
              </tr>
            );
          })}
        </table>
      }
    </div>
  );
}

export default Table;
