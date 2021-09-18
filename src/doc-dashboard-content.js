import React, { useState } from "react";
import schedule from "./schedule.png";
import active from "./active.png";
import closed from "./closed.png";
import inprogress from "./in-progress.png";
import addPatient from "./add-patient.png";
import PatientData from "./PatientData";

const Content = () => {
  const [display, setDisplay] = useState(0);
  const [edit, setEdit] = useState(false);

  const PatientTab = () => {
    setDisplay(0);
  };
  const CasesTab = () => {
    setDisplay(1);
  };
  const DevicesTab = () => {
    setDisplay(2);
  };

  const isEditable = () => {
    edit === false ? setEdit(true) : setEdit(false);
  };

  return (
    <>
      <div className="content">
        <div className="scheduled">
          <img src={schedule} alt="schedule" className="btn-icons" />
          <div className="div-btn">
            <text className="btn-data">12</text>
            <text className="btn-title">Scheduled</text>
          </div>
        </div>
        <div className="active">
          <img src={active} alt="active" className="btn-icons" />
          <div className="div-btn">
            <text className="btn-data">05</text>
            <text className="btn-title">Active</text>
          </div>
        </div>
        <div className="in-progress">
          <img src={inprogress} alt="in-progress" className="btn-icons" />
          <div className="div-btn">
            <text className="btn-data">05</text>
            <text className="btn-title">In Progress</text>
          </div>
        </div>
        <div className="closed">
          <img src={closed} alt="closed" className="btn-icons" />
          <div className="div-btn">
            <text className="btn-data">129</text>

            <text className="btn-title">Closed</text>
          </div>
        </div>

        <div className="add-patients">
          <img src={addPatient} alt="add-patients" className="btn-icons" />
          <div className="div-btn">
            <text className="btn-data">Add</text>
            <text className="btn-title">Patients</text>
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
                  <tr classname="table-head">
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
                      <>
                        <tr
                          key={Element.id}
                          contentEditable={edit === true ? "true" : "false"}
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
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      </>
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
