import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      email: ""
    };
  }

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
    console.log(e.target.value);
  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
    console.log(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));

    window.location = "/exercises";

    this.setState({
      username: "",
      email: ""
    });
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-user-plus"></i>New User
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="username"
                  id="name"
                  name="username"
                  placeholder="Enter Name"
                  className="form-control"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className="form-control"
                  onChange={this.onChangeEmail}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
