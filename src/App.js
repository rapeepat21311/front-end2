import React, { useState } from "react";
import "./App.css";
import UserContext from "./context/userContext";

import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <PrivateRoute />
      </UserContext.Provider>
    </div>
  );
}

export default App;
