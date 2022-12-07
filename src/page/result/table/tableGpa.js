import React from "react";

function TableGpa({ dataList = [] }) {
  return (
    <div className="table_gp_container">
      {!!dataList.length && (
        <table>
          <thead>
            <th>ผลการเรียนเฉลี่ยการศึกษานี้</th>
          </thead>
          {dataList.map((val, i) => {
            return (
              <div className="hello_daddy">
                <div className="hello_mom">
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
          ;
        </table>
      )}

      {/* {!!dataList.length && (
        <div className="fu">

            <thead> ผลการเรียนเฉลี่ยการศึกษานี้asesaeae</thead>
        <table>
          {dataList.map((val, i) => {
            return (
              <div className="f">
                <tr>
                  <th>{val.label}</th>
                </tr>
                <tr>
                  <td>{val.value}</td>
                </tr>
              </div>
            );
          })}
        </table>
          </div>
      )} */}

      {/* {dataList.map((val, i) => {
          return (
            <div key={i +''} className="table_gp_container">
              <div className="table_gp_container" >{val.label}</div>
              <div className="table_gp_container">{val.value}</div>
            </div>
          )
        })} */}
    </div>
  );
}

export default TableGpa;
