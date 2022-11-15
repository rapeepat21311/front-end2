import React, { useState } from "react";
import "./chagePageVolunteerHours.css";
function Pagination({
  volunteerHoursPerPage,
  totalVolunteerHours,
  handleChangePage,
}) {
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(totalVolunteerHours / volunteerHoursPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <div className="page_number">
      {pageNumbers.map((number) => {
        if (number < maxPageLimit + 1 && number > minPageLimit) {
          return (
            <h2
              onClick={() => {
                handleChangePage(number);
              }}
            >
              {number}
            </h2>

            // </li>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Pagination;

// Change Pages
