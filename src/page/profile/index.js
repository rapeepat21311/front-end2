import React, { useState } from "react";
import Body from "../home/home";
import Header from "../../component/navbar/Header/Header";
import Footer from "../../component/navbar/Footer/Footer";
import "./index.css";

import ProfileStudent from "./profile/ProfileStudent";
import Paratoon from "./Paratoon/Paratoon";
import Events from "./events/Events";

const navTab = [
  {
    tabName: "studentData",
    tabLabel: "ประวัตินักศึกษา",
    component: <ProfileStudent />,
    // isActive: true,
  },
  {
    tabName: "paratoonData",
    tabLabel: "ภาระทุน",
    component: <Paratoon />,
    // isActive: false,
  },
  {
    tabName: "Data",
    tabLabel: "ประวัตินักศึกษา",
    component: <Events />,
    // isActive: false,
  },
];

function Index() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Header />
      <div className="profile">
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
        </div>
        <div className="profile_component">{navTab[activeIndex].component}</div>
      </div>
      <Footer />
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
