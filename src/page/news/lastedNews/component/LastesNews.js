import React, { useState } from "react";

import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function LastesNews({
  mockDataLastesNews,
  currentPage,
  perPage,
}) {
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
          <div className="box_news_update" key={item.id}>
            <div className="box_news_update_img">
              <img src={item.image} />
            </div>
            <div className="box_news_container_dvtd">
              <div className="box_news_update_date_views">
                <div className="news_update_date">{item.date}</div>
                <div className="news_update_views">
                  <RemoveRedEyeRoundedIcon />
                  <p>{item.id}</p>
                </div>
              </div>
              <div className="box_news_update_title">{item.title}</div>
              <div className="box_news_update_link_description">
                <p
                  className="news_title_h2"
                  onMouseEnter={() => onMouseEnter(item.id)}
                  onMouseLeave={() => onMouseLeave(item.id)}
                  // onClick={() => navigate(`/news/last-news/${item.id}`)}
                >
                  {hover === item.id ? (
                    <>
                      <Link to="/news/last-news/description">
                        รายละเอียด
                        <EastIcon />
                      </Link>
                    </>
                  ) : (
                    "รายละเอียด"
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
