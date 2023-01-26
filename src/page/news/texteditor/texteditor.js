import React, { useRef } from "react";

import ReactQuil from "react-quill";
import "react-quill/dist/quill.snow.css";
// import JoditEditor from "jodit-react";

function Texteditor({ setValue, className, value }) {
  const editor = useRef();
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };
  return (
    <ReactQuil
      className={className}
      ref={editor}
      theme="snow"
      value={value}
      onChange={(content) => setValue(content)}
      modules={modules}
      // onBlur={(news) => setValue(news)}
      // tabIndex={4}
      // config={config}
    />
  );
}

export default Texteditor;
