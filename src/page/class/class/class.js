import React, { useState, useCallback, useEffect } from "react";
import WeekDayComponent from "./weekDayComponent";
import { mockList } from "./dayClassList";

import "./class.css";

const defaultList = [
  {
    id: 0,
    wkDay: "MON",
    activityList: []
  },
  {
    id: 1,
    wkDay: "TUE",
    activityList: [],
  },
  {
    id: 2,
    wkDay: "WED",
    activityList: [],
  },
  {
    id: 3,
    wkDay: "THU",
    activityList: [],
  },
  {
    id: 4,
    wkDay: "FRI",
    activityList: [],
  },
  {
    id: 5,
    wkDay: "SAT",
    activityList: [],
  },
  {
    id: 6,
    wkDay: "SUN",
    activityList: [],
  },
];


export default function Classl() {
  const [data, setData] = useState(defaultList);

  useEffect(()=>{
    fetchAPI()
  },[])

  const fetchAPI = useCallback((year) => {
      setData(mockList)
  }, []);
  return (
    <div>
      {/* <Header /> */}
      {/* <div className="classl"> */}
      <div className="classl_body">
        {data.map((weekDay,i)=>{
          console.log(weekDay)
          return <WeekDayComponent weekDayData={weekDay}/>
        })}
      </div>

      <div className="select_year"></div>
      {/* <div className="class_table"> */}
      {/* <TableC dataList={mockClassData.detailTable} /> */}
      {/* </div> */}
    </div>
    // </div>
  );
}
