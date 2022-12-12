import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router";

function SidebarMenu({
  openSildeBar,
  menulistName,
  openMenu,
  menulist,
  //   navigate,
  imageTitle,
  activeIndex,
  setActiveIndex,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="admin_menu_drop_down_list" onClick={openSildeBar}>
        <p>{imageTitle}</p>

        <h1>{menulistName}</h1>
      </div>
      {openMenu ? null : (
        <>
          {menulist.map((sideBar, index) => {
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
    </>
  );
}

export default SidebarMenu;
