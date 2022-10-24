import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default class EditTeacher extends Component {
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
      Event: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/gardian/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          Tid: response.data.Tid,
          Name: response.data.Name,
          Age: response.data.Age,
          Gender: response.data.Gender,
          Address: response.data.Address,
          Qualification: response.data.Qualification,
          GroupNo: response.data.GroupNoPno,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/gardian")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            Event: response.data.map((Event) => Event.CompanyName),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

    //set teacher id
    onChangeTid(e) {
      this.setState({
        Tid: e.target.value,
      });
    }
  
    //set teacher name
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

    const Event = {
      Tid: this.state.Tid,
      Name: this.state.Name,
      Age: this.state.Age,
      Gender: this.state.Gender,
      Address: this.state.Address,
      Qualification: this.state.Qualification,
      GroupNo: this.state.GroupNo,
    };

    console.log(Event);

    axios
      .post(
        "http://localhost:5000/gardian/update/" + this.props.match.params.id,
        Event
      )
      .then((res) => console.log(res.data));
    alert("Edit Successfully");
    window.location = "/gardian";
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
                    Edit Teacher Details
                  </font>{" "}
                </h3>
                <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label> Techer ID: </label>
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
                      type="number"
                      className="form-control"
                      placeholder="Enter Qualifications"
                      value={this.Qualification}
                      onChange={this.onChangeGroupNo}
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
