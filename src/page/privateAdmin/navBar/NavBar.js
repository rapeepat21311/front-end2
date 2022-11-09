import React, { useState } from "react";

import { useSelector } from "react-redux";
import "./index.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function NavBar() {
  const { user } = useSelector((state) => ({ ...state }));

  const [sideBar, setSideBar] = useState(false);
  const [openMenu1, setOpenMenu1] = useState(true);
  const [openMenu2, setOpenMenu2] = useState(true);

  const openSildebarMenu1 = () => {
    setOpenMenu1(!openMenu1);
  };
  const openSildebarMenu2 = () => {
    setOpenMenu2(!openMenu2);
  };

  const showSideBar = () => setSideBar(!sideBar);
  return (
    <div className="navbar_container_admin">
      <div className="navbar_admin">
        <h1 onClick={showSideBar}>
          {" "}
          <ArrowBackIosNewIcon />{" "}
        </h1>
        <p>{user.email}</p>
      </div>
      <div
        className={sideBar ? "sidebar_container_active" : "sidebar_container"}
      >
        <div className="sidebar_admin">
          <h1 onClick={openSildebarMenu1}>
            <AccountCircleIcon />
            Menu1
          </h1>
          {openMenu1 ? (
            <></>
          ) : (
            <>
              <h2>ผู้ใช้งาน</h2>
              <h2>sub Menu</h2>
              <h2>sub Menu</h2>
              <h2>sub Menu</h2>
            </>
          )}

          <h1 onClick={openSildebarMenu2}>
            <AccountCircleIcon />
            Menu2
          </h1>
          {openMenu2 ? (
            <></>
          ) : (
            <>
              <h2>sub Menu</h2>
              <h2>sub Menu</h2>
              <h2>sub Menu</h2>
              <h2>sub Menu</h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
