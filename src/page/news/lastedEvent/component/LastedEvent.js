import React, { useState } from "react";

import { useNavigate } from "react-router";

function LastedEvent({ mockDataLastedEvent, currentPage, perPage }) {
  // const navigate = useNavigate();

  const indexOfLastVolunteerHours = currentPage * perPage;
  const indexOfFirstVolunteerHours = indexOfLastVolunteerHours - perPage;

  const currentEvent = mockDataLastedEvent.slice(
    indexOfFirstVolunteerHours,
    indexOfLastVolunteerHours
  );
  return (
    <>
      {currentEvent.map((item) => {
        return (
          <div
            className="box_lasted_event"
            key={item.id}
            // onClick={()=> navigate(`/news/last-events/${item.id}`)}
          >
            <div className="box_lasted_event_img">
              <img src={item.image} />
            </div>
            <div className="box_lasted_event_date">
              <div className="news_update_date">{item.date}</div>
            </div>
            <div className="box_lasted_event_title">{item.title}</div>
            <div className="news_event_location">{item.location}</div>
          </div>
        );
      })}
    </>
  );
}

export default LastedEvent;
