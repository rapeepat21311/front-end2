import React, { useEffect, useState } from "react";
import mockDataActivity from "./MockDataEvent";
import Pagination from "./Pagination";
import "./createbox.css";
import LoadingNews from "./LoadingNews";
import Sasom from "../../../image/sasom.png"
import { useNavigate } from "react-router-dom";

export default function CreateBox() {
  const [volunteerHours, setVolunteerHours] = useState(mockDataActivity);
  const navigate = useNavigate();
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

  };

  return (
    <>
      <div className="volunteer_body">
        <img src={Sasom}/>
        <div className="box_activity_suppe">
          {currentVolunteerHours.map((item) => {
            return (
              <div className="box_activity_container">
                <div className="box_activity_img">
                  <img onClick={()=> navigate("/profile/event-detail")} src={item.image} />
                  {/* {item.id} */}
                </div>
                <div className="box_activity_title">
                  {/* <h2>{item.title}</h2> */}
                  <img src={item.title}/>
                  <div className="box_activity_location">
                    {/* <p>{item.location}</p> */}
                  </div>
                  <div className="box_activity_hr">
                    {/* <p>{item.date}</p>
                    <p>ชม.กิจกรรม {item.hr}</p> */}
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
        {/* <Pagination
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
        /> */}
      </div>
    </>
  );
}
