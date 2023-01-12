import { Footer } from "antd/lib/layout/layout";

import "./lastednewsdesc.css";

import React, { useState } from "react";
import Header from "../../../../../component/navbar/Header/Header";
import { useNavigate } from "react-router";
import { mockDataLastesNews } from "../mockDataNews";
import Other_news from "./other_news";

function LastedNewsDes() {
  const navigate = useNavigate();

  const [lastesNews, setLastesNews] = useState(mockDataLastesNews);

  const [currentPage, setCurrentPage] = useState(1);
  const [lastedNewsPerPage, setLastedNewsPerPage] = useState(2);
  return (
    <>
      <Header />
      <div className="news_body">
        <div className="news_container">
          <div className="home_page_and_redirect_page">
            <p onClick={() => navigate("/")}>หน้าหลัก </p> {" > "}{" "}
            <p onClick={() => navigate("/news")}>ข่าวสารและกิจกรรม</p> {" > "}{" "}
            <p onClick={() => navigate("/news/last-news")}>ข่าวสารทั้งหมด</p>
            <p>รายละเอียดข่าวสาร</p>
          </div>

          <div
            className="back_to_last_news"
            onClick={() => navigate("/news/last-news")}
          >
            {"<--"} กลับ
          </div>

          <div className="box_last_news_description_container">
            <div className="image_news_description">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
            </div>

            <div className="box_news_descirption">
              <div className="news_description_title_date">
                <div className="news_title_description">
                  <h1>{'NBU Open House "NORTH Bankkok EDU Fun Fest" '}</h1>
                </div>
                <div className="news_title_date_description">
                  <p>เผยแพร่วันที่ {"12/12/2022"}</p>
                  <p>ระยะเวลาวันที่สิ้นสุด {"12/14/2022"}</p>
                </div>
              </div>
              <div className="description_box">
                <div className="news_title_box_description">
                  <h1>{'NBU Open House "NORTH Bankkok EDU Fun Fest" '}</h1>
                </div>
                <div className="box_news_description">
                  <p>
                    ไม่มาจะถือว่าพลาดมาก...มหาวิทยาลัยนอร์ทกรุงเทพ
                    เปิดบ้านแห่งการเรียนรู้ กับกิจกรรม NBU Open House "North
                    Bangkok EDU Fun Fest" ต้อนรับน้องๆนักเรียนจากทั่วประเทศ
                    ทั้งระดับมัธยมศึกษาและอาชีวศึกษา
                    เพื่อเฟ้นหาสิ่งที่ใช้ไปกับคณะที่ชอบ สู่อาชีพที่อยากเป็น
                    <br />
                    <br />
                    วันที่ 25 - 26 พฤศจิกายน 2565 ณ มหาวิทยาลัยนอร์ทกรุงเทพ
                    วิทยาเขตรังสิต ร่วมสนุกไปกับกิจกรรมของแต่ละคณะสาขา FUN
                    ไปกับการเก็บคะแนนแต่ละบูธกิจกรรมลุ้นแลกของรางวัล พร้อม
                    Workshop คลูๆในห้องปฏิบัตการมากมาย
                    <br />
                    <br />
                    พืเศษสมัครเรียนภายในงานรับฟรี iPad Gen10*
                    พร้อมทุนการศึกษาสูงสุด 30,000 บาท ทั้งภาคปกติ
                    และภาคสมทบลงทะเบียนรับ 100 คะแนนพิเศษ ได้ที่ Rich Menu Line
                    Official NBU : @northbkk
                    (http://lin.ee/RZWMvE9)คลิกแบนเนอร์งาน NBU Open House
                    แล้วมาพบกันนะครับ
                    <br />
                    <br />
                    *เงื่อนไขเป็นไปตามที่มหาวิทยาลัยกำหนด
                  </p>
                </div>
                <div className="image_news_inbox_description">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
                </div>
              </div>
              <div className="other_news">
                <div className="other_news_title">ข่าวสารอื่นๆ</div>
                <div className="other_news_image_link">
                  <Other_news
                    mockDataLastesNews={lastesNews}
                    currentPage={currentPage}
                    perPage={lastedNewsPerPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LastedNewsDes;
