import React from "react";
import { TableGpaxList } from "../../../tableList";

function TableGpax({ dataList = [] }) {
  return (
    <div className="table_gpx_container">
      {!!dataList.length && (
        <table>
          <tr>
            <th>ผลการเรียนเฉลี่ยสะสม</th>
          </tr>
          {dataList.map((val, i) => {
            return (
              <div className="gpx_container">
                <div className="gpx_container_section">
                  <tr key={i + ""}>
                    <td>{val.label}</td>
                    {/* <td>{val.value}</td> */}
                  </tr>
                  <tr key={i + ""}>
                    <td>{val.value}</td>
                  </tr>
                </div>
              </div>
            );
          })}
        </table>
      )}
    </div>
  );
}

export default TableGpax;
