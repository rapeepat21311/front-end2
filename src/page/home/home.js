import React from "react";
// import BodyOption from "../../component/bodyOption/bodyOption";
import Card from "./Home/MenuCard";
import { menuLists } from "../../menuLists";

// import { Link } from "react-router-dom";

import Footer from "../../component/navbar/Footer/Footer";

import "./home.css";

function body() {
  return (
    // <div className="hello_home">
      <div className="home_body">
        <div className="body">
          <div className="body_header">
            <div className="body_left">
              <h2>ยินดีต้อนรับ</h2>
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
        // <Footer /> 
    // </div>
  );
}

export default body;
