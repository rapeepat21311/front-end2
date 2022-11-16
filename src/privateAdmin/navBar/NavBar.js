import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./index.css";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

import { pageComponentMenuList1 } from "../componentMapPage/AdminPage";
// import navigateContext from "../../context/userContext";

function NavBar({ children }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  const [activeIndex, setActiveIndex] = useState(0);

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
    <>
      <div className="layout_container">
        <div
          className="layout_main"
          style={{ width: sideBar ? "100%" : "100%" }}
        >
          <div className="navbar_container_admin">
            {/* <div className="navbar_admin"> */}
            {sideBar ? (
              <h1 onClick={showSideBar}>
                <CloseIcon />
              </h1>
            ) : (
              <h1 onClick={showSideBar}>
                <FormatListBulletedIcon />
              </h1>
            )}
            <p>{user.email}</p>
          </div>
          <div
            className={
              sideBar ? "sidebar_container_active" : "sidebar_container"
            }
          >
            <h1 onClick={openSildebarMenu1}>
              <AccountCircleIcon />
              Menu1
            </h1>
            {openMenu1 ? (
              <></>
            ) : (
              <>
                {pageComponentMenuList1.map((sideBar, index) => {
                  return (
                    <div
                      className={`menu_list_1 ${
                        index === activeIndex && "menu_list_1_active"
                      }`}
                      onClick={() => {
                        navigate(sideBar.path);
                        setActiveIndex(index);
                      }}
                    >
                      <h2
                        className={`menu_list_text ${
                          index === activeIndex && "menu_list_text_active"
                        }`}
                      >
                        {sideBar.menulist}
                      </h2>
                    </div>
                  );
                })}
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
      <div>{children}</div>
    </>
  );
}

export default NavBar;
