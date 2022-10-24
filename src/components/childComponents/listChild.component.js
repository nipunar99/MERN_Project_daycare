import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Child = (props) => (
  <tr>
    <td> {props.Child.Cid} </td> <td> {props.Child.Name} </td>{" "}
    <td> {props.Child.Age} </td> <td> {props.Child.Gender} </td>{" "}
    <td> {props.Child.Address} </td> <td> {props.Child.SpecialNotes} </td>{" "}
    <td>
      <Link to={"/child/update/" + props.Child._id}> Edit </Link> |{" "}
      <a
        href=" "
        onClick={() => {
          props.deleteChild(props.Child._id);
        }}
      >
        Delete
      </a>{" "}
    </td>{" "}
  </tr>
);

export default class ChildList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Child: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/child")
      .then((response) => {
        this.setState({ Child: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPosts() {
    axios
      .get("http://localhost:5000/child")
      .then((response) => {
        this.setState({ Child: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteChild(id) {
    if (window.confirm("Are you sure?")) {
      axios.delete("http://localhost:5000/child/delete/" + id).then((response) => {
        console.log(response.data);
      });

      this.setState({
        Child: this.state.Child.filter((el) => el._id !== id),
      });
    }
  }

  ChildList() {
    return this.state.Child.map((currentChild) => {
      return (
        <Child
          Child={currentChild}
          deleteChild={this.deleteChild}
          key={currentChild._id}
        />
      );
    });
  }

  //searchKey by Child Name
  filterData(Child, searchKey) {
    this.setState({
      Child: this.state.Child.filter((el) => (el.ChildName = searchKey)),
    });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/child").then((response) => {
      const resultt = response.data;
      const result = resultt.filter((props) =>
        props.ChildName.includes(searchKey)
      );

      this.setState({ Child: result });
    });
  };

  render() {
    return (
      <div className="container">
        <div style={{ float: "none" }}></div> <br />
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4> All Children </h4>{" "}
          </div>{" "}
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search by Child Name"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>{" "}
          </div>{" "}
        </div>
        <table class="table table-bordered table-white">
          <thead className="thead-light">
            <tr>
              <th> Child ID </th> <th> Child Name </th>{" "}
              <th> Age </th> {" "}
              <th> Gender </th> <th> Address </th>{" "}
              <th> Special Notes </th>
              <th> Actions </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {this.state.Child.map((props) => (
              <tr key={props.Cid}>
                <td> {props.Cid} </td>
                <td> {props.Name} </td>
                <td> {props.Age} </td>
                <td> {props.Gender} </td>
                <td> {props.Address} </td>
                <td> {props.SpecialNotes} </td>
                <td>
                  <Link to={"/child/update/" + props._id}>
                    {" "}
                    <Button variant="warning btn-sm"> Edit </Button>{" "}
                  </Link>
                  <a
                    href=""
                    onClick={() => {
                      this.deleteChild(props._id);
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
          <Link to="/child/create">
            <button type="button" class="btn btn-success" variant="primary">
              New Child
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
