import React from "react";
import Resize from "react-image-file-resizer";
import { useSelectior } from "react-redux";
import axios from "axios";

function FileUpload() {
  const { user } = useSelectior((state) => ({ ...state }));
  const handleChangeFile = (e) => {
    console.log(e.target.files);
    const file = e.target.file;
    if (file) {
      Resize.imageFileResizer(
        file,
        720,
        720,
        "JPEG",
        100,
        0,
        (uri) => {
          //
          axios.post(process.env.REACT_APP_API + "/image");
        },
        "base64"
      );
    }
  };
  return (
    <div className="test">
      <label>
        Choose file image
        <input
          onChange={handleChangeFile}
          type="file"
          name="image"
          accept="images/*"
        />
      </label>
    </div>
  );
}

export default FileUpload;
