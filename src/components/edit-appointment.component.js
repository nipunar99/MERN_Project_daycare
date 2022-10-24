import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default class EditAppointment extends Component {
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
      Childres: "",
      Appointment: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/appointment/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          Aid: response.data.Aid,
          Name: response.data.Name,
          Age: response.data.Age,
          Address: response.data.Address,
          Pno: response.data.Pno,
          Children: response.data.Children,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/appointment")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            Appointment: response.data.map((Appointment) => Appointment.CompanyName),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
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

  //set age
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

    axios
      .post(
        "http://localhost:5000/appointment/update/" + this.props.match.params.id,
        Appointment
      )
      .then((res) => console.log(res.data));
    alert("Edit Successfully");
    window.location = "/appointment";
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-6">
            <br /> <br /> <br /> <br /> <br /> <br />
            <img
              src="https://www.zestinfotech.in/wp-content/uploads/2020/07/acf1fs403asa627af854f143dfsc7f65f3efd7ddcf53ae.gif"
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
                    Edit Appointment Details
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
                      <label> Name: </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter Name"
                        value={this.state.Name}
                        onChange={this.onChangeName}
                      />{" "}
                    </div>
                    <div className="form-group">
                    <label> Age : </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter age"
                      //maxlength = "10"
                      value={this.state.Age}
                      onChange={this.onChangeAge}
                    />
                  </div>
                  <div className="form-group">
                    <label> Address : </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Address"
                      //maxlength = "10"
                      value={this.state.Address}
                      onChange={this.onChangeAddress}
                    />
                  </div>
                  <div className="form-group">
                    <label> Phone Number: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Phone number"
                      //maxlength = "10"
                      value={this.state.Pno}
                      onChange={this.onChangePno}
                    />
                  </div>
                  <div className="form-group">
                    <label> Children Names : </label>
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
