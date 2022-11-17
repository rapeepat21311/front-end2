import React from "react";

import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";

export default function LastesNews({
  mockDataLastesNews,
  currentPage,
  perPage,
}) {
  const indexOfLastVolunteerHours = currentPage * perPage;
  const indexOfFirstVolunteerHours = indexOfLastVolunteerHours - perPage;

  const currentNews = mockDataLastesNews.slice(
    indexOfFirstVolunteerHours,
    indexOfLastVolunteerHours
  );

  return (
    <>
      {currentNews.map((item) => {
        return (
          <div className="box_news_update">
            <div className="box_news_update_img">
              <img src={item.image} />
            </div>
            <div className="box_news_update_date_views">
              <div className="news_update_date">{item.date}</div>
              <div className="news_update_views">
                <RemoveRedEyeRoundedIcon />
                <p>{item.id}</p>
              </div>
            </div>
            <div className="box_news_update_title">{item.title}</div>
            <div className="box_news_update_link_description">รายละเอียด</div>
          </div>
        );
      })}
    </>
  );
}
