import React, { useState } from "react";

import "./other_news.css";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Other_news({ mockDataLastesNews, currentPage, perPage }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(0);

  const indexOfLastVolunteerHours = currentPage * perPage;
  const indexOfFirstVolunteerHours = indexOfLastVolunteerHours - perPage;

  const currentNews = mockDataLastesNews.slice(
    indexOfFirstVolunteerHours,
    indexOfLastVolunteerHours
  );

  const onMouseEnter = (id) => {
    setHover(id);
  };
  const onMouseLeave = () => {
    setHover(0);
  };
  return (
    <>
      {currentNews.map((item) => {
        return (
          <div
            className="box_other_news"
            key={item.id}
            onClick={() => navigate("/news/last-news")}
          >
            <div className="box_other_news_img">
              <img src={item.image} />
            </div>
            <div className="box_other_news_title_date">
              <div className="box_other_news_title">
                <p>NBU Open House "North Bangkok EDU Fun Fest</p>
              </div>
              <div className="other_news_date">10 สิงหาคม 2565</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Other_news;
