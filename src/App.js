import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";

// Import files of gardian
import EditEvent from "./components/edit-Event.component";
import CreateEvent from "./components/create-Event.component";
import EventList from "./components/Event-list.component";
import Report from "./components/Report";


//Import appoinment 
import AppointmentList from "./components/appointment-list.component";
import EditAppointment from "./components/edit-appointment.component";
import CreateAppointment from "./components/create-appointment.component";


// Import files of Child

import EditChild from "./components/childComponents/editChild.component";
import AddChild from "./components/childComponents/addChild.component";
import ListChild from "./components/childComponents/listChild.component";

// Import files for Teacher
import EditTeacher from "./components/teacherComponent/edit-Teacher.component";
import CreateTeacher from "./components/teacherComponent/create-Teacher.component";
import TeacherList from "./components/teacherComponent/Teacher-list.component";

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
        <Route path="/child" component={ListChild}/>
        <Route path="/child/update/:id" component={EditChild}/>
        <Route path="/child/create" component={AddChild}/>

        {/*Routes for Teachers */}
        <Route path="/teacher" component={TeacherList}/>;
        <Route path="/teacher/update/:id" component={EditTeacher}/>;
        <Route path="/teacher/create" component={CreateTeacher}/>;


        {/*Routes for Applications */}
        <Route path="/appointment" component={AppointmentList} />
        <Route path="/appointment/edit/:id" component={EditAppointment} />
        <Route path="/appointment/create" component={CreateAppointment} />



      </div>{" "}
    </Router>
  );
}

export default App;
