import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function LoadingRedirect() {
  const navigate = useNavigate();

  const [count, setCount] = useState(3);

  // จับเวลา ในการ Redirect เมื่อไม่มีสิทธิ์ใช้งานหน้านี้
  useEffect(() => {
    const timeCurrentRedirec = setInterval(() => {
      setCount((cC) => --cC);
    }, 1000);

    count === 0 && navigate("/");

    return () => clearInterval(timeCurrentRedirec);
  }, [count, navigate]);

  return (
    <div>
      <h1>ยังไม่สามารถเข้าหน้านี้ได้กรุณา ล็อคอิน</h1>
      <p>ระบบจะพาท่านไปสู่หน้าแรกใน {count}s</p>
    </div>
  );
}

export default LoadingRedirect;
