import React, { useState } from "react";
import schedule from "./schedule.png";
import active from "./active.png";
import closed from "./closed.png";
import inprogress from "./in-progress.png";
import search from "./search.png";
import addPatient from "./add-patient.png";
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
  const DevicesTab = () => {
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

        <div className="add-patients">
          <img src={addPatient} alt="add-patients" className="btn-icons" />
          <div className="div-btn">
            <p className="btn-data">Add</p>
            <p className="btn-title">Patients</p>
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
            <img src={search} alt="search" id="search-icon" onClick={()=>alert("Searching Btn working")} />
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
            )}
          </section>
          
          <ControlledPopup/>


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
