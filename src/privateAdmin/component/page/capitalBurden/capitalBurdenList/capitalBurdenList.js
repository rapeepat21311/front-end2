import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import vector from "../../../../../image/vector.png";
import vector_1 from "../../../../../image/vector (1).png";
import plus from "../../../../../image/add.png";
import viewButton from "../../../../../image/Button.png";
import more_vert from "../../../../../image/more_vert.png";

import "./capitalBurdenList.css";

import { mockDataCapitalBurden } from "./datamock/mockDataCapitalBurden";
import Viewlist_teacher from "../../../componentReuse/viewlist_teacher";
import View_capital_burden from "../../../componentReuse/view_capital_burdent";
import Pagination_admin from "../../../componentReuse/paginationAdmin/pagination_admin";

function CapitalBurdenList() {
  const navigate = useNavigate();
  const [viewuser, setViewuser] = useState(false);
  const [capitalId, setCapitalId] = useState(null);

  const [userlistPerpage, setUserListPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageText, setPageText] = useState(1);
  const [pageTextPerpage, setPageTextPerpage] = useState(15);
  const [pageNumberLimit, setPageNumberLimit] = useState(6);
  const [maxPageLimit, setMaxPageLimit] = useState(6);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onClickLinkEditPage = (id) => {
    setCapitalId(id);
  };
  return (
    <>
      <div
        className={`list_user_page ${viewuser && "list_user_page_inactive"}`}
      >
        <div className="list_user_title">
          <h1>ภาระทุน</h1>
        </div>
        <div className="search_text">
          <div className="search_left_container">
            <div className="search">
              <input placeholder="Search" type="search" />
              <SearchIcon />
            </div>
            <div className="select_term_capital_option">
              <select>
                <option>ภาคการศึกษา</option>
                <option>รหัสอาจารย์ 1</option>
              </select>
            </div>
            <div className="select_type_capital_option">
              <select>
                <option>ประเภท</option>
                <option>คณะ2</option>
              </select>
            </div>
          </div>
          <div className="list_user_text_option">
            <div className="export_document_container">
              <div className="export_document">
                <button>ส่งออกข้อมูล</button>
                <img src={vector} />
              </div>
            </div>
            <div className="import_document_container">
              <div className="import_document">
                <button>นำเข้าข้อมูล</button>
                <img src={vector_1} />
              </div>
            </div>
            <div className="add_document_container">
              <div
                className="add_document"
                onClick={() => navigate("/admin-page/add-capital-burden")}
              >
                <img src={plus} />
                <button>เพิ่มข้อมูล</button>
              </div>
            </div>
          </div>
        </div>
        <div className="table_capital_burden">
          <table>
            <thead>
              <tr>
                <th scope="col">ลำดับ</th>
                <th scope="col">ชื่อ-นามสกุล</th>
                <th scope="col">ภาคการศึกษา</th>
                <th scope="col">ประเภท</th>
                <th scope="col">ทุนการศึกษา</th>
                <th scope="col">จำนวนเงิน</th>
                <th scope="col">{""}</th>
              </tr>
            </thead>
            <tbody>
              {mockDataCapitalBurden.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.term}</td>
                    <td>{item.type_capital}</td>
                    <td>{item.capital}</td>
                    <td>{item.money}</td>
                    <td>
                      <div className="list_view_delete">
                        <img
                          src={viewButton}
                          onClick={() => (
                            setViewuser(!viewuser),
                            onClickLinkEditPage(item._id)
                          )}
                        />
                        <img src={more_vert} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Pagination_admin
          volunteerHoursPerPage={userlistPerpage}
          totalVolunteerHours={mockDataCapitalBurden.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxPageLimit={maxPageLimit}
          setMaxPageLimit={setMaxPageLimit}
          setMinPageLimit={setMinPageLimit}
          minPageLimit={minPageLimit}
          pageNumberLimit={pageNumberLimit}
          pageText={pageText}
          setPageText={setPageText}
          setTextPerPage={setPageTextPerpage}
          pageTextPerpage={pageTextPerpage}
          documentLength={mockDataCapitalBurden.length}
        />
      </div>
      <div
        className={
          viewuser
            ? "view_user_container_active"
            : "view_user_container_inactive"
        }
      >
        <div className={viewuser ? "view_user_active" : "view_user_inactive"}>
          {viewuser ? (
            <View_capital_burden
              id={capitalId}
              onClose={() => setViewuser(false)}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default CapitalBurdenList;
