import React, { useState, useCallback,useEffect } from "react";
import Header from "../../../component/navbar/Header/Header";

import TableC from "../tableC";
import { mockTableClassList } from "../../../tableList";

import "./class.css";


import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const mockClassData = { detailTable:mockTableClassList };
// const defaultClassData = { datailTable: [] };

export default function Classl() {
  // const [classData, setClassData] = useState(defaultClassData);

  // useEffect(() => {
  //   if (classData !== null) {
  //     fetchClass();
  //   }
  // }, [classData]);

  // const fetchClass = useCallback (()=>{
  //   setClassData(mockClassData);
  // },[classData])

  return (
    <div>
      {/* <Header /> */}
      {/* <div className="classl"> */}
        <div className="classl_body">
          <div className="classl_title"></div>
          <div className="classl_header"></div>
        </div>
        <div className="select_year">
        </div>
        {/* <div className="class_table"> */}
          <TableC dataList={mockClassData.detailTable} />
        {/* </div> */}
      </div>
    // </div>
  );
}
