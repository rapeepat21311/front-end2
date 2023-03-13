import React, { useState, useCallback,useEffect } from "react";
import Header from "../../../component/navbar/Header/Header";

import TableC from "../tableC";
import {mockTableTestClassList } from "../../../tableList";

import "./testClass.css";
import TableT from "../tableT";

const mockTestClassData = { detailTable:mockTableTestClassList };
// const defaultClassData = { datailTable: [] };

export default function TestClass() {
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
      <div className="testClass">
        <div className="testClass_body">
          <div className="testClass_title">
          </div>
          <div className="testClass_header">
          </div>
        </div>
          <div className="testClass_table">
          <TableT dataList={mockTestClassData.detailTable} />
          </div>
      </div>
    </div>
  );
}
