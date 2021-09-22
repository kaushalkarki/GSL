import React, { useState } from "react";
import Popup from "reactjs-popup";
import addicon from "./addicon.png";
import exit from "./close.png";
import "./PopUp.css";

const ControlledPopup = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button id="add-patient" onClick={() => setOpen((o) => !o)}>
        <span>
          <img src={addicon} id="add-patient-icon" alt="+" />
          Add Patients
        </span>
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <div id ="background">
            <div id="popup-container" draggable="true">
              <div id="popup-title">
                <h1 id="title-text">Add / Edit patient</h1>
                <img src={exit} alt="X" id="closebtn" onClick={closeModal} />
              </div>
              <section id="popup-details">
                <div className="details-div">
                  <p> Full Name</p>{" "}
                  <input
                    type="text"
                    className="field"
                    id="fullname"
                    placeholder="Full Name"
                  />
                </div>
                <div className="details-div">
                  <p> Dob </p>
                  <input type="date" id="birth" placeholder="MM/DD/YYYY" />
                </div>

                <div className="details-div">
                  <p> Gender </p>
                  <div id="gender-m">
                    <input type="radio" name="gender" value="male" />
                    Male
                  </div>
                  <div id="gender-f">
                    <input type="radio" name="gender" value="Female" />
                    Female
                  </div>
                </div>
                <div className="details-div">
                  <p> Address </p>
                  <input
                    type="text"
                    className="field"
                    id="address"
                    placeholder="Address"
                  />
                </div>
                <div className="details-div">
                  <p> Height </p>
                  <input
                    type="text"
                    className="field"
                    id="height"
                    placeholder="Height"
                  />
                </div>
                <div className="details-div">
                  <p>Weight </p>
                  <input
                    type="text"
                    className="field"
                    id="weight"
                    placeholder="Weight"
                  />
                </div>
                <div className="details-div">
                  <p> Email </p>
                  <input
                    type="text"
                    className="field"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="details-div">
                  <p>Contact Number </p>
                  <input
                    type="text"
                    className="field"
                    id="number"
                    placeholder="Contact Number"
                  />
                </div>
                <div className="details-div">
                  <p> Existing Conditions </p>{" "}
                  <input
                    type="text"
                    className="field"
                    id="conditions"
                    placeholder="Type"
                  />
                </div>
                <input
                  type="button"
                  value="Cancel"
                  id="cancel-btn"
                  onClick={closeModal}
                />
                <input type="button" value="Save" id="save-btn" onClick={()=>alert("Save Btn is Working")} />
              </section>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};
export default ControlledPopup;
// import React from "react";
// import "./PopUp.css";
// import close from "./close.png";

// const PopupForm = () => {
//   return (
//     <>
//       <div id="popup-container" draggable="true">
//         <div id="popup-title">
//           <h1 id="title-text">Add / Edit patient</h1>
//           <img src={close} alt="X" id ="closebtn" />
//         </div>
//         <section id="popup-details">
//           <div className="details-div">
//             <p> Full Name</p>{" "}
//             <input
//               type="text"
//               className="field"
//               id="fullname"
//               placeholder="Full Name"
//             />
//           </div>
//           <div className="details-div">
//             <p> Dob </p>
//             <input type="date" id="birth" placeholder="MM/DD/YYYY" />
//           </div>

//           <div className="details-div">
//             <p> Gender </p>
//             <div id="gender-m">
//               <input type="radio" name="gender" value="male" />
//               Male
//             </div>
//             <div id="gender-f">
//               <input type="radio" name="gender" value="Female" />
//               Female
//             </div>
//           </div>
//           <div className="details-div">
//             <p> Address </p>
//             <input
//               type="text"
//               className="field"
//               id="address"
//               placeholder="Address"
//             />
//           </div>
//           <div className="details-div">
//             <p> Height </p>
//             <input
//               type="text"
//               className="field"
//               id="height"
//               placeholder="Height"
//             />
//           </div>
//           <div className="details-div">
//             <p>Weight </p>
//             <input
//               type="text"
//               className="field"
//               id="weight"
//               placeholder="Weight"
//             />
//           </div>
//           <div className="details-div">
//             <p> Email </p>
//             <input
//               type="text"
//               className="field"
//               id="email"
//               placeholder="Email"
//             />
//           </div>
//           <div className="details-div">
//             <p>Contact Number </p>
//             <input
//               type="text"
//               className="field"
//               id="number"
//               placeholder="Contact Number"
//             />
//           </div>
//           <div className="details-div">
//             <p> Existing Conditions </p>{" "}
//             <input
//               type="text"
//               className="field"
//               id="conditions"
//               placeholder="Type"
//             />
//           </div>
//           <input type="button" value="Cancel" id="cancel-btn" />
//           <input type="button" value="Save" id="save-btn" />
//         </section>
//       </div>
//     </>
//   );
// };
// export default PopupForm;
