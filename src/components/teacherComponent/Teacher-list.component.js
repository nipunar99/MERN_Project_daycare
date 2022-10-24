import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Teacher = (props) => (
  <tr>
    <td> {props.Teacher.Tid} </td> 
    <td> {props.Teacher.Name} </td>{" "}
    <td> {props.Teacher.Age} </td> 
    <td> {props.Teacher.Gender} </td>{" "}
    <td> {props.Teacher.Address} </td> 
    <td> {props.Teacher.Qualification} </td>{" "}
    <td> {props.Teacher.GroupNo} </td>
    <td>
      <Link to={"/teacher/update/" + props.Teacher._id}> Edit </Link> |{" "}
      <a
        href=" "
        onClick={() => {
          props.deleteTeacher(props.Teacher._id);
        }}
      >
        Delete
      </a>{" "}
    </td>{" "}
  </tr>
);

export default class TeacherList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Teacher: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/teacher")
      .then((response) => {
        this.setState({ Teacher: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPosts() {
    axios
      .get("http://localhost:5000/teacher")
      .then((response) => {
        this.setState({ Teacher: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteTeacher(id) {
    if (window.confirm("Are you sure?")) {
      axios.delete("http://localhost:5000/teacher/delete/" + id).then((response) => {
        console.log(response.data);
      });

      this.setState({
        Teacher: this.state.Teacher.filter((el) => el._id !== id),
      });
    }
  }

  TeacherList() {
    return this.state.Teacher.map((currentTeacher) => {
      return (
        <Teacher
          Teacher={currentTeacher}
          deleteTeacher={this.deleteTeacher}
          key={currentTeacher._id}
        />
      );
    });
  }

  //searchKey by Teacher Name
  filterData(Teacher, searchKey) {
    this.setState({
      Teacher: this.state.Teacher.filter((el) => (el.TeacherName = searchKey)),
    });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/teacher").then((response) => {
      const resultt = response.data;
      const result = resultt.filter((props) =>
        props.TeacherName.includes(searchKey)
      );

      this.setState({ Teacher: result });
    });
  };

  render() {
    return (
      <div className="container">
        <div style={{ float: "none" }}></div> <br />
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4> All Teachers </h4>{" "}
          </div>{" "}
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search by Teacher Name"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>{" "}
          </div>{" "}
        </div>
        <table class="table table-bordered table-white">
          <thead className="thead-light">
            <tr>
              <th> Teachers ID </th> <th> Teachers Name </th>{" "}
              <th> Age </th> {" "}
              <th> Gender </th> <th> Address </th>{" "}
              <th> Qualifications </th>
              <th> Actions </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {this.state.Teacher.map((props) => (
              <tr key={props.Tid}>
                <td> {props.Tid} </td>
                <td> {props.Name} </td>
                <td> {props.Age} </td>
                <td> {props.Gender} </td>
                <td> {props.Address} </td>
                <td> {props.Qualification} </td>
                <td>
                  <Link to={"/teacher/update/" + props._id}>
                    {" "}
                    <Button variant="warning btn-sm"> Edit </Button>{" "}
                  </Link>
                  <a
                    href=""
                    onClick={() => {
                      this.deleteTeacher(props._id);
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
          <Link to="/teacher/create">
            <button type="button" class="btn btn-success" variant="primary">
              New Teacher
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
