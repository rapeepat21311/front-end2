import React, { useState } from "react";
import "./App.css";
import NavigateContext from "./context/userContext";

import PrivateRoute from "./route/PrivateRoute";

const defaultPath = { path: "/admin-page", menulist: "Admin" };

function App() {
  const [currentPath, setCurrentPath] = useState({
    path: "/admin-page/list-user",
    menulist: "ผู้ใช้งาน",
  });
  return (
    <div className="App">
      <NavigateContext.Provider value={{ currentPath, setCurrentPath }}>
        <PrivateRoute />
      </NavigateContext.Provider>
    </div>
  );
}

export default App;
