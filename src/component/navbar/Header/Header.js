import React, { useContext, useState } from "react";
import "./Header.css";
// import "../HeaderOption/headerOption.css";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// import HeaderOptions from "../HeaderOption/headerOption";
// import grade from "../../page/grade";

import { Link, useNavigate } from "react-router-dom";
import { defaultUser } from "../../../page/Login/user";
import userContext from "../../../context/userContext";
import { userReducerConst } from "../../reducer/consUserRed";

import { useDispatch } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [user, setUser] = useContext(userContext);

  const handleOpen = () => {
    setOpen(!open);
  };

  const Logout = () => {
    dispatch({ type: userReducerConst.LOG_OUT, payload: null });
  };

  return (
    <div className="Header">
      <div className="Header_left">
        <h1> EPORTFOLIO </h1>
      </div>

      <div className="Header_center">
        <Link className="link" to="/">
          <HomeOutlinedIcon />
        </Link>
        <h3>
          <Link className="link" to="/profile">
            ประวัตินักศึกษา
          </Link>
        </h3>
        <h3>
          <Link className="link" to="/result">
            ผลการศึกษา
          </Link>
        </h3>
        <h3>
          <Link className="link" to="/news">
            ข่าวสารและกิจกรรม
          </Link>
        </h3>
        <h3>
          <Link className="link" to="/classl">
            ตารางเรียน/สอบ
          </Link>
        </h3>
        <h3>
          <Link className="link" to="/perform">
            ผลงาน
          </Link>
        </h3>
      </div>

      <div className="header_right">
        <a onClick={handleOpen}>
          <AccountCircleIcon />
        </a>
        {open ? (
          <ul>
            <Link to="/login" onClick={Logout}>
              Log Out
            </Link>
          </ul>
        ) : (
          <div></div>
        )}

        {/* <Link to="/login">
          <HeaderOptions Icon={AccountCircleIcon} />
        </Link> */}
      </div>
    </div>
  );
}

export default Header;
