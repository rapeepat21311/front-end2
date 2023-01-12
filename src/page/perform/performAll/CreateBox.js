import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import mockDataActivity from "./MockDataEvent";
import Pagination from "./Pagination";
import "./createbox.css";
// import LoadingNews from "./LoadingNews";

export default function CreateBox() {
  const [volunteerHours, setVolunteerHours] = useState(mockDataActivity);
  const navigate = useNavigate();
  const {id} = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [volunteerHoursPerPage] = useState(12);
  const [pageNumberLimit, setPageNumberLimit] = useState(6);
  const [maxPageLimit, setMaxPageLimit] = useState(6);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const indexOfLastVolunteerHours = currentPage * volunteerHoursPerPage;
  const indexOfFirstVolunteerHours =
    indexOfLastVolunteerHours - volunteerHoursPerPage;

  const currentVolunteerHours = volunteerHours.slice(
    indexOfFirstVolunteerHours,
    indexOfLastVolunteerHours
  );

  // const handleSelectDataList = (e) => {
  //   const value = e.target.value;
  //   setVolunteerHoursPerPage(value);
  // };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // navigate('/')
  };
  return (
    <>
      <div className="pbox_activity_suppe">
        {currentVolunteerHours.map((item) => {
          return (
            <div className="pbox_activity_container" onClick={()=> navigate("/detail")} >
              <div className="pbox_activity_img">
                <img src={item.image} />
                {item.id}
              </div>
              <div className="pbox_activity_title">
                <h2>{item.title}</h2>
                <div className="pbox_activity_location">
                  <p>{item.location}</p>
                </div>
                <div className="pbox_activity_hr">
                  <p>{item.date}</p>
                  <p>ประเภท {item.hr}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <select onClick={(e) => handleSelectDataList(e)}>
        <option value="8">8</option>
        <option value="10">10</option>
      </select> */}
      <Pagination
        shape="rounded"
        volunteerHoursPerPage={volunteerHoursPerPage}
        totalVolunteerHours={volunteerHours.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPageLimit={maxPageLimit}
        setMaxPageLimit={setMaxPageLimit}
        minPageLimit={minPageLimit}
        setMinPageLimit={setMinPageLimit}
        pageNumberLimit={pageNumberLimit}
      />
    </>
  );
}
