import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import SweetAlert from "react-bootstrap-sweetalert";
import Loader from "react-loader-spinner";

import { passwordChange } from "../components/UserFunctions";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { getTokenJwt, getMailJwt } from "../helpers/jwt";

class Setting extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordagain: "",
      newpasswordagain: "",
      errorMessage: "",
      showAlert: false,
      showProgress: false,
      alertText: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async componentDidMount() {
    var jwt = getTokenJwt();
    if (!jwt) {
      this.props.history.push("/login");
    } else {
      jwt = getMailJwt();
      this.setState({ email: jwt });
    }
  }

  onConfirm = () => {
    this.setState({ showAlert: false });
    this.setState({ alertText: "" });
  };

  onSubmit(e) {
    e.preventDefault();
    if (
      this.state.password.length === 0 ||
      this.state.newpassword.length === 0 ||
      this.state.newpasswordagain.length === 0
    ) {
      this.setState({ errorMessage: "Please fill all requirements!" });
    } else if (this.state.newpassword !== this.state.newpasswordagain) {
      this.setState({
        errorMessage: "Passwords must be same!",
      });
    } else {
      this.setState({
        errorMessage: "",
      });
      const admin = {
        email: this.state.email,
        password: this.state.password,
        newpassword: this.state.newpassword,
      };
      console.log(admin);
      passwordChange(admin).then((res) => {
        console.log(res);
        if (res) {
          if (res.error !== undefined) {
            this.setState({ errorMessage: res.error });
          } else {
            this.setState({
              alertText: "Password changed successfully!",
            });
            this.setState({ showAlert: true });
          }
        }
      });
    }
  }

  render() {
    return (
      <Hero>
        <Banner title="SETTINGS">
          {this.state.errorMessage && (
            <Alert variant="outlined" severity="error" className="error">
              {this.state.errorMessage}
            </Alert>
          )}
          <div className="divider" />
          <div>
            <TextField
              required
              id="outlined-password-input"
              label="Current Password"
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
              label="New Password"
              type="password"
              name="newpassword"
              autoComplete="current-password"
              variant="outlined"
              onChange={this.onChange}
              value={this.state.newpassword}
            />
          </div>
          <div className="divider" />
          <div>
            <TextField
              required
              id="outlined-password-input"
              label="New Password (Again)"
              type="password"
              name="newpasswordagain"
              autoComplete="current-password"
              variant="outlined"
              onChange={this.onChange}
              value={this.state.newpasswordagain}
            />
          </div>
          <div className="divider" />
          <div onClick={this.onSubmit}>
            <button className="btn-primary">Save</button>
          </div>
          <Loader
            visible={this.state.showProgress}
            type="ThreeDots"
            color="#0066ff"
            height={50}
            width={50}
          />
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

export default Setting;
