import React from "react";
import "./capitalCss.css";
import { mockDataParacapital } from "./mockdataParatoon";

export default function Paratoon() {
  return (
    // <table className="table_capital_barder">
    //   <thead className="table_capital_header">
    //     <tr>
    //       <td>ภาคการศึกษา</td>
    //       <td>ทุนการศึกษา</td>
    //       <td>จำนวนเงิน</td>
    //       <td>คงเหลือ</td>
    //       <td>ประเภท</td>
    //       <td>ผู้ให้ทุน</td>
    //       <td>ส่วนลดทุน</td>
    //       <td>s</td>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {mockDataParacapital.map((item) => (
    //       <tr className="">
    //         <td>{item.term}</td>
    //         <td>{item.capital}</td>
    //         <td>{item.money}</td>
    //         <td>{item.get}</td>
    //         <td>{item.remaining}</td>
    //         <td>{item.type}</td>
    //         <td>{item.funder}</td>
    //         <td>{item.capitalDiscount}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>

    // <div className="capital_barder_body">
    //   <div className="table_capital">
    //     <div className="capital_barder_header">
    //       <h2 className="term">ภาคการศึกษา</h2>
    //       <h2 className="capital">ทุนการศึกษา</h2>
    //       <h2>จำนวนเงิน</h2>
    //       <h2>รับ</h2>
    //       <h2>คงเหลือ</h2>
    //       <h2>ประเภท</h2>
    //       <h2>ผู้ให้ทุน</h2>
    //       <h2 className="capital_discount">ส่วนลดทุน</h2>
    //     </div>
    //     {mockDataParacapital.map((item) => {
    //       return (
    //         <div className="item_container_capital">
    //           <p className="item_term">{item.term}</p>
    //           <p className="capital">{item.capital}</p>
    //           <p>{item.money}</p>
    //           <p>{item.get}</p>
    //           <p>{item.remaining}</p>
    //           <p>{item.type}</p>
    //           <p>{item.funder}</p>
    //           <p className="item_capital_discount">{item.capitalDiscount}</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="table_capital_container">
      <table>
        <thead>
          <tr>
            <th className="table_left_radius">ภาคการศึกษา</th>
            <th>ทุนการศึกษา</th>
            <th>จำนวนเงิน</th>
            <th>รับ</th>
            <th>คงเหลือ</th>
            <th>ประเภท</th>
            <th>ผู้ให้ทุน</th>
            <th className="table_right_radius">ส่วนลดทุน</th>
          </tr>
        </thead>
        {mockDataParacapital.map((item) => {
          return (
            <tr>
              <td>{item.term}</td>
              <td>{item.capital}</td>
              <td>{item.money}</td>
              <td>{item.get}</td>
              <td>{item.remaining}</td>
              <td>{item.type}</td>
              <td>{item.funder}</td>
              <td>{item.capitalDiscount}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
