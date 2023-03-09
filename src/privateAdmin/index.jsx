import React from "react";
import { useSelector } from "react-redux";
import Box_admin_panel from "./component/componentReuse/box_admin_panel/box_admin_panel";

import imageGrap1 from "../image/ข้อมูลผลสอบภาษาอังกฤษ.png";
import imageGrap2 from "../image/ข้อมูลผลสอบภาษาอังกฤษ (1).png";
import imageGrap3 from "../image/ข้อมูลผลสอบภาษาอังกฤษ (2).png";
import "./index.scss";
function Index() {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="admin_page">
      <div className="admin_panel_header_text">ภาพรวมระบบ</div>
      <div className="admin_panel_title_text_sofilter_term">
        <div className="admin_panel_title_container">ข้อมูลภาพรวมนักศึกษา</div>
        <div className="admin_panel_filter_year">
          <select name="" id="">
            <option value="">ปีการศึกษา 2565</option>
          </select>
        </div>
        <div className="admin_panel_filter_semester">
          <select name="" id="">
            <option value="">ภาคเรียนที่ 1 </option>
          </select>
        </div>
      </div>
      <div className="box_admin_panel_container">
        <Box_admin_panel
          text_header={"นักศึกษาเข้าใหม่"}
          persent={`0.0%`}
          total={1576}
        />
        <Box_admin_panel
          text_header={"บัญฑิตจบการศึกษา"}
          persent={`0.0%`}
          total={1495}
        />
        <Box_admin_panel
          text_header={"Retire และลาออก"}
          persent={`0.0%`}
          total={3}
        />
      </div>
      <div className="box_admin_panel_container">
        <Box_admin_panel width="50" text_header={"จำนวนข่าวสาร"} total={1576} />
        <Box_admin_panel
          width="50"
          text_header={"จำนวนกิจกรรม"}
          persent={`0.0%`}
          total={1495}
        />
      </div>
      <div className="box_admin_panel_container">
        <img src={imageGrap1} width="33.33%" height="33.33%" />
        <img src={imageGrap3} width="33.33%" height="33.33%" />
        <img src={imageGrap2} width="33.33%" height="33.33%" />
      </div>
    </div>
  );
}

export default Index;
