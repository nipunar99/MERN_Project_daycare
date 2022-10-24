import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";

// Import files of gardian

import EditEvent from "./components/edit-Event.component";
import CreateEvent from "./components/create-Event.component";
import EventList from "./components/Event-list.component";
import Report from "./components/Report";


// Import files of Child

import EditChild from "./components/childComponents/editChild.component";
import AddChild from "./components/childComponents/addChild.component";
import ListChild from "./components/childComponents/listChild.component";


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

        {/*Routes for Applications */}


      </div>{" "}
    </Router>
  );
}

export default App;
