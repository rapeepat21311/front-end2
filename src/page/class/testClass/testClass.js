import React, { useState, useCallback,useEffect } from "react";
import WeekDayComponent from "./weekDayComponent";
import "./testClass.css";
import { mockTestList } from "./dayTestList";



const defaultList = [
  {
    id: 0,
    wkDay: "MON",
    activityList: [],
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


export default function TestClass() {
  const [data,setData] = useState(defaultList)

  useEffect(()=>{
    fetchAPI()
  },[])

  const fetchAPI = useCallback((year)=>{
    setData(mockTestList)
  },[])


  return (
    <div className="test_class">
      {/* <Header /> */}
      {/* <div className="classl"> */}
      <div className="testClass_body">
        {data.map((weekDay,i)=>{
          console.log(weekDay)
          return <WeekDayComponent weekDayData={weekDay}/>
        })}
      </div>

    </div>
  );
}
