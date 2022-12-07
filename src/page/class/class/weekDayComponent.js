import React, { useState, useCallback, useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./class.css";
import Modal from "../Modal/Modal";

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
  const [show, setShow] = useState(false);
  // console.log(weekDayData);
  useEffect(() => {
    if (weekDayData?.activityList?.length) {
      setActivityData(weekDayData.activityList);
    }
  }, [weekDayData]);
  return (
    <div className="week_day_component">
      <div
        className="week_day_container"
        style={{ backgroundColor: colorById[`id${weekDayData.id}`] }}
      >
        <p>{weekDayData.wkDay}</p>
      </div>
      <div className="week_day_activity_section">
        {activityData.map((activity) => {
          return (
            <div
              className="week_day_activity"
              onClick={() => setShow(true)}
              style={{ backgroundColor: activity.noData ? "#8B8C89" : "#fff" }}
            >
              <Modal
                title="SWE324 (1) : General Education for Life Development I"
                onClick={() => setShow(false)}
                show={show}
              >
                <div className="modal_close" onClick={()=> setShow(false)}>
                  <MdClose/>
                </div>
                {/* <button
                  className="modal_close"
                  onClick={() => setShow(false)}
                  show={show}
                >
                  &times;
                </button> */}
                <div className="modal_section_name">
                  <p>ชื่อภาษาไทย</p>
                  <p1>การทดสอบความสมเหตุสมผลและทวนสอบซอฟต์แวร์</p1>
                </div>
                <div className="modal_section_unity">
                  <p>สังกัด</p>
                  <p1>
                    คณะเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล,
                    สาขาวิชาวิศวกรรมซอฟต์แวร์
                  </p1>
                </div>
                <div className="modal_section_result">
                  <div className="modal_section_result_credit">
                    <p>หน่วยกิต</p>
                    <p1>3 (3-0-6)</p1>
                  </div>
                  <div className="modal_section_result_status">
                    <p>สถานะรายวิชา</p>
                    <p1>ใช้งาน</p1>
                  </div>
                  <div className="modal_section_result_group">
                    <p>กลุ่มที่</p>
                    <p1>1</p1>
                  </div>
                </div>
                <div className="modal_section_date">
                  <div className="modal_section_result_day">
                    <p>วัน</p>
                    <p1>อังคาร</p1>
                  </div>
                  <div className="modal_section_result_time">
                    <p>เวลา</p>
                    <p1>09:00-12:00</p1>
                  </div>
                  <div className="modal_section_result_room">
                    <p>ห้อง</p>
                    <p1>S2406</p1>
                  </div>
                </div>
                <div className="modal_section_category">
                  <div className="modal_section_result_lern">
                    <p>เรียน</p>
                    <p1>C</p1>
                  </div>
                  <div className="modal_section_result_category">
                    <p>หมวด</p>
                    <p1>W</p1>
                  </div>
                </div>
                <div className="modal_section_info">
                  <div className="modal_section_result_more">
                    <p>คำอธิบายเพิ่มเติม</p>
                    <p1>
                      ศึกษาและฝึกปฎิบัติเกี่ยวกับ สถาปัตยกรรม
                      และโครงสร้างของไมโครคอนโทรลเลอร์ ชุดคำสั่งเครื่อง
                      การต่อประสานและการจัดการหน่วยความจำ
                      การต่อประสานและการจัดการรับเข้าและการส่งออก การเข้าจังหวะ
                      ภาษาเครื่องและภาษาแอสแซมบลี
                      การออกแบบฮาร์ดแวร์และการเขียนโปรแกรม ไมโครคอนโทรลเลอร์
                      การประยุกต์ของไมโครคอนโทรลเลอร์ รวมถึงการประยุกต์ใช้สำหรับ
                      อินเทอร์เน็ตในทุกสรรพสิ่ง
                    </p1>
                  </div>
                </div>
                <div className="modal_section_note">
                  <div className="modal_section_result_note">
                    <p>หมายเหตุ</p>
                    <p1>
                      เรียน C = Lecture L = Lab R = ประชุม S = Self Study T =
                      ติว หมวด A = วิชาศึกษาทั่วไปบังคับ B =
                      วิชาศึกษาทั่วไปเลือก C = วิชาสัมพันธ์ E =
                      วิชาการศึกษาอิสระ F = วิชาเลือกเสรี G = วิชาศึกษาทั่วไป H
                      = วิชาชีพครูเลือก L = วิชาพื้นฐานวิชาเอก M = วิชาเอกบังคับ
                      N = วิชาเอกเลือก O = วิชาเลือก P = วิชาเฉพาะด้าน R =
                      วิชาบังคับ T = วิชาโท W = - X = ยังไม่กำหนด
                    </p1>
                  </div>
                </div>
              </Modal>
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
