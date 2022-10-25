import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-success ">
            <a className="navbar-brand" href="#"><strong> K I D D O S</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className=" collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                
                <li className="nav-item">
                  <a className="nav-link" href="/"><b>Home </b></a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="/gardian"><b>Guardians </b></a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/child"><b>Children</b></a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/teacher"><b>Teachers</b></a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/appointment"><b>Appointment</b></a>
                </li>
                
              </ul>
            </div>
          </nav>
    );
  }
}
