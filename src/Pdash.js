import React from "react";
import Header from "./Pathology/pat-dashboard-header";
import Content from "./Pathology/pat-dashboard-content";
import Sidebar from "./Sidebar"
import "./Pathology/pathologist.css";


const Pdash = () => {
  

  return (
    <>
      <div id="DoctorDashboard">
        <Header />

        <Content/>
        <Sidebar/>
  
      </div>
    </>
  );
};

export default Pdash;
