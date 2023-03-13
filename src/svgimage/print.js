import React from "react";

function Print({ fill = "#FAF9F6", width = 24, height = 24 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
       <path
        d="M16 8V5H8V8H6V3H18V8H16ZM18 12.5C18.2833 12.5 18.5207 12.404 18.712 12.212C18.904 12.0207 19 11.7833 19 11.5C19 11.2167 18.904 10.979 18.712 10.787C18.5207 10.5957 18.2833 10.5 18 10.5C17.7167 10.5 17.4793 10.5957 17.288 10.787C17.096 10.979 17 11.2167 17 11.5C17 11.7833 17.096 12.0207 17.288 12.212C17.4793 12.404 17.7167 12.5 18 12.5ZM16 19V15H8V19H16ZM18 21H6V17H2V11C2 10.15 2.29167 9.43767 2.875 8.863C3.45833 8.28767 4.16667 8 5 8H19C19.85 8 20.5627 8.28767 21.138 8.863C21.7127 9.43767 22 10.15 22 11V17H18V21ZM20 15V11C20 10.7167 19.904 10.479 19.712 10.287C19.5207 10.0957 19.2833 10 19 10H5C4.71667 10 4.479 10.0957 4.287 10.287C4.09567 10.479 4 10.7167 4 11V15H6V13H18V15H20Z"
        fill={fill}
      /> 
    </svg>
  );
}

export default Print;