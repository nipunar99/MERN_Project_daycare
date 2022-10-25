import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";

export default class CreateAppointment extends Component {
  constructor(props) {
    super(props);

    this.onChangeAid = this.onChangeAid.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePno = this.onChangePno.bind(this);
    this.onChangeChildren = this.onChangeChildren.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Aid: "",
      Name: "",
      Age: "",
      Address: "",
      Pno: "",
      Children: "",
      Appointment: [],
    };
  }

  //set the AppointmentID
  onChangeAid(e) {
    this.setState({
      Aid: e.target.value,
    });
  }

  //set the AppointmentName
  onChangeName(e) {
    this.setState({
      Name: e.target.value,
    });
  }

  //set Category
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value,
    });
  }

  //set Content
  onChangePno(e) {
    this.setState({
      Pno: e.target.value,
    });
  }

  //Set Packages
  onChangeChildren(e) {
    this.setState({
      Children: e.target.value,
    });
  }

  //set Age
  onChangeAge(e) {
    this.setState({
      Age: e.target.value,
    });
  }

  //submit Function
  onSubmit(e) {
    e.preventDefault();

    const Appointment = {
      Aid: this.state.Aid,
      Name: this.state.Name,
      Age: this.state.Age,
      Address: this.state.Address,
      Pno: this.state.Pno,
      Children: this.state.Children,
    };

    console.log(Appointment);

    //validation **************************************************************

    axios
      .post("http://localhost:5000/appointment/add", Appointment)
      .then((res) => console.log(res.data));

    swal({
      title: "Done!",
      text: "Appointment Successfully Added",
      icon: "success",
      button: "Okay!",
    }).then((value) => {
      window.location = "/appointment";
    });
  }

  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-6">
            <div class="myformstyle2">
              <div className="card-body">
                <div className="col-md-8 mt-4 mx-auto"> </div>
                <h3 className="text-center">
                  <font face="Comic sans MS" size="6">
                    Add a Appointment
                  </font>{" "}
                </h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label> Appointment ID: </label>
                    <input
                      type="Number"
                      required
                      className="form-control"
                      placeholder="Enter Appointment ID"
                      value={this.state.Aid}
                      onChange={this.onChangeAid}
                    />
                  </div>
                  <div className="form-group">
                    <label> Date: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Date"
                      value={this.state.Name}
                      onChange={this.onChangeName}
                    />{" "}
                  </div>
                  <div className="form-group">
                    <label>  Address: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Address"
                      //maxlength = "10"
                      value={this.state.Age}
                      onChange={this.onChangeAge}
                    />
                  </div>
                  <div className="form-group">
                    <label> Arrived time: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Arrived time"
                      //maxlength = "10"
                      value={this.state.Address}
                      onChange={this.onChangeAddress}
                    />
                  </div>
                  <div className="form-group">
                    <label> Depature Time: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Depature time"
                      //maxlength = "10"
                      value={this.state.Pno}
                      onChange={this.onChangePno}
                    />
                  </div>
                  <div className="form-group">
                    <label> Children Name: </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Children Names"
                      value={this.Children}
                      onChange={this.onChangeChildren}
                    />{" "}
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Create"
                      className="btn btn-primary"
                    />
                  </div>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <br /> <br />
      </div>
    );
  }
}
