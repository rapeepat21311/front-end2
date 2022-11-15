import React, { useEffect, useState } from "react";
import mockDataActivity from "./MockDataEvent";
import Pagination from "./Pagination";
import "./createbox.css";
import LoadingNews from "./LoadingNews";

export default function CreateBox() {
  const [volunteerHours, setVolunteerHours] = useState(mockDataActivity);

  const [currentPage, setCurrentPage] = useState(1);
  const [volunteerHoursPerPage, setVolunteerHoursPerPage] = useState(8);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const indexOfLastVolunteerHours = currentPage * volunteerHoursPerPage;
  const indexOfFirstVolunteerHours =
    indexOfLastVolunteerHours - volunteerHoursPerPage;

  const currentVolunteerHours = volunteerHours.slice(
    indexOfFirstVolunteerHours,
    indexOfLastVolunteerHours
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="box_activity_suppe">
        {currentVolunteerHours.map((item) => {
          return (
            <div className="box_activity_container">
              <div className="box_activity_img">
                <img src={item.image} />
              </div>
              <div className="box_activity_title">
                <h2>{item.title}</h2>
                <div className="box_activity_location">
                  <p>{item.location}</p>
                </div>
                <div className="box_activity_hr">
                  <p>{item.date}</p>
                  <p>ชม.กิจกรรม {item.hr}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <select>
        <option onClick={setVolunteerHoursPerPage(25)}>25</option>
        <option onClick={setVolunteerHoursPerPage(50)}>50</option>
        <option onClick={setVolunteerHoursPerPage(75)}>75</option>
        <option onClick={setVolunteerHoursPerPage(100)}>100</option>
      </select>
      <Pagination
        volunteerHoursPerPage={volunteerHoursPerPage}
        totalVolunteerHours={volunteerHours.length}
        paginate={paginate}
        handleChangePage={handleClick}
      />
    </>
  );
}
