import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { currentAdmin } from "./function/auth";
import LoadingRedirect from "./loadingRedirect";

// children คือ ใต้ component ใน หน้าที่เรียกใช้
const AdminRoutes = ({ children }) => {
  // เช็คใน React dev-tool ว่ามี token ไหม
  const { user } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      currentAdmin(user.token)
        .then((res) => {
          console.log(res);
          setOk(true);
        })
        .catch((err) => {
          console.log(err);
          setOk(false);
        });
    }
  }, [user]);

  return ok ? children : <LoadingRedirect />;
};

export default AdminRoutes;
