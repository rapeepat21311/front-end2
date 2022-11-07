import React from "react";
import "./headerOption.css";

function HeaderOptions({ Icon, title }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOption_icon" />}
      <h3 className="headerOption_title"> {title} </h3>
    </div>
  );
}

export default HeaderOptions;
