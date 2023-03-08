import React from "react";
// import BodyOption from "../../component/bodyOption/bodyOption";
import Card from "./Home/MenuCard";
import { menuLists } from "../../menuLists";
import BanerBar from '../../image/BanerBar.png'

// import { Link } from "react-router-dom";

import Footer from "../../component/navbar/Footer/Footer";

import "./home.css";
import { useNavigate } from "react-router-dom";
// import BanerBar from "../../svgimage/baner_bar";

function Body() {

  const navigate = useNavigate();


  return (
    // <div className="hello_home">
      <div className="home_body">
        <div className="body">
            <img  onClick={()=> navigate("/news/last-events/description")} src={BanerBar}/>
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

export default Body;
