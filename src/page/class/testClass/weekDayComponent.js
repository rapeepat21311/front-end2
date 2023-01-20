import React, { useState, useCallback, useEffect } from "react";

import "./testClass.css";

const colorById = {
  id0: "#FDF9D3",
  id1: "#FADDDF  ",
  id2: "#D2E9CD",
  id3: "#FDE5BF",
  id4: "#D8E5ED",
  id5: "#E0D5E5",
  id6: "#F1B1B2",
};
const defaultList = [{ noData: true }];

export default function WeekDayComponent({ weekDayData }) {
  const [activityData, setActivityData] = useState(defaultList);
  // console.log(weekDayData);
  useEffect(() => {
    if (weekDayData?.activityList?.length) {
      setActivityData(weekDayData.activityList);
    }
  }, [weekDayData]);
  return (
    <div className="test_week_day_component">
      <div className="test_week_day_container" style={{ backgroundColor: colorById[`id${weekDayData.id}`]}}>
        <p>{weekDayData.wkDay}</p>
      </div>
      <div className="test_week_day_activity_section">
        {activityData.map((activity) => {
          return (
            <div className="test_week_day_activity" style={{backgroundColor:activity.noData?"#E7ECEF":"#fff"}}>
              {activity.noData && <p2>ไม่มีข้อมูลรายวิชาในวันนี้</p2>}
              <p> {activity.time} </p>
              <p> {activity.subject} </p>
              <h4> {activity.room} </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
