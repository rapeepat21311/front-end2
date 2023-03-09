import React, { useState } from "react";
import "./component/lastedEvent.css";

import Footer from "../../../component/navbar/Footer/Footer";
import Header from "../../../component/navbar/Header/Header";

import LastedEvent from "./component/LastedEvent";
import PaginationNews from "../Pagination/PaginatioNews";

import { mockDataLastesEvent } from "./component/mockDataEvent";
import { useNavigate } from "react-router";

import BackIcon from "../../../image/BackIcon.png";

function Index() {
  const navigate = useNavigate();

  const [lastedEvent, setLastedEvent] = useState(mockDataLastesEvent);

  // จำนวน Page จำนวน Document
  const [currentPage, setCurrentPage] = useState(1);
  const [lastedEventPerPage, setLastedEventPerPage] = useState(9);
  // จำนวน Pagination
  const [pageNumberLimit, setPageNumberLimit] = useState(6);
  const [maxPageLimit, setMaxPageLimit] = useState(6);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Header />
      <div className="news_body">
        <div className="news_container">
          <div className="home_page_and_redirect_page">
            <p onClick={() => navigate("/dashboard")}>หน้าหลัก </p> {" > "}{" "}
            <p onClick={() => navigate("/news")}>ข่าวสารและกิจกรรม</p> {" > "}{" "}
            <p>กิจกรรมทั้งหมด</p>
          </div>
          <div className="back_to_last_news">
            <img onClick={() => navigate("/dashboard")} src={BackIcon} />
          </div>
          <div className="event_all_title">
            <h1>กิจกรรมทั้งหมด</h1>
          </div>
          <div className="news_update_box_cotainer">
            <LastedEvent
              mockDataLastedEvent={lastedEvent}
              currentPage={currentPage}
              perPage={lastedEventPerPage}
            />
          </div>
          <PaginationNews
            volunteerHoursPerPage={lastedEventPerPage}
            totalVolunteerHours={lastedEvent.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPageLimit={maxPageLimit}
            setMaxPageLimit={setMaxPageLimit}
            minPageLimit={minPageLimit}
            setMinPageLimit={setMinPageLimit}
            pageNumberLimit={pageNumberLimit}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
