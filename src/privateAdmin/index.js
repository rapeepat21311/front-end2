import React from "react";
import { useSelector } from "react-redux";

import "./index.css";
function Index() {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="admin_page">
      <h2>Admin Dashboard</h2>
      <h3>WelCome {user.advisor}</h3>
    </div>
  );
}

export default Index;
