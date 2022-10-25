import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Appointment = (props) => (
  <tr>
    <td> {props.Appointment.Aid} </td> <td> {props.Appointment.Name} </td>{" "}
    <td> {props.Appointment.Age} </td> <td> {props.Appointment.Address} </td>{" "}
    <td> {props.Appointment.Pno} </td> <td> {props.Appointment.Children} </td>{" "}
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
    console.log("Aawaaaaaaaaa")
    if (window.confirm("Are you sure?")) {
     
      axios.delete("http://localhost:5000/appointment/delelte/"+id).then((response) => {
        console.log("DEleted "+response.data)
        console.log(response.data);
      });
   
      this.setState({
        Appointment: this.state.Appointment.filter((el) => el._id !== id),
      });
      alert("Aawaaaaaaaaa mekeeee")
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
              <th> Appointment ID </th> <th> Appointment Name </th>{" "}
              <th> Age </th> {" "}
              <th> Address </th> <th> Phone No </th>{" "}
              <th> Child Names </th>
              <th> Actions </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {this.state.Appointment.map((props) => (
              <tr key={props.Aid}>
                <td> {props.Aid} </td>
                <td> {props.Name} </td>
                <td> {props.Age} </td>
                <td> {props.Address} </td>
                <td> {props.Pno} </td>
                <td> {props.Children} </td>
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
