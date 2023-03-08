import React from "react";
import "./capitalCss.css";
import { mockDataParacapital } from "./mockdataParatoon";
import { nameFieldParatoon } from "./paratoonColumn";

export default function Paratoon() {
  return (
    <div className="table_capital_container">
      <table>
        <tr>
          {nameFieldParatoon.map((item)=>{
            return(
              <th>{item.fieldname}</th>
              )
            })}
        </tr>

        {mockDataParacapital.map((item) => {
          return (
            <tr>
              <td>{item.term}</td>
              <td>{item.type}</td>
              <td>{item.capital}</td>
              <td className="capital_discount">{item.funder}</td>
              <td className="capital_discount" >{item.remaining}</td>
              <td className="capital_discount" >{item.money}</td>
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
          <p>E30 : ทุน เรียนดี 30%</p>
          <p>E50 : ทุน เรียนดี 50%</p>
          <p>E100 : ทุน เรียนดี 100%</p>
          <p>A30 : ทุน กิจกรรม 30%</p>
          <p>A50 : ทุน กิจกรรม 50%</p>
          <p>A100 : ทุน กิจกรรม 100%</p>
        </div>
      </div>
    </div>
  );
}
