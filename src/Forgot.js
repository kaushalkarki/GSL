import React, { useState } from "react";
import "./forgot.css";
import logo from "./images/logo.png";
// import { NavLink } from "react-router-dom";

function Forgot() {
  let [email, setEmail] = useState("");


 // const LoginTest = async () => {
//     const response = await fetch(
//       "https://gsl-django1.herokuapp.com/users/login/",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//           login_as: drop,
//           password: password,
//         }),
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//   };
  function onSubmit(e) {
    console.log(email );
    e.preventDefault();
    alert("Password Reset Link is sent to your email address")
    // LoginTest();
  }

  return (
    <div>
      <div className="form-container">
      <div className="imagebox">
          <img className="image" alt="background" src={logo} />
        </div>

        <div id="login-box">
          <form onSubmit={onSubmit}>
            <div>
              <h1 id="reset-text">Password Reset</h1>
              <h2 id="reset-note">Enter your email address and we will send you reset link</h2>
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                id="email-txt"
              />
             

              
              <button type="submit" id="reset-button">
                
                  Reset
              </button>
              

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgot;

