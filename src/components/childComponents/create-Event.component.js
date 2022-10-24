import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react"

export default class AddChild extends Component {
  constructor(props) {
    super(props);

    this.onChangeCid = this.onChangeCid.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePno = this.onChangePno.bind(this);
    this.onChangeChildren = this.onChangeChildren.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Cid: "",
      Name: "",
      Age: "",
      Address: "",
      Pno: "",
      Childres: "",
      Event: [],
    };
  }

  //set the EventID
  onChangeCid(e) {
    this.setState({
      Cid: e.target.value,
    });
  }

  //set the EventName
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

    const Event = {
      Cid: this.state.Cid,
      Name: this.state.Name,
      Age: this.state.Age,
      Address: this.state.Address,
      Pno: this.state.Pno,
      Children: this.state.Children,
    };

    console.log(Event);

    //validation **************************************************************

    axios
      .post("http://localhost:5000/gardian/add", Event)
      .then((res) => console.log(res.data));

    swal({
      title: "Done!",
      text: "Event Successfully Added",
      icon: "success",
      button: "Okay!",
    }).then((value) => {
      window.location = "/gardian";
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
                    Add a Gardian
                  </font>{" "}
                </h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label> Gardian ID: </label>
                    <input
                      type="Number"
                      required
                      className="form-control"
                      placeholder="Enter an ID"
                      value={this.state.Cid}
                      onChange={this.onChangeCid}
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
