import React from "react";
import "./createbox.css";

function LoadingNews({ volunteerHours }) {
  return (
    <div>
      {volunteerHours.map((volunteerHours) => {
        return (
          <div className="box_activity_container">
            <div className="box_activity_img">
              <img src={volunteerHours.image} key={volunteerHours.id} />
            </div>
            <div className="box_activity_title">
              <h2 key={volunteerHours.id}>{volunteerHours.title}</h2>
              <div className="box_activity_location">
                <p key={volunteerHours.id}>{volunteerHours.location}</p>
              </div>
              <div className="box_activity_hr">
                <p key={volunteerHours.id}>{volunteerHours.date}</p>
                <p key={volunteerHours.id}>ชม.กิจกรรม {volunteerHours.hr}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LoadingNews;
