import React from "react";

function FileDownload({ fill = "#FAF9F6", width = 24, height = 24 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
       <path
        d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8043 19.021 19.413 19.413C19.021 19.8043 18.55 20 18 20H6ZM12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16Z"
        fill={fill}
      /> 
    </svg>
  );
}

export default FileDownload;