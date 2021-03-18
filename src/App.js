import React from "react";
import "./Global";
//import Nav from "./Nav";
import Footer from "./Footer";

import Allhospitals from "./Allhospitals";
//import Splash from "./Splash";
import pagination from './pagination'
import ForgetPassword from './ForgetPassword'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardNew from './Components/Dashboard';
import AllDoctors from './Components/Alldoctors';
import AllHospitals from './Components/Allhospitals';
import AllPatients from './Components/Allpatients';
import TransactionNew from './Components/Transaction';
import AddHospitals from './Components/AddHospital';
import Contacts from './Components/Contact';
import Hospital from './Components/HospitalDetail'
import Logins from './Components/Login'
import Footers from './Components/Footer'
import Splash from './Components/Splash'

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

          {/* <Route path="/" exact component={Splash} /> */}
          <Route path="/" exact component={Splash} />
          <Route path="/Dashboard" component={DashboardNew} />
          <Route path="/Alldoctors" component={AllDoctors} />
          <Route path="/Allhospitals" component={AllHospitals} />
          <Route path="/Contact" component={Contacts} />
          <Route path="/Login" component={Logins} />
          <Route path="/Addhospital" component={AddHospitals} />
          <Route path="/Allpatients" component={AllPatients} />
          <Route path="/Splash" component={Splash} />
          <Route path="/Myhospital/:id" component={Hospital} />
          <Route path="/Transaction" component={TransactionNew} />
          <Route path="/pagination" component={pagination} />
          <Route path="/ForgetPassword" component={ForgetPassword} />
        </Switch>
      </div>
      <Footers />
    </Router>
  );
}

export default App;
