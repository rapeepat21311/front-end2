import React, { useState } from "react";
import Body from "../home/home";
import Header from "../../component/navbar/Header/Header";
import Footer from "../../component/navbar/Footer/Footer";
import "./index.css";

import ProfileStudent from "./profile/ProfileStudent";
import Paratoon from "./Paratoon/Paratoon";
import Events from "./events/backlist/Events";
import CreateBox from "./events/CreateBox";
import { Navigate, useNavigate } from "react-router";

const navTab = [
  {
    tabName: "studentData",
    tabLabel: "ประวัตินักศึกษา",
    component: <ProfileStudent />,
  },
  {
    tabName: "paratoonData",
    tabLabel: "ภาระทุน",
    component: <Paratoon />,
  },
  {
    tabName: "Data",
    tabLabel: "ชั่วโมงกิจกรรมจิตอาสา",
    component: <CreateBox />,
  },
];

function Index() {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Header />
      <div
        className={activeIndex === 2 ? "profile_body_capital" : "profile_body"}
      >
        <div className={activeIndex === 2 ? "profile_capital" : "profile"}>
          <div className="profile_title_link_home_page">
            <p onClick={() => navigate("/dashboard")}>หน้าหลัก</p> {" > "}
            <p>ประวัตินักศึกษา</p>
          </div>
          <div className="profile_title">
            <h1>ประวัตินักศึกษา</h1>
          </div>

          <div className="profile_tab_container">
            {navTab.map((tab, index) => {
              return (
                <div
                  className={`profile_tab ${
                    index === activeIndex && "profile_tab_active"
                  } `}
                  onClick={() => setActiveIndex(index)}
                >
                  <h1
                    className={`profile_tab_text ${
                      index === activeIndex && "profile_tab_text_active"
                    }`}
                  >
                    {tab.tabLabel}
                  </h1>
                </div>
              );
            })}
            {activeIndex !== 0 ? (
              <div className="select_term">
                <h4>ภาคเรียนที่</h4>
                <select>
                  {/* map year นักศึกษา */}
                  <option>1/2562</option>
                  <option>2/2562</option>
                  <option>3/2563</option>
                  <option>1/2563</option>
                  <option>2/2563</option>
                  <option>1/2564</option>
                  <option>2/2564</option>
                </select>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="profile_component">
            {navTab[activeIndex].component}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;

// import React, { useState } from "react";
// import Header from "../../component/Header/Header";
// import Footer from "../../component/Footer/Footer";

// import Profile from "./profile/ProfileStudent";
// import Paratoon from "./Paratoon/Paratoon";
// import Events from "./events/Events";

// import "./index.css";

// const navTab = [
//   {
//     tabName: "studentData",
//     tabLabel: "ประวัตินักศึกษา",
//     component: <Profile />,
//   },
//   {
//     tabName: "paratoon",
//     tabLabel: "ภาระทุน",
//     component: <Paratoon />,
//   },
//   {
//     tabName: "Events",
//     tabLabel: "ชั่วโมงจิตอาสา",
//     component: <Events />,
//   },
// ];

// function Index() {
//   const [selectabIndex, setSelectTabIndex] = useState(0);

//   return (
//     <>
//       <Header />
//       <div className="profile">
//         <div className="profile_title">
//           <h1>ประวัตินักศึกษา</h1>
//         </div>
//         <div className="profile_tab_container">
//           {navTab.map((tab, index) => {
//             return (
//               <div
//                 className={`profile_tab ${
//                   index === selectabIndex && "profile_tab_active"
//                 }`}
//                 onClick={() => {
//                   setSelectTabIndex(index);
//                 }}
//               >
//                 <p
//                   className={`profile_tab_text ${
//                     index === selectabIndex && "profile_tab_text_active"
//                   }`}
//                 >
//                   {tab.tabLabel}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//         <div>{navTab[selectabIndex].component}</div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Index;
