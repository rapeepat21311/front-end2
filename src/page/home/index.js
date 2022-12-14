import React from "react";
import Home from "./home";
import Header from "../../component/navbar/Header/Header";
import Footer from "../../component/navbar/Footer/Footer";

import './home.css'

function index() {
  return (
    <div className="hekk">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default index;
