import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Appointment = (props) => (
  <tr>
    <td> {props.Appointment.Aid} </td> <td> {props.Appointment.Date} </td>{" "}
    <td> {props.Appointment.StartTime} </td> <td> {props.Appointment.EndTime} </td>{" "}
    <td> {props.Appointment.Pid} </td> <td> {props.Appointment.Cid} </td>{" "}
    <td>
      <Link to={"/appointment/edit/" + props.Appointment._id}> Edit </Link> |{" "}
      <a
        href=" "
        onClick={() => {
          // console.log("methana hutta");
          props.deleteAppointment(props.Appointment._id);
        }}
      >
        Delete
      </a>{" "}
    </td>{" "}
  </tr>
);

export default class AppointmentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Appointment: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/appointment")
      .then((response) => {
        this.setState({ Appointment: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPosts() {
    axios
      .get("http://localhost:5000/appointment")
      .then((response) => {
        this.setState({ Appointment: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteAppointment(id) {
    if (window.confirm("Are you sure?")) {     
      axios.delete("http://localhost:5000/appointment/delelte/"+id).then((response) => {
        console.log("DEleted "+response.data)
        console.log(response.data);
      });
   
      this.setState({
        Appointment: this.state.Appointment.filter((el) => el._id !== id),
      });
    }
  }

  AppointmentList() {
    return this.state.Appointment.map((currentAppointment) => {
      return (
        <Appointment
          Appointment={currentAppointment}
          deleteAppointment={this.deleteAppointment}
          key={currentAppointment._id}
        />
      );
    });
  }

  //searchKey by Appointment Name
  filterData(Appointment, searchKey) {
    this.setState({
      Appointment: this.state.Appointment.filter((el) => (el.AppointmentName = searchKey)),
    });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/appointment").then((response) => {
      const resultt = response.data;
      const result = resultt.filter((props) =>
        props.AppointmentName.includes(searchKey)
      );

      this.setState({ Appointment: result });
    });
  };

  render() {
    return (
      <div className="container">
        <div style={{ float: "none" }}></div> <br />
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4> All Appointments </h4>{" "}
          </div>{" "}
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search by app Name"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>{" "}
          </div>{" "}
        </div>
        <table class="table table-bordered table-white">
          <thead className="thead-light">
            <tr>
              <th> Appointment ID </th> <th> Appointment Date </th>{" "}
              <th> Start Time </th> {" "}
              <th> End Time </th> <th> Parent Id </th>{" "}
              <th> Child Id </th>
              <th> Actions </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {this.state.Appointment.map((props) => (
              <tr key={props.Aid}>
                <td> {props.Aid} </td>
                <td> {props.Date} </td>
                <td> {props.StartTime} </td>
                <td> {props.EndTime} </td>
                <td> {props.Pid} </td>
                <td> {props.Cid} </td>
                <td>
                  <Link to={"/appointment/edit/" + props._id}>
                    {" "}
                    <Button variant="warning btn-sm"> Edit </Button>{" "}
                  </Link>
                  <a
                    href=""
                    onClick={() => {
                      console.log("wadaa"+props._id)
                      this.deleteAppointment(props._id);
                    }}
                  >
                    {" "}
                    <Button variant="danger btn-sm"> Delete </Button>{" "}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>{" "}
        </table>
        <div style={{ float: "right" }}>
          <Link to="/appointment/create">
            <button type="button" class="btn btn-success" variant="primary">
              New Appointment
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
