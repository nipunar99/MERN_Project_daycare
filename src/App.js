import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";

// Import files of gardian

import EditEvent from "./components/edit-Event.component";
import CreateEvent from "./components/create-Event.component";
import EventList from "./components/Event-list.component";
import Report from "./components/Report";

// Importing child components

import EditChild from "./components/childComponents/edit-Event.component";
import CreateChild from "./components/childComponents/create-Event.component";
import Childlist from "./components/childComponents/Event-list.component";


import AppointmentList from "./components/appointment-list.component";
import EditAppointment from "./components/edit-appointment.component";
import CreateAppointment from "./components/create-appointment.component";





function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />

        {/*Routes for gardian */}
        <Route path="/gardian" component={EventList} />
        <Route path="/gardian/edit/:id" component={EditEvent} />
        <Route path="/gardian/create" component={CreateEvent} />
        <Route path="/gardian/Report" component={Report} />

        {/*Routes for Children */}
        <Route path="/child" component={CreateChild} />
        <Route path="/child/edit/:id" component={EditChild} />
        <Route path="/child/create" component={Childlist} />

        {/*Routes for Teachers */}

        {/*Routes for Applications */}
        <Route path="/appointment" component={AppointmentList} />
        <Route path="/appointment/edit/:id" component={EditAppointment} />
        <Route path="/appointment/create" component={CreateAppointment} />



      </div>{" "}
    </Router>
  );
}

export default App;
