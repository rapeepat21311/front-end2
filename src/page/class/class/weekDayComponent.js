import React, { useState, useCallback, useEffect } from "react";

import "./class.css";

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
    <div className="week_day_component">
      <div className="week_day_container" style={{ backgroundColor: colorById[`id${weekDayData.id}`]}}>
        <p>{weekDayData.wkDay}</p>
      </div>
      <div className="week_day_activity_section">
        {activityData.map((activity) => {
          return (
            <div className="week_day_activity" style={{backgroundColor:activity.noData?"#8B8C89":"#fff"}}>
              {activity.noData && <p1>ไม่มีข้อมูลรายวิชาในวันนี้</p1>}
              <p> {activity.time} </p>
              <p> {activity.subject} </p>
              <p> {activity.room} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
