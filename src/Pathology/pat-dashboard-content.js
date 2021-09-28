import React, { useState } from "react";
import schedule from "./images/schedule.png";
import active from "./images/active.png";
import closed from "./images/closed.png";
import inprogress from "./images/in-progress.png";
import search from "./images/search.png";
import PatientData from "../PatientData";

const Content = () => {
  const [display, setDisplay] = useState(0);
  // const [edit, setEdit] = useState(false);

  const PatientTab = () => {
    setDisplay(0);
  };
  const CasesTab = () => {
    setDisplay(1);
  };
  const DevicesTab = () => {
    setDisplay(2);
  };

  return (
    <>
      <div className="content">
        <div className="scheduled">
          <img src={schedule} alt="schedule" className="btn-icons" />
          <div className="div-btn">
            <p className="btn-data">12</p>
            <p className="btn-title">Scheduled</p>
          </div>
        </div>
        <div className="active">
          <img src={active} alt="active" className="btn-icons" />
          <div className="div-btn">
            <p className="btn-data">05</p>
            <p className="btn-title">Active</p>
          </div>
        </div>
        <div className="in-progress">
          <img src={inprogress} alt="in-progress" className="btn-icons" />
          <div className="div-btn">
            <p className="btn-data">05</p>
            <p className="btn-title">In Progress</p>
          </div>
        </div>
        <div className="closed">
          <img src={closed} alt="closed" className="btn-icons" />
          <div className="div-btn">
            <p className="btn-data">129</p>

            <p className="btn-title">Closed</p>
          </div>
        </div>

        <div className="dashboard">
          <nav className="navbar">
            <div className="btn-group">
              <button className="btn" onClick={PatientTab}>
                Patients
              </button>
              <button className="btn" onClick={CasesTab}>
                Cases
              </button>
              <button className="btn" onClick={DevicesTab}>
                Devices
              </button>
            </div>
            <input type="text" id="searchbox" />
            <img
              src={search}
              alt="search"
              id="search-icon"
              onClick={() => alert("Searching Btn working")}
            />
          </nav>

          <section>
            {display !== 0 ? (
              display === 1 ? (
                <div>Cases</div>
              ) : (
                <div>Devices</div>
              )
            ) : (
              <table className="table">
                <thead>
                  <tr className="table-head">
                    <th>ID</th>
                    <th> Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Date/ Time</th>
                  </tr>
                </thead>
                <tbody>
                  {PatientData.map((Element) => {
                    return (
                      <tr
                        key={Element.id}
                        suppressContentEditableWarning={true}
                      >
                        <td>{Element.id}</td>
                        <td>{Element.name}</td>
                        <td>{Element.age}</td>
                        <td>{Element.gender}</td>
                        <td>{Element.status}</td>
                        <td>{Element.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Content;
