import React from "react";
import { useSelector } from "react-redux";

import "./index.css";
function Index() {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="layout_body">
      <div className="admin_page">
        <h2>Admin Page</h2>
        <h3>WelCome {user.advisor}</h3>
      </div>
    </div>
  );
}

export default Index;
