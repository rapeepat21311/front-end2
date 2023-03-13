import React, { useContext, useState } from "react";
import "./Header.css";
// import "../HeaderOption/headerOption.css";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// import HeaderOptions from "../HeaderOption/headerOption";
// import grade from "../../page/grade";

import { Link, Navigate } from "react-router-dom";
import { defaultUser } from "../../../page/Login/user";
import AuthContext from "../../../context/AuthProvider";

function Header() {
  const [open, setOpen] = useState(false);

  const { user, setUser } = useContext(AuthContext);

  const handleOpen = () => {
    setOpen(!open);
  };

  const onLogout = () => {
    setUser(defaultUser);
    Navigate("/login");
    console.log(user);
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
          <Link className="link" to="/grade">
            ผลการเรียน
          </Link>
        </h3>
        <h3>
          <Link className="link" to="/profile">
            ประวัตินักศึกษา
          </Link>
        </h3>
        <h3>
          <Link className="link" to="/capital">
            ภาระทุน
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
          <Link className="link" to="/review">
            ตรวจสอบจบ
          </Link>
        </h3>
      </div>

      <div className="header_right">
        <button onClick={handleOpen}>
          <AccountCircleIcon />
        </button>
        {open ? (
          <ul>
            <a href="/login" onClick={onLogout}>
              Log Out
            </a>
          </ul>
        ) : (
          <div>Is closed </div>
        )}

        {/* <Link to="/login">
          <HeaderOptions Icon={AccountCircleIcon} />
        </Link> */}
      </div>
    </div>
  );
}

export default Header;
