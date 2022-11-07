import React from "react";
import { useSelector } from "react-redux";
import LoadingRedirect from "./loadingRedirect";

// children คือ ใต้ component ใน หน้าที่เรียกใช้
const UserRouter = ({ children }) => {
  // เช็คใน React dev-tool ว่ามี token ไหม
  const { user } = useSelector((state) => ({ ...state }));

  return user && user.token ? children : <LoadingRedirect />;
};

export default UserRouter;
