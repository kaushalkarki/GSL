import React from 'react';
import notification from "./bell.png";
import profile from "./profile.png";
import logo from "./logo1.png";
import arrow from "./arrow.png";

const Header = () => {
    return (
        <>
        <div className="header">
          <img src={logo} alt="logo" className="logo" />
          <p className="title">Doctor Dashboard</p>
          <div className="inner-div">
            <img src={notification} alt="bell" className="icon-notification" />
            <p className="welcome-text">Welcome</p>
            <img src={profile} alt="bell" className="icon-profile" />
            <p className="doc-name">Dr. Ali Masudi</p>
            <img src={arrow} alt="arrow" className="icon-arrow" />
          </div>
        </div>
            
        </>
    )
}

export default Header
