import React, { useState } from "react";
import menu from "./menu.jpg";
import back from "./back.png";
import forward from "./forward.png";

const Sidebar = () => {
  const [sidemenu, setSideMenu] = useState(0);

  const DisplayMenu = () => {
    sidemenu === 0 ? setSideMenu(1) : setSideMenu(0);
  };

  return (
    <>
      <div className={sidemenu === 0 ? "sidebar" : "sidebar-extend"}>
        <div className="side-div">
          <img src={menu} id="menubtn" onClick={DisplayMenu} alt="menu" />
          <img src={back} className="side-icon" alt="back" />
          <img src={forward} className="side-icon" alt="forward" />
          <img src={forward} className="side-icon" alt="menu" />

          <img src={forward} className="side-icon" alt="menu" />
        </div>
        {sidemenu === 1 ? (
          <div className="side-nav">
            <text className="side-nav-title">Back</text>
            <text className="side-nav-title">Forward</text>
            <text className="side-nav-title">Feedback</text>
            <text className="side-nav-title">Info</text>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Sidebar;
