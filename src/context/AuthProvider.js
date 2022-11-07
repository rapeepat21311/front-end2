import { createContext, useState } from "react";
import { defaultUser } from "../page/Login/user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
