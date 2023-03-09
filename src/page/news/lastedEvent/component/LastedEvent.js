import React, { useState } from "react";

import { useNavigate } from "react-router";

import EastIcon from "@mui/icons-material/East";
import RoomIcon from "@mui/icons-material/Room";

function LastedEvent({ mockDataLastedEvent, currentPage, perPage }) {
  const navigate = useNavigate();

  const [hover, setHover] = useState(0);

  const indexOfLastVolunteerHours = currentPage * perPage;
  const indexOfFirstVolunteerHours = indexOfLastVolunteerHours - perPage;

  const currentEvent = mockDataLastedEvent.slice(
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
      {currentEvent.map((item) => {
        return (
          <div
            className={
              hover === item.id ? "box_lasted_event_active" : "box_lasted_event"
            }
            key={item.id}
            onClick={()=> navigate(`/news/last-events/${item.id}`)}
          >
            <div className="box_lasted_event_img">
              <img src={item.image} />
            </div>

            <div
              className={`box_lasted_event_date ${
                hover === item.id && "box_lasted_event_date_active"
              }`}
              onMouseEnter={() => onMouseEnter(item.id)}
              onMouseLeave={() => onMouseLeave(item.id)}
            >
              <div className="news_update_date">{item.date}</div>
              <div className="box_lasted_event_title">{item.title}</div>
              <div className="news_event_location">
                <RoomIcon />
                <p>{item.location}</p>
              </div>
              <div
                className={` ${
                  hover === item.id
                    ? "event_title_description_link_active"
                    : "event_title_description_link"
                }
                `}
                onMouseEnter={() => onMouseEnter(item.id)}
                onMouseLeave={() => onMouseLeave(item.id)}
                onClick={() => navigate(`/news/last-news/${item.id}`)}
              >
                {hover === item.id ? (
                  <p onClick={() => navigate("/news/last-events/description")}>
                    รายละเอียด
                    <EastIcon />
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default LastedEvent;
