import React from "react";
import Header from "./doc-dashboard-header";
import Content from "./doc-dashboard-content";
import Sidebar from "./Sidebar"
import "./design.css";


const Ddash = () => {
  

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

export default Ddash;
