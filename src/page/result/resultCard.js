import React from "react";
import DonutG from "../../image/grade.png"

function ResultCard({topic="",abbr="",date="",grade="",icon=""}) {
  return (
    <div className="grade_sum_left">
      <p className="grade_text_left">{topic}</p>
      <p className="grade_text_left">{abbr}</p>
      {icon === "graph" && <div></div>}
      <div className="grade">
        {grade}
        </div>
        {/* <div className="grade_y">
        <p>2/2565</p>
        </div> */}
      <img src={DonutG} />
    </div>
  );
}

export default ResultCard;
