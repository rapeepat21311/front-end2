import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.scss";

function Pagination_admin({
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
  pageText,
  pageTextPerpage,
  documentLength,
  setPageText,
  setTextPerPage,
}) {
  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    setPageText(currentPage + 15);
    setTextPerPage(pageTextPerpage + 15);
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    setTextPerPage(pageTextPerpage - 15);

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
  //   const [page, setPage] = useState(0);
  //   const [limit, setLimit] = useState(15);
  //   const [pages, setPages] = useState(0);
  return (
    // <div>
    //   <ReactPaginate
    //     previousLabel={"<"}
    //     nextLabel={">"}
    //     pageCount={page}
    //     breakLabel={"..."}
    //     marginPagesDisplayed={2}
    //     onPageChange={handlePageClick}
    //     containerClassName="pagination_container"
    //     pageClassName="pagination_page"
    //     pageLinkClassName="pagination_page_link"
    //     previousClassName="pagination_previous"
    //     previousLinkClassName="pagination_previous_link"
    //     nextClassName="pagination_next"
    //     nextLinkClassName="pagination_next_link"
    //     breakLinkClassName="pagination_dots"
    //     activeClassName="pagination_active"
    //   />
    // </div>
    <div className="page_number_number_container">
      <div className="previous_page_button">
        <button
          disabled={currentPage === pageNumbers[0] ? true : false}
          onClick={handlePrevbtn}
        >
          {"<"}
        </button>
      </div>
      <div className="pagination_number_container">
        {pageNumbers.map((number) => {
          if (number < maxPageLimit + 1 && number > minPageLimit) {
            return (
              <>
                <h2
                  className={`select_page_number_admin ${
                    currentPage === number && "select_page_number_admin_active"
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
      </div>
      <div className="next_page_button">
        <button
          disabled={
            currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
          }
          onClick={handleNextButton}
        >
          {">"}
        </button>
      </div>
      <div className="pagination_text_admin">
        <h4>
          การแสดงผล : {pageText} - {pageTextPerpage} จาก {documentLength}
        </h4>
      </div>
    </div>
  );
}

export default Pagination_admin;
