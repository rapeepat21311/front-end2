import React from "react";
import "./butoon_submit.scss";
function Button_submit() {
  return (
    <div className="button_submit_unsubmit_container">
      <div className="button_unsubmit_reuse">
        <p>ยกเลิก</p>
      </div>
      <div className="button_submit_reuse">
        <p>บันทึก</p>
      </div>
    </div>
  );
}

export default Button_submit;
