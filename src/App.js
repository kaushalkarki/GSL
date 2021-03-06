import React from "react";
import Ddash from "./Ddash";
import Pdash from "./Pdash";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Forgot from "./Forgot";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Forgot-Password" component={Forgot} />
        <Route path="/Doctor-Dashboard" component={Ddash} />
        <Route path="/Pathology-Dashboard" component={Pdash} />
        
      </Switch>

      {/* <Login/>
      <Ddash/> 
     */}
    </>
  );
};

export default App;
