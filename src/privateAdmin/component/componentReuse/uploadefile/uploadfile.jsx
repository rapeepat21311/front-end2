import React from "react";
import "./uploadfile.scss";

function Uploadfile({
  image,
  fileName,
  defaultImage,
  placeholder,
  setFilename,
  setImage,
}) {
  return (
    <div className="student_avatar">
      <div className="avatar_image_container">
        <div className="avatar_image">
          {image !== null || image !== undefined ? (
            <img
              src={image}
              alt={fileName}
              style={{
                width: "100%",
                height: "64px",
                borderRadius: "8px",
              }}
            />
          ) : (
            <img src={defaultImage} />
          )}
        </div>
      </div>
      <div className="avatar_upload_description_text_container">
        <h6>{placeholder}</h6>
      </div>
      <div className="avatar_upload_file">
        <form
          onClick={() =>
            document.querySelector(".input_avatar_student").click()
          }
        >
          <input
            type="file"
            className="input_avatar_student"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFilename(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />
          <h6>อัพโหลด</h6>
        </form>
      </div>
    </div>
  );
}

export default Uploadfile;
