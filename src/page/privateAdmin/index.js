import React from "react";
import { useSelector } from "react-redux";

import "./index.css";
import NavBar from "./navBar/NavBar";

function Index() {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <>
      <NavBar />
      <div className="admin_page">
        <div className="body_admin_page">
          <h2>Admin Page</h2>
          <h3>WelCome {user.advisor}</h3>
        </div>
      </div>
    </>
  );
}

export default Index;
