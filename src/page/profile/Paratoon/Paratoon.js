import React from "react";
import "./capitalCss.css";
import { mockDataParacapital } from "./mockdataParatoon";

export default function Paratoon() {
  return (
    <div className="table_capital_container">
      <table>
        <tr>
          <th>ภาคการศึกษา</th>
          <th>ประเภท</th>
          <th>ทุนการศึกษา</th>
          <th>ผู้ให้ทุน</th>
          <th>จำนวนเงิน</th>
          <th>รับ</th>
          <th>ส่วนลดทุน</th>
          <th>คงเหลือ</th>
        </tr>

        {mockDataParacapital.map((item) => {
          return (
            <tr>
              <td>{item.term}</td>
              <td>{item.type}</td>
              <td>{item.capital}</td>
              <td>{item.funder}</td>
              <td>{item.remaining}</td>
              <td>{item.money}</td>
              <td>{item.get}</td>
              <td className="capital_discount">{item.capitalDiscount}</td>
            </tr>
          );
        })}
      </table>
      <div className="type_capital">
        <div className="type_capital_header">
          <h2 className="type_capital_blue">หมายเหตุ : </h2>
          <h1> ประเภทของทุนการศึกษา</h1>
        </div>
        <div className="type_capital_description">
          <p>E30 : ตัดรายการโดยการลดหนี้</p>
          <p>E50 : ต้องชำระเงิน - ไม่คืนส่วนที่เหลือ(ภายนอก)</p>
          <p>E100 : ไม่ต้องชำระเงิน - ไม่คืนส่วนที่เหลือ (ภายใน)</p>
          <p>S30 : ต้องชำระเงินบางส่วน</p>
          <p>S50 : ไม่ต้องชำระเงิน - คืนส่วนที่เหลือ (ทบวง)</p>
          <p>S100 : ไม่ต้องชำระเงิน - คืนส่วนที่เหลือ (ทบวง)</p>
        </div>
      </div>
    </div>
  );
}
