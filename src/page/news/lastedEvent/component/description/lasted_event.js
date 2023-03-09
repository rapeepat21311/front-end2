import { Footer } from "antd/lib/layout/layout";

import "./lasted_event.css";

import React, { useState } from "react";
import Header from "../../../../../component/navbar/Header/Header";
import { useNavigate } from "react-router";

import Other_events from "./other_event";
import { mockDataLastesEvent } from "../mockDataEvent";

import GlobalEn from "../../../../../image/GlobalEn.png";
import BackIcon from "../../../../../image/BackIcon.png";

function LastedEventDes() {
  const navigate = useNavigate();

  const [lastedEvent, setLastedEvent] = useState(mockDataLastesEvent);

  const [currentPage, setCurrentPage] = useState(1);
  const [lastedEventsPerPage, setLastedEventsPerPage] = useState(2);
  return (
    <>
      <Header />
      <div className="news_body">
        <div className="news_container">
          <div className="home_page_and_redirect_page">
            <p onClick={() => navigate("/dashboard")}>หน้าหลัก </p> {" > "}{" "}
            <p onClick={() => navigate("/news")}>ข่าวสารและกิจกรรม</p> {" > "}{" "}
            <p onClick={() => navigate("/news/last-news")}>กิจกรรมทั้งหมด</p>
            <p>รายละเอียดกิจกรรม</p>
          </div>

          <div className="back_to_last_news">
            <img onClick={() => navigate("/dashboard")} src={BackIcon} />
          </div>

          <div className="box_last_news_description_container">
            <img src={GlobalEn} />
            {/* <div className="image_news_description">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
            </div> */}

            {/* <div className="box_news_descirption"> */}
            {/* <div className="news_description_title_date">
                <div className="news_title_description">
                  <h1>
                    ขอเชิญเข้าร่วมประชุมปฏิบัติการออนไลน์ในหัวข้อ “GLOBAL
                    ENGLISH CHALLENGES”
                  </h1>
                </div>
                <div className="news_title_date_description">
                  <p>เผยแพร่วันที่ {"12/12/2022"}</p>
                  <p>ระยะเวลาวันที่สิ้นสุด {"12/14/2022"}</p>
                </div>
              </div>
              <div className="description_box">
                <div className="events_title_box_description">
                  <h1>
                    ขอเชิญเข้าร่วมประชุมปฏิบัติการออนไลน์ในหัวข้อ “GLOBAL
                    ENGLISH CHALLENGES”
                  </h1>
                </div>
                <div className="box_event_description">
                  <p>
                    ขอเชิญเข้าร่วมประชุมปฏิบัติการออนไลน์ในหัวข้อ “GLOBAL
                    ENGLISH CHALLENGES”
                    <br />
                    <br />
                    จัดโดย หลักสูตรศิลปศาสตรมหาบัณฑิตและหลักสูตรปรัชญาบัณฑิต
                    สาขาวิชาภาษาอังกฤษศึกษา
                    <br />
                    <br />
                    หลักสูตรศิลปศาสตรบัณฑิต
                    สาขาวิชาภาษาอังกฤษธุรกิจสากลและการสอนภาษาอังกฤษเพื่อผู้ำพูดภาษาอื่น
                    ณ มหาวิทยาลัยนอร์ทกรุงเทพ วันอาทิตย์ที่ 6 พฤศจิกายน 2565
                    เวลา 09:00 - 12:00 น.
                    <br />
                    <br />
                    ผ่านระบบออนไซด์ห้อง R2206 และออนไลน์ Google Meet
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
                  <Other_events
                    mockDataLastesNews={lastedEvent}
                    currentPage={currentPage}
                    perPage={lastedEventsPerPage}
                  />
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LastedEventDes;
