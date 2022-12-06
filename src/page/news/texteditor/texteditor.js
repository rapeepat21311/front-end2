import React from "react";

import JoditEditor from "jodit-react";

function Texteditor({ setValue, config }) {
  return (
    <JoditEditor onChange={(content) => setValue(content)} config={config} />
  );
}

export default Texteditor;
