import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Home extends Component {
  render() {
    return (
        <div className="backImage">
            <div className="buttonPack">
                <Link to={"/gardian"}>
                        {" "}
                        <a className="btn"> Guardians </a>{" "}
                </Link>

                <Link to={"/child"}>
                    {" "}
                    <a className="btn"> Children </a>{" "}
                  </Link>
                
                <Link to={"/teacher"}>
                {" "}
                <a className="btn"> Teachers </a>{" "}
                </Link>
                
                <Link to={"/appointment"}>
                {" "}
                <a className="btn"> Appointment </a>{" "}
                </Link>

            </div>
        </div>
        // <p>hello</p>
    );
  }
}
