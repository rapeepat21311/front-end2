import React from "react";
import Header from "../../component/navbar/Header/Header";

import "./class.css";

function classl() {
  return (
    <div>
      <Header />
      <div className="classl">
        <div className="classl_body">
          <div className="classl_title">
            <p>ตารางเรียน</p>
          </div>
            <div className="classl_header">
              <p>ตารางเรียน</p>
              <p>ตารางสอบ</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default classl;
