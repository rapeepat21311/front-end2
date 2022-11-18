import React from "react";
// import BodyOption from "../../component/bodyOption/bodyOption";
import Card from "./Home/MenuCard";
import { menuLists } from "../../menuLists";

// import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import "./home.css";

function body() {
  return (
    <>
      <div className="home_body">
        <div className="body">
          <div className="body_header">
            <div className="body_left">
              <h1>ยินดีต้อนรับ</h1>
              <h1>Welcome</h1>
            </div>
            <div className="body_right">
              <h1>SWE62</h1>
            </div>
          </div>
          <div className="menu_container">
            {menuLists.map((menuList, i) => (
              <Card
                name={menuList.name}
                image={menuList.image}
                link={menuList.link}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default body;
