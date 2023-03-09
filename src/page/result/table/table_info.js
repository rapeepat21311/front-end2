import React from "react";
// import './Table.css'
const colorId = {
  id1:"#E8EBED",
  id2:"#FFFFFF",
  id3:"#E8EBED",
  id4:"#FFFFFF",
  id5:"#E8EBED",
  id6:"#FFFFFF",
}


function Table({ dataList = [] }) {
  return (
    <div className="general-table_container" >
      {!!dataList.length&&
        <table >
          <tr style={{backgroundColor: colorId[`id${dataList.id}`]}}>
            <th>id</th>
            <th>รหัสวิชา</th>
            <th>ชื่อรายวิชา</th>
            <th>หน่วยกิต</th>
            <th>เกรด</th>
          </tr>
          {dataList.map((val, id) => {
            return (
              <tr key={id + ""} >
                <td>{id + 1}</td>
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
