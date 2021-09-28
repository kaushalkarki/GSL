import React, { useState } from "react";
import logo from "./images/logo.png";
import brand from "./images/brand1.png";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  let [email, setEmail] = useState("");
  let [drop, setDrop] = useState("");
  let [password, setPassword] = useState("");

  const LoginTest = async () => {
    const response = await fetch(
      "https://gsl-django1.herokuapp.com/users/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          login_as: drop,
          password: password,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  };
  function onSubmit(e) {
    console.log(email + " " + drop + " " + password);
    e.preventDefault();
    LoginTest();
  }

  return (
    <div>
      <div className="form-container">
        <div className="imagebox">
          <img className="image" alt="background" src={logo} />
        </div>

        <div className=" login-box">
          <form onSubmit={onSubmit}>
            <div>
              <h1 id="welcome-text">Welcome</h1>
              <img src={brand} className="Logo-Brand" alt="Logo Brand" />
              <input
                type="text"
                required
                placeholder="User Name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-text"
              />
              <select
                className="dropdown"
                required
                onChange={(e) => setDrop(e.target.value)}
              >
                <option disabled selected value="">
                  --Select Type--
                </option>
                <option value="Doctor"> Doctor</option>
                <option value="Pathologist"> Pathologist</option>
                <option value="Patient"> Patient</option>
              </select>
              <input
                id="pswrd"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input-pas"
              />
              <small className="small-text">
                <a href="/newUser">New User?</a>
              </small>
              <small className="small-text">
                <a href="/forgot">Forgot Password?</a>
              </small>

              <NavLink
                  to={
                    drop === "Doctor"
                      ? "/Doctor-Dashboard"
                      : "/Pathology-Dashboard"
                  }
                >
              <button type="submit" className="Login-button">
                
                  LOG IN
              </button>
              </NavLink>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

// function Login() {
//   let [user, setName] = useState("");
//   let [drop, setDrop] = useState("");
//   let [password, setPassword] = useState("");

//   function onSubmit(e) {
//     console.log(user + " " + drop + " " + password);
//     e.preventDefault();
//   }
//   /*let toggle=()=>{
//         var pswrd = document.getElementById('pswrd');
//         var icon = document.querySelector('.fas');
//         if (pswrd.type === "password") {
//             pswrd.type = "text";
//             pswrd.style.marginTop = "20px";
//             icon.style.color = "#7f2092";
//         }
//         else{
//             pswrd.type = "password";
//             icon.style.color = "grey";
//         }
//     }*/
//   return (
//     <div>
//       <div className="row">
//         <div className="col-md-6">
//           <img className="image" alt="background" src={logo} />
//         </div>
//         <div className="col-md-6 Alignment">
//           <div className="d-flex login-box">
//             <form onSubmit={onSubmit}>
//               <div className="form-div">
//                 <h1 className="welcome">Welcome</h1>
//                 <img src={brand} className="Logo-Brand" alt="Logo Brand" />
//                 <input
//                   type="text"
//                   required
//                   placeholder="User Name"
//                   value={user}
//                   onChange={(e) => setName(e.target.value)}
//                   className="input-text"
//                 />
//                 <select
//                   className="dropdown"
//                   required
//                   onChange={(e) => setDrop(e.target.value)}
//                 >
//                   <option disabled selected value="">
//                     --Select Type--
//                   </option>
//                   <option value="Doctor"> Doctor</option>
//                   <option value="Pathologist"> Pathologist</option>
//                   <option value="Patient"> Patient</option>
//                 </select>
//                 <input
//                   id="pswrd"
//                   required
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Password"
//                   className="input-pas"
//                 />
//                 {/* <span>
//                                     <i class="fa fa-eye" aria-hidden="true" id="eye" onclick="toggle()"></i>
//                                 </span> */}
//                 <small className="new-user">
//                   <a href="/newUser">New User?</a>
//                 </small>
//                 <small className="forgot">
//                   <a href="/forgot">Forgot Password?</a>
//                 </small>
//                 {/* <br></br> */}
//                 <NavLink to="/Doctor-Dashboard">
//                   <button type="submit" className="Login-button">
//                     LOG IN
//                   </button>
//                 </NavLink>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
