import React from "react";
import Header from "../../component/navbar/Header/Header";
import "./news.css";

function news() {
  return (
    <>
      <Header />
      <div className="home_body">
        <div className="news_container">
          <div className="home_page_and_redirect_page">
            <p>หน้าหลัก</p> {" > "} <p>ข่าวสารและกิจกรรม</p>
          </div>
          <div className="news_title">
            <h1>กิจกรรมแนะนำ</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default news;
