import React, { useState } from "react";

import Footer from "../../../component/navbar/Footer/Footer";
import Header from "../../../component/navbar/Header/Header";

//component
import LastesNews from "./component/LastesNews";
import PaginationNews from "../Pagination/PaginatioNews";

import { mockDataLastesNews } from "./component/mockDataNews";
import { useNavigate } from "react-router";

function Index() {
  const navigate = useNavigate();

  const [lastesNewsData, setLastesNewsData] = useState(mockDataLastesNews);
  // จำนวน Page จำนวน Document
  const [currentPage, setCurrentPage] = useState(1);
  const [lastedNewsPerPage, setLastedNewsPerPage] = useState(9);
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
            <p onClick={() => navigate("/")}>หน้าหลัก </p> {" > "}{" "}
            <p onClick={() => navigate("/news")}>ข่าวสารและกิจกรรม</p> {" > "}{" "}
            <p>ข่าวสารทั้งหมด</p>
          </div>
          <div className="news_update_title">
            <h1>ข่าวสารล่าสุด</h1>
          </div>
          <div className="news_update_box_cotainer">
            <LastesNews
              mockDataLastesNews={lastesNewsData}
              currentPage={currentPage}
              perPage={lastedNewsPerPage}
            />
          </div>
          <PaginationNews
            volunteerHoursPerPage={lastedNewsPerPage}
            totalVolunteerHours={lastesNewsData.length}
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
      </div>
      <Footer />
    </>
  );
}

export default Index;
