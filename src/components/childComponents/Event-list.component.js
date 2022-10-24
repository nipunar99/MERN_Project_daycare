import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Event = (props) => (
  <tr>
    <td> {props.Event.Gid} </td> <td> {props.Event.Name} </td>{" "}
    <td> {props.Event.Age} </td> <td> {props.Event.Address} </td>{" "}
    <td> {props.Event.Pno} </td> <td> {props.Event.Children} </td>{" "}
    <td>
      <Link to={"/gardian/edit/" + props.Event._id}> Edit </Link> |{" "}
      <a
        href=" "
        onClick={() => {
          props.deleteEvent(props.Event._id);
        }}
      >
        Delete
      </a>{" "}
    </td>{" "}
  </tr>
);

export default class EventList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Event: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/gardian")
      .then((response) => {
        this.setState({ Event: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPosts() {
    axios
      .get("http://localhost:5000/gardian")
      .then((response) => {
        this.setState({ Event: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteEvent(id) {
    if (window.confirm("Are you sure?")) {
      axios.delete("http://localhost:5000/gardian/delelte/" + id).then((response) => {
        console.log(response.data);
      });

      this.setState({
        Event: this.state.Event.filter((el) => el._id !== id),
      });
    }
  }

  EventList() {
    return this.state.Event.map((currentEvent) => {
      return (
        <Event
          Event={currentEvent}
          deleteEvent={this.deleteEvent}
          key={currentEvent._id}
        />
      );
    });
  }

  //searchKey by Event Name
  filterData(Event, searchKey) {
    this.setState({
      Event: this.state.Event.filter((el) => (el.EventName = searchKey)),
    });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/gardian").then((response) => {
      const resultt = response.data;
      const result = resultt.filter((props) =>
        props.EventName.includes(searchKey)
      );

      this.setState({ Event: result });
    });
  };

  render() {
    return (
      <div className="container">
        <div style={{ float: "none" }}></div> <br />
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4> All Gardians </h4>{" "}
          </div>{" "}
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search by Gardian Name"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>{" "}
          </div>{" "}
        </div>
        <table class="table table-bordered table-white">
          <thead className="thead-light">
            <tr>
              <th> Gardian ID </th> <th> Gardian Name </th>{" "}
              <th> Age </th> {" "}
              <th> Address </th> <th> Phone No </th>{" "}
              <th> Child Names </th>
              <th> Actions </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {this.state.Event.map((props) => (
              <tr key={props.Gid}>
                <td> {props.Gid} </td>
                <td> {props.Name} </td>
                <td> {props.Age} </td>
                <td> {props.Address} </td>
                <td> {props.Pno} </td>
                <td> {props.Children} </td>
                <td>
                  <Link to={"/gardian/edit/" + props._id}>
                    {" "}
                    <Button variant="warning btn-sm"> Edit </Button>{" "}
                  </Link>
                  <a
                    href=""
                    onClick={() => {
                      this.deleteEvent(props._id);
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
          <Link to="/gardian/create">
            <button type="button" class="btn btn-success" variant="primary">
              New Event
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
