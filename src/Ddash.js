import React from "react";

import Header from "./doc-dashboard-header";
// import menu from "./menu.png";
// import back from "./back.png";
// import forward from "./forward.png";
import "./design.css";
import Content from "./doc-dashboard-content";

const Ddash = () => {
  // const [sidemenu, setSideMenu] = useState(0);




  // const DisplayMenu = () => {
  //   alert("hello");
  //   setSideMenu(1);
  // };


  return (
    <>
      <div>
        <Header />

        <Content/>

        {/* <div className="sidebar">
          <div className="side-div">
            <img src={menu} id="menubtn" onClick={DisplayMenu} alt="menu" />
            <img src={back} className="side-icon" alt="back" />
            <img src={forward} className="side-icon" alt="forward" />
            <img src={forward} className="side-icon" alt="menu" />

            <img src={forward} className="side-icon" alt="menu" />
          </div>
          {/* {sidemenu === 1 ? (
            <div className="side-nav">
              <text className="side-nav-title">Back</text>
              <text className="side-nav-title">Forward</text>
              <text className="side-nav-title">Feedback</text>
              <text className="side-nav-title">Info</text>
            </div>
          ) : (
            <></>
          )} */} 
        {/* </div> */}
      </div>
    </>
  );
};

export default Ddash;
