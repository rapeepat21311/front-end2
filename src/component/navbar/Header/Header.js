import React, { useState } from "react";
import "./Header.css";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { userReducerConst } from "../../reducer/consUserRed";

import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  const [profileBar, setProfileBar] = useState(false);

  const showLoginLogOut = () => setProfileBar(!profileBar);

  const Login = () => {
    navigate("/login");
  };

  const Logout = () => {
    navigate("/");
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
        <h1 onClick={showLoginLogOut}>
          <AccountCircleIcon />
        </h1>

        {user !== null ? (
          <p
            className={profileBar ? "log_out_active" : "log_out"}
            onClick={Logout}
          >
            Log out
          </p>
        ) : (
          <p
            className={profileBar ? "log_out_active" : "log_out"}
            onClick={Login}
          >
            Log in
          </p>
        )}
      </div>
    </div>
  );
}

export default Header;
