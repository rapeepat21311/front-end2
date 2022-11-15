import React, { useEffect, useState } from "react";
import mockDataActivity from "./MockDataEvent";
import Pagination from "./Pagination";
import "./createbox.css";
import LoadingNews from "./LoadingNews";
// import { listUser } from "../../../route/function/user";
// import { useSelector } from "react-redux";

const renderBoxVolunteer = (data) => {
  {
    data.map((item, index) => {
      return (
        <div className="box_activity_container" key={item._id}>
          <div className="box_activity_img">
            <img src="https://inwfile.com/s-dl/lp4mgx.jpg" />
          </div>
          <div className="box_activity_title">
            <h2>{item.username}</h2>
            <div className="box_activity_location">
              <p>{item.email}</p>
            </div>
            <div className="box_activity_hr">
              <p>{item.studentId}</p>
              <p>ชม.กิจกรรม {item.aa}</p>
            </div>
          </div>
        </div>
      );
    });
  }
};

export default function CreateBox() {
  // const { user } = useSelector((state) => ({ ...state }));
  const [volunteerHours, setVolunteerHours] = useState(mockDataActivity);

  const [currentPage, setCurrentPage] = useState(1);
  const [volunteerHoursPerPage, setVolunteerHoursPerPage] = useState(8);

  // const [pageNumberLimit, setPageNumberLimit] = useState(5);
  // const [maxPageLimit, setMaxPageLimit] = useState(5);
  // const [minPageLimit, setMinPageLimit] = useState(0);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const indexOfLastVolunteerHours = currentPage * volunteerHoursPerPage;
  const indexOfFirstVolunteerHours =
    indexOfLastVolunteerHours - volunteerHoursPerPage;
  // const [startVolunteerHoursIndex, setStartVolunteerHoursIndex] = useState(0);
  // const [endVolunteerHoursIndex, setEndVolunteerHoursIndex] = useState(
  //   volunteerHoursPerPage
  // );

  // const handleChangePage = (pageNumber) => {
  //   setStartVolunteerHoursIndex((pageNumber - 1) * 10);
  //   setEndVolunteerHoursIndex(pageNumber * 10);
  // };

  const currentVolunteerHours = volunteerHours.slice(
    indexOfFirstVolunteerHours,
    indexOfLastVolunteerHours
  );

  // const loadData = (authtoken) => {
  //   listUser(authtoken)
  //     .then((res) => {
  //       setVolunteerHours(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   loadData(user.token);
  // }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="box_activity_suppe">
        {/* {renderBoxVolunteer(currentVolunteerHours)} */}
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
      {/* <select>
        <option onClick={setVolunteerHoursPerPage(25)}>25</option>
        <option onClick={setVolunteerHoursPerPage(50)}>50</option>
        <option onClick={setVolunteerHoursPerPage(75)}>75</option>
        <option onClick={setVolunteerHoursPerPage(100)}>100</option>
      </select> */}
      <Pagination
        volunteerHoursPerPage={volunteerHoursPerPage}
        totalVolunteerHours={volunteerHours.length}
        paginate={paginate}
        handleChangePage={handleClick}
      />
    </>
  );
}
