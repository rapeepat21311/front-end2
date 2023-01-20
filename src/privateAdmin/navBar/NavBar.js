import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./index.css";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";

import { useNavigate } from "react-router-dom";
import auto_awesome from "../../image/auto_awesome_mosaic.png";
import groups from "../../image/groups.png";
import supervisor_account from "../../image/supervisor_account.png";
import payments from "../../image/payments.png";
import diversity_3 from "../../image/diversity_3.png";
import astrophotography_auto from "../../image/astrophotography_auto.png";
import table from "../../image/table.png";
import edit_document from "../../image/edit_document.png";
import workspace_premium from "../../image/workspace_premium.png";
import newspaper from "../../image/newspaper.png";
import interests from "../../image/interests.png";

import logoNBU from "../../image/image 116.png";

import {
  pageComponentMenuList1,
  pageComponentMenuList2,
} from "../componentMapPage/AdminPage";

import { userReducerConst } from "../../component/reducer/consUserRed";
// import navigateContext from "../../context/userContext";
import { useDispatch } from "react-redux";
import SidebarMenu from "./sildbarMenu/component/sidebarMenu";

function NavBar({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  const [activeIndex, setActiveIndex] = useState(0);

  const [profileBar, setProfileBar] = useState(false);

  const showLoginLogOut = () => setProfileBar(!profileBar);

  const [sideBar, setSideBar] = useState(false);
  const [openMenu1, setOpenMenu1] = useState(true);
  const [openMenu2, setOpenMenu2] = useState(true);

  const Login = () => {
    navigate("/login");
  };

  const Logout = () => {
    navigate("/");
    dispatch({ type: userReducerConst.LOG_OUT, payload: null });
  };

  const openSildebarMenu1 = () => {
    setOpenMenu1(!openMenu1);
  };
  const openSildebarMenu2 = () => {
    setOpenMenu2(!openMenu2);
  };

  const showSideBar = () => setSideBar(!sideBar);
  return (
    <div className="test">
      <div className="layout_main">
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
          <div className="navbar_admin_left">
            <img src={logoNBU} />
          </div>
          <div className="navbar_admin_right">
            <div
              className="profile_login_logout_navbar"
              onClick={showLoginLogOut}
            >
              <AccountCircleIcon />
            </div>

            <div>
              {profileBar ? (
                <div>
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
              ) : null}
            </div>
          </div>
        </div>
        <div
          className={sideBar ? "sidebar_container_active" : "sidebar_container"}
        >
          <div
            className="admin_menu_drop_down_list"
            onClick={() => navigate("/admin-page")}
          >
            {" "}
            <img src={auto_awesome} />
            <h1>ภาพรวมระบบ</h1>
          </div>
          <div
            className="admin_menu_drop_down_list"
            onClick={openSildebarMenu1}
          >
            <img src={groups} />

            <h1>ผู้ใช้งาน</h1>
          </div>
          {openMenu1 ? null : (
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
          {/* <SidebarMenu
              openSildeBar={openSildebarMenu2}
              imageTitle={<AccountCircleIcon />}
              menulistName={"อาจารย์ที่ปรึกษา"}
              openMenu={openMenu2}
              menulist={pageComponentMenuList2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            /> */}
          <div
            className="admin_menu_drop_down_list"
            // onClick={openSildebarMenu1}
            onClick={() => navigate("/admin-page/manage-teacher")}
          >
            <img src={supervisor_account} />

            <h1>อาจารย์ที่ปรึกษา</h1>
          </div>
          <div
            className="admin_menu_drop_down_list"
            // onClick={openSildebarMenu1}
            onClick={() => navigate("/admin-page/list-capital-burden")}
          >
            <img src={payments} />

            <h1>ภาระทุน</h1>
          </div>
          <div
            className="admin_menu_drop_down_list"
            onClick={() => navigate("/admin-page/list-activity-hours")}
            // onClick={openSildebarMenu1}
          >
            <img src={diversity_3} />

            <h1>ชั่วโมงกิจกรรม</h1>
          </div>
          <div
            className="admin_menu_drop_down_list"
            onClick={() => navigate("/admin-page/list-grade")}
            // onClick={openSildebarMenu1}
          >
            <img src={astrophotography_auto} />

            <h1>ผลการศึกษา</h1>
          </div>
          <div
            className="admin_menu_drop_down_list"
            onClick={() => navigate("/admin-page/list-timetable")}
            // onClick={openSildebarMenu1}
          >
            <img src={table} />

            <h1>ตารางเรียน</h1>
          </div>
          <div
            className="admin_menu_drop_down_list"
            onClick={() => navigate("/admin-page/list-testtable")}
            // onClick={openSildebarMenu1}
          >
            <img src={edit_document} />

            <h1>ตารางสอบ</h1>
          </div>
          <div
            className="admin_menu_drop_down_list"
            onClick={() => navigate("/admin-page/list-performance")}
            // onClick={openSildebarMenu1}
          >
            <img src={workspace_premium} />

            <h1>ผลงาน</h1>
          </div>
          <div
            className="admin_menu_drop_down_list"
            onClick={() => navigate("/admin-page/list-news")}
            // onClick={openSildebarMenu1}
          >
            <img src={newspaper} />

            <h1>ข่าวสาร</h1>
          </div>
          <div
            className="admin_menu_drop_down_list"
            onClick={() => navigate("/admin-page/list-events")}
            // onClick={openSildebarMenu1}
          >
            <img src={interests} />

            <h1>กิจกรรม</h1>
          </div>
          {/* <SidebarMenu
              openSildeBar={openSildebarMenu2}
              imageTitle={<AccountCircleIcon />}
              menulistName={"อาจารย์ที่ปรึกษา"}
              openMenu={openMenu2}
              menulist={pageComponentMenuList2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
            <SidebarMenu
              openSildeBar={openSildebarMenu2}
              imageTitle={<AccountCircleIcon />}
              menulistName={"อาจารย์ที่ปรึกษา"}
              openMenu={openMenu2}
              menulist={pageComponentMenuList2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            /> */}
          {/* <div
              className="admin_menu_drop_down_list"
              onClick={openSildebarMenu2}
            >
              <AccountCircleIcon />
              <h1>Menu2</h1>
            </div>
            {openMenu2 ? (
              <></>
            ) : (
              <>
                <h2>sub Menu</h2>
                <h2>sub Menu</h2>
                <h2>sub Menu</h2>
                <h2>sub Menu</h2>
              </>
            )} */}
        </div>
        <div
          className={
            sideBar ? `children_admin_page_active` : "children_admin_page"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
