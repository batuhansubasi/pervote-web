import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import SweetAlert from "react-bootstrap-sweetalert";

import { register } from "../components/UserFunctions";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordagain: "",
      errorMessage: "",
      showAlert: false,
      alertText: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onConfirm = () => {
    this.setState({ showAlert: false });
    this.setState({ alertText: "" });
    this.props.history.push(`/pervote-web/login`);
  };

  onSubmit(e) {
    e.preventDefault();
    if (
      this.state.password.length === 0 ||
      this.state.email.length === 0 ||
      this.state.passwordagain.length === 0
    ) {
      this.setState({ errorMessage: "Please fill all requirements!" });
    } else if (this.state.password !== this.state.passwordagain) {
      this.setState({
        errorMessage: "Passwords must be same!",
      });
    } else if (!this.state.email.includes("@")) {
      this.setState({
        errorMessage: "Email must be include '@'!",
      });
    } else {
      const admin = {
        email: this.state.email,
        password: this.state.password,
      };
      register(admin).then((res) => {
        if (res) {
          console.log(res);
          if (res.error !== undefined) {
            this.setState({ errorMessage: res.error });
          } else {
            this.setState({
              alertText:
                this.state.email +
                " registered succesfully!" +
                "Returning login page...",
            });
            this.setState({ showAlert: true });
          }
        }
      });
    }
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   });
  // };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  // };

  render() {
    return (
      <Hero>
        <Banner title="Sign UP">
          <div>
            <span>
              Have an account?{" "}
              <a
                className="underline"
                onClick={() => this.props.history.push("/pervote-web/login")}
              >
                Sign IN now!
              </a>
            </span>
          </div>
          <div className="divider" />
          {this.state.errorMessage && (
            <Alert variant="outlined" severity="error" className="error">
              {this.state.errorMessage}
            </Alert>
          )}
          <div className="divider" />
          <div>
            <TextField
              required
              id="outlined-basic"
              label="e-Mail"
              variant="outlined"
              onChange={this.onChange}
              value={this.state.mail}
              name="email"
            />
          </div>
          <div className="divider" />
          <div>
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={this.onChange}
              value={this.state.password}
            />
          </div>
          <div className="divider" />
          <div>
            <TextField
              required
              id="outlined-password-input"
              label="Password (Again)"
              type="password"
              name="passwordagain"
              autoComplete="current-password"
              variant="outlined"
              onChange={this.onChange}
              value={this.state.passwordagain}
            />
          </div>
          <div className="divider" />
          <div onClick={this.onSubmit}>
            <button className="btn-primary">Register</button>
          </div>
          <SweetAlert
            title={this.state.alertText}
            onConfirm={this.onConfirm}
            show={this.state.showAlert}
          />
        </Banner>
      </Hero>
    );
  }
}

export default Register;
