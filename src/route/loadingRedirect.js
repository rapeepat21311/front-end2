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
      <h1>No Permission</h1>
      <p>Redirect in {count}</p>
    </div>
  );
}

export default LoadingRedirect;
