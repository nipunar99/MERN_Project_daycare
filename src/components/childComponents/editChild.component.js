import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default class EditChild extends Component {
  constructor(props) {
    super(props);

    this.onChangeCid = this.onChangeCid.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeSpecialNotes = this.onChangeSpecialNotes.bind(this);
    this.onChangeGid = this.onChangeGid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Cid: "",
      Name: "",
      Age: "",
      Gender: "",
      Address: "", 
      SpecialNotes: "",
      Gid: "",
      Child: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/child/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          Cid: response.data.Cid,
          Name: response.data.Name,
          Age: response.data.Age,
          Gender: response.data.Gender,
          Address: response.data.Address,
          SpecialNotes: response.data.SpecialNotes,
          Gid: response.data.Gid,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/child")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            Child: response.data.map((Child) => Child.Name),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //set the Child ID
  onChangeCid(e) {
    this.setState({
      Cid: e.target.value,
    });
  }

  //set the Child Name
  onChangeName(e) {
    this.setState({
      Name: e.target.value,
    });
  }

  //set Child's Age
  onChangeAge(e){
    this.setState({
      Age: e.target.value,
    });
  }

  //set Child Address
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value,
    });
  }

  //set Special notes
  onChangeSpecialNotes(e) {
    this.setState({
      SpecialNotes: e.target.value,
    });
  }

  //Set Gender
  onChangeGender(e) {
    this.setState({
      Gender: e.target.value,
    });
  }

  //set Guardian ID
  onChangeGid(e) {
    this.setState({
      Gid: e.target.value,
    });
  }

  //submit Function
  onSubmit(e) {
    e.preventDefault();

    const Child = {
      Cid: this.state.Cid,
      Name: this.state.Name,
      Age: this.state.Age,
      Gender: this.state.Gender,
      Address: this.state.Address,
      SpecialNotes: this.state.SpecialNotes,
      Gid: this.state.Gid,
    };

    console.log(Child);

    axios
      .post(
        "http://localhost:5000/child/update/" + this.props.match.params.id,
        Child
      )
      .then((res) => console.log(res.data));
    alert("Edit Successfull");
    window.location = "/child";
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
                    Update Child Details
                  </font>{" "}
                </h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label> Child ID: </label>
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
                    <label> Child Name: </label>
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
                    <label> Gender : </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Children Names"
                      value={this.Gender}
                      onChange={this.onChangeGender}
                    />{" "}
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
                    <label> Special Notes: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter and Special Notes"
                      //maxlength = "10"
                      value={this.state.SpecialNotes}
                      onChange={this.onChangeSpecialNotes}
                    />
                  </div>
                  <div className="form-group">
                    <label> Guardian ID : </label>
                    <input
                      type="Number"
                      required
                      className="form-control"
                      placeholder="Enter Guardian Id"
                      //maxlength = "10"
                      value={this.state.Gid}
                      onChange={this.onChangeGid}
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Update"
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
