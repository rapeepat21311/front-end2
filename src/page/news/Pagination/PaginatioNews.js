import React, { useState } from "react";
import "../../profile/events/chagePageVolunteerHours.css";
function PaginationNews({
  volunteerHoursPerPage,
  totalVolunteerHours,
  paginate,
  currentPage,
  setCurrentPage,
  maxPageLimit,
  setMaxPageLimit,
  minPageLimit,
  setMinPageLimit,
  pageNumberLimit,
}) {
  // const [pageNumberLimit, setPageNumberLimit] = useState(6);
  // const [maxPageLimit, setMaxPageLimit] = useState(6);
  // const [minPageLimit, setMinPageLimit] = useState(0);

  const handleNextButton = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
  };

  const pageNumbers = [];
  const numPages = Math.ceil(totalVolunteerHours / volunteerHoursPerPage);
  for (let i = 1; i <= numPages; i++) {
    if (i <= numPages || i === numPages || Math.abs(currentPage - i) <= 1) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="page_number">
      <button
        disabled={currentPage === pageNumbers[0] ? true : false}
        onClick={handlePrevbtn}
      >
        {"<"}
      </button>
      {pageNumbers.map((number) => {
        if (number < maxPageLimit + 1 && number > minPageLimit) {
          return (
            <>
              <h2
                className={`select_page_number ${
                  currentPage === number && "select_page_number_active"
                }`}
                onClick={() => {
                  paginate(number);
                }}
              >
                {number}
              </h2>
            </>
            // </li>
          );
        } else {
          return null;
        }
      })}
      <button
        disabled={
          currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
        }
        onClick={handleNextButton}
      >
        {">"}
      </button>
    </div>
  );
}

export default PaginationNews;

// Change Pages
