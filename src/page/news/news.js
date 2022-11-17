import React, { useState } from "react";
import Header from "../../component/navbar/Header/Header";
import { recommentNews } from "./recommentEvent";
import "./news.css";

//imgae material
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import RoomIcon from "@mui/icons-material/Room";

function News() {
  const [newsRecomment, setNewsRecomment] = useState(recommentNews);
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
          <div className="box_news_recomment">
            <div className="box_news_img">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAAD////j4+MeHh709PQ1NTUoKCjLy8vZ2dkLCwtFRUUkJCT4+Pjr6+srKytKSko9PT3r1lA8AAABtElEQVR4nO3dS4rCABBF0Rh/+dm6/9X2sGdFHpSg6XMX8PCEOCvIMASdx9P+LsnycAmWx3M0nURIWERI2BQhYREhYVOEhEWEhE0REhYREjZFSFhESNgUIWERIWFThIRFhIRNERIWERI2RfjPhFs0vb1PeA76uY/7m+ZgeZ6C5ftP8qOHYHm8P6/7W5IfPS3B8jN50OMQvB2n8Rq8HGvy4m1rsHxN/iyn9wlvkfBGSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPjVwo+5ibrsb5uW9ba39fUIph+vYHmZtmA6eHTDME/b/h7R9CNYnuZoOskFLWERIWFThIRFhIRNERIWERI2RUhYREjYFCFhESFhU4SERYSETRESFhESNkVIWERI2BQhYdGHCL/zru34t4nB2/Gl96VvEx7/RpiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8K+PuYk6/rdkj/894KTv/KZz0vEvaAkJiwgJmyIkLCIkbIqQsIiQsClCwiJCwqYICYsICZsiJCwiJGyKkLCIkLApQsIiQsKmCD9S+AvTV48FOfTaXQAAAABJRU5ErkJggg==" />
              <div className="news_recomment_date">
                <h3>28</h3>
                <p>ส.ค</p>
              </div>
            </div>
            <div className="news_recomment_description">
              <div className="recomment_news_title">{newsRecomment.title}</div>
              <div className="news_description">
                {newsRecomment.description}
              </div>
              <div className="news_location">
                <RoomIcon />

                <p>{newsRecomment.location}</p>
              </div>
              <div className="news_time_scope">
                <AccessTimeFilledIcon />
                <p>{newsRecomment.timeScope}</p>
              </div>
              <div className="news_event_scope">
                <AccessTimeFilledIcon />
                <p>{newsRecomment.eventScope}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
