import React from "react";
import "./edit_create_page_title.scss";
function Edit_create_page_title({ page }) {
  return (
    <div className="edit_create_page_title">
      <h1>{page}</h1>
    </div>
  );
}

export default Edit_create_page_title;
