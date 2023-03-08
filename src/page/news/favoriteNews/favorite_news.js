import React from "react";
import Header from "../../../component/navbar/Header/Header";
import Footer from "../../../component/navbar/Footer/Footer";
import "./favorite_news.css";
import { useNavigate } from "react-router-dom";
import { TbArrowAutofitLeft } from "react-icons/tb";
import CardEvent from "../../../image/CardsEvent.png";
import Pagination_admin from "../../../privateAdmin/component/componentReuse/paginationAdmin/pagination_admin";
import Pagination from "../../../image/Pagination.png";
import BackIcon from "../../../image/BackIcon.png";

function FavoriteNews() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="favorite">
        <div className="favorite_header">
          <p onClick={() => navigate("/dashbord")}>หน้าหลัก</p>
          {" > "}
          <p onClick={() => navigate("/news")}>ข่าวสารและกิจกรรม</p>
          {" > "}
          <p>กิจกรรมทั้งหมด</p>
        </div>
        <div className="favorite_title">
          <p onClick={() => navigate("/news")}>
          <img src={BackIcon}/>   
          </p>
        </div>
        <div className="favorite_container">
          <div className="favorite_container_title">
            <p>กิจกรรมที่สนใจทั้งหมด</p>

            <div className="favorite_container_body">
              <img onClick={()=> navigate("/news/last-news/description")} src={CardEvent} />
              <div className="favorite_container_pg">
                <img src={Pagination} />
              </div>
            </div>
            {/* <Pagination_admin/> */}
          </div>
        </div>
          <Footer />
      </div>
    </div>
  );
}

export default FavoriteNews;
