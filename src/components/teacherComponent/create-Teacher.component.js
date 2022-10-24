import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react"

export default class AddTeacher extends Component {
  constructor(props) {
    super(props);

    this.onChangeTid = this.onChangeTid.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeQualification = this.onChangeQualification.bind(this);
    this.onChangeGroupNo = this.onChangeGroupNo.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Tid: "",
      Name: "",
      Age: "",
      Gender: "",
      Address: "",
      Qualification: "",
      GroupNo: "",
      Teacher: [],
    };
  }

  //set Teacher ID
  onChangeTid(e) {
    this.setState({
      Tid: e.target.value,
    });
  }

  //set teachers name
  onChangeName(e) {
    this.setState({
      Name: e.target.value,
    });
  }

  //set Age
  onChangeAge(e) {
    this.setState({
      Age: e.target.value,
    });
  }

  //set Gender
  onChangeGender(e) {
    this.setState({
      Gender: e.target.value,
    });
  }
  //set Category
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value,
    });
  }

  //Set Qualifications
  onChangeQualification(e) {
    this.setState({
      Qualification: e.target.value,
    });
  }

    //Set Group number
  onChangeGroupNo(e) {
    this.setState({
      GroupNo: e.target.value,
    });
  }



  //submit Function
  onSubmit(e) {
    e.preventDefault();

    const Teacher = {
      Tid: this.state.Tid,
      Name: this.state.Name,
      Age: this.state.Age,
      Gender: this.state.Gender,
      Address: this.state.Address,
      Qualification: this.state.Qualification,
      GroupNo: this.state.GroupNo,
    };

    console.log(Teacher);

    //validation **************************************************************

    axios
      .post("http://localhost:5000/teacher/add", Teacher)
      .then((res) => console.log(res.data));

    swal({
      title: "Done!",
      text: "Teacher Successfully Added",
      icon: "success",
      button: "Okay!",
    }).then((value) => {
      window.location = "/teacher";
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
                    Add a Teacher
                  </font>{" "}
                </h3>
                <form onSubmit={this.onSubmit}>

                  <div className="form-group">
                    <label> Teacher ID: </label>
                    <input
                      type="Number"
                      required
                      className="form-control"
                      placeholder="Enter an ID"
                      value={this.state.Tid}
                      onChange={this.onChangeTid}
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
                      type="Number"
                      required
                      className="form-control"
                      placeholder="Enter age"
                      //maxlength = "10"
                      value={this.state.Age}
                      onChange={this.onChangeAge}
                    />
                  </div>
                  

                  <div className="form-group">
                    <label> Gender: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Gender"
                      value={this.state.Gender}
                      onChange={this.onChangeGender}
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
                    <label> Qualifications : </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Qualifications"
                      value={this.Qualification}
                      onChange={this.onChangeQualification}
                    />{" "}
                  </div>
                  
                  <div className="form-group">
                    <label> Group No : </label>
                    <input
                      type="Number"
                      className="form-control"
                      placeholder="Enter Qualifications"
                      value={this.Qualification}
                      onChange={this.onChangeGroupNo}
                    />{" "}
                  </div>                  


                  <div className="form-group">
                    <input
                      type="submit"
                      value="Add"
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
