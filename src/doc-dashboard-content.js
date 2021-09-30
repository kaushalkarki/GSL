import React, { useState } from "react";
import schedule from "./images/schedule.png";
import active from "./images/active.png";
import closed from "./images/closed.png";
import inprogress from "./images/in-progress.png";
import search from "./images/search.png";
import PatientData from "./PatientData";

import ControlledPopup from "./PopupForm";
// import "reactjs-popup/dist/index.css";

const Content = () => {
  const [display, setDisplay] = useState(0);
  // const [edit, setEdit] = useState(false);

  const PatientTab = () => {
    setDisplay(0);
  };
  const CasesTab = () => {
    setDisplay(1);
  };
  const ReportTab = () => {
    setDisplay(2);
  };

  const isEditable = (e) => {
    // console.log(e.target.parentNode.parentNode);
    let selected = e.target.parentNode.parentNode;
    if (selected.contentEditable === "true") selected.contentEditable = "false";
    else selected.contentEditable = "true";

    // edit === false ? setEdit(true) : setEdit(false);
    // setEdit(!edit)
  };

  return (
    <>
      <div className="content">
        <div id="doc-scheduled">
          <img src={schedule} alt="schedule" className="btn-icons" />
          <div className="div-btn">
            <p className="btn-data">12</p>
            <p className="btn-title">Scheduled</p>
          </div>
        </div>
        <div id="doc-active">
          <img src={active} alt="active" className="btn-icons" />
          <div className="div-btn">
            <p className="btn-data">05</p>
            <p className="btn-title">Active</p>
          </div>
        </div>
        <div id="doc-in-progress">
          <img src={inprogress} alt="in-progress" className="btn-icons" />
          <div className="div-btn">
            <p className="btn-data">05</p>
            <p className="btn-title">In Progress</p>
          </div>
        </div>
        <div id="doc-closed">
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
              <button className="btn" onClick={ReportTab}>
                Reports
              </button>
            </div>
            <input type="text" id="searchbox" />
            <img src={search} alt="search" id="search-icon" onClick={()=>alert("Searching Btn working")} />
          </nav>

          <section>
            {display !== 0 ? (
              display === 1 ? (
                <div><table className="table">
                <thead>
                  <tr className="table-head">
                    <th>ID</th>
                    <th>Patient ID</th>
                    <th> Name</th>
                    <th>Status</th>
                    <th>Report</th>
                    
                    <th>Edit</th>
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
                        <td>55325</td>
                        <td>{Element.name}</td>
                        <td>{Element.status}</td>
                        <td>Download</td>
                        <td width="15%">
                          <button
                            className="edit"
                            onClick={isEditable}
                            contentEditable="false"
                            suppressContentEditableWarning={true}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table></div>
              ) : (
                <div>Reports will be display here</div>
              )
            ) : (
              <div>
              <table className="table">
                <thead>
                  <tr className="table-head">
                    <th>ID</th>
                    <th> Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Date/ Time</th>
                    <th>Edit</th>
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
                        <td width="15%">
                          <button
                            className="edit"
                            onClick={isEditable}
                            contentEditable="false"
                            suppressContentEditableWarning={true}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <ControlledPopup/>
           </div>
           )}
          </section>
          
         


          {/* <Popup closeOnDocumentClick onClose trigger={<button id="add-patient">
            <span>
              <img src={addicon} id="add-patient-icon" alt="+" />
              Add Patients
            </span>
          </button>}modal>
            
            <div id="background"><PopupForm/></div>
          </Popup> */}
          
        </div>
      </div>
    </>
  );
};

export default Content;
