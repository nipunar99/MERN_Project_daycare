import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";

export default class CreateAppointment extends Component {
  constructor(props) {
    super(props);

    this.onChangeAid = this.onChangeAid.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeStartTime = this.onChangeStartTime.bind(this);
    this.onChangeEndTime = this.onChangeEndTime.bind(this);
    this.onChangePid = this.onChangePid.bind(this);
    this.onChangeCid = this.onChangeCid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Aid: "",
      Date: "",
      StartTime: "",
      EndTime: "",
      Pid: "",
      Cid: "",
      Appointment: [],
    };
  }

  //set the AppointmentID
  onChangeAid(e) {
    this.setState({
      Aid: e.target.value,
    });
  }

  //set the AppointmentDate
  onChangeDate(e) {
    this.setState({
      Date: e.target.value,
    });
  }

  //set Start Time
  onChangeStartTime(e) {
    this.setState({
      StartTime: e.target.value,
    });
  }

  //set End Time
  onChangeEndTime(e) {
    this.setState({
      EndTime: e.target.value,
    });
  }

  //Set Parent ID
  onChangePid(e) {
    this.setState({
      Pid: e.target.value,
    });
  }

  //set Child ID
  onChangeCid(e) {
    this.setState({
      Cid: e.target.value,
    });
  }

  //submit Function
  onSubmit(e) {
    e.preventDefault();

    const Appointment = {
      Aid: this.state.Aid,
      Date: this.state.Date,
      StartTime: this.state.StartTime,
      EndTime: this.stateEndTimes,
      Pid: this.state.Pid,
      Cid: this.state.Cid,
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
      <div>
        <div class="row">
          <div class="col-6">
            <br />
            <br />
            <img
              src="https://s3-eu-west-1.amazonaws.com/poptop-wp/blog/wp-content/uploads/2018/02/15113845/1st-shot-2.gif"
              width="90%"
              height="60% "
            />
          </div>{" "}
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
                      placeholder="Enter an ID"
                      value={this.state.Aid}
                      onChange={this.onChangeAid}
                    />
                  </div>
                  <div className="form-group">
                    <label> Date: </label>
                    <input
                      type="Date"
                      required
                      className="form-control"
                      placeholder="Enter Date"
                      value={this.state.Date}
                      onChange={this.onChangeDate}
                    />{" "}
                  </div>
                  <div className="form-group">
                    <label> Start Time : </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Start Time"
                      //maxlength = "10"
                      value={this.state.StartTime}
                      onChange={this.onChangeStartTime}
                    />
                  </div>
                  <div className="form-group">
                    <label> EndTime : </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter End Time"
                      //maxlength = "10"
                      value={this.state.EndTime}
                      onChange={this.onChangeEndTime}
                    />
                  </div>
                  <div className="form-group">
                    <label> Parent ID: </label>
                    <input
                      type="Number"
                      required
                      className="form-control"
                      placeholder="Enter Parent ID"
                      //maxlength = "10"
                      value={this.state.Pid}
                      onChange={this.onChangePid}
                    />
                  </div>
                  <div className="form-group">
                    <label> Child ID : </label>
                    <input
                      type="Number"
                      required
                      className="form-control"
                      placeholder="Enter Child ID"
                      value={this.Cid}
                      onChange={this.onChangeCid}
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
    )
  }
}
