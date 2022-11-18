import React from "react";
import "./capitalCss.css";
import { mockDataParacapital } from "./mockdataParatoon";

export default function Paratoon() {
  return (
    <div className="table_capital_container">
      <table>
        <thead>
          <tr>
            <th>ภาคการศึกษา</th>
            <th>ทุนการศึกษา</th>
            <th>จำนวนเงิน</th>
            <th>รับ</th>
            <th>คงเหลือ</th>
            <th>ประเภท</th>
            <th>ผู้ให้ทุน</th>
            <th>ส่วนลดทุน</th>
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
              <td className="capital_discount">{item.capitalDiscount}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
