import React from "react";

function ResultCard({topic="",abbr="",date="",grade="",icon=""}) {
  return (
    <div className="grade_sum_left">
      <p className="grade_text_left">{topic}</p>
      <p className="grade_text_left">{abbr}</p>
      {icon === "graph" && <div></div>}
      <div className="grade">{grade}</div>
    </div>
  );
}

export default ResultCard;
