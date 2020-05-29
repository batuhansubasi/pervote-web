import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Recaptcha from "react-google-invisible-recaptcha";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";

import { loginaction, emailaction } from "../actions/index";
import { getTokenJwt } from "../helpers/jwt";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { LoginFunction, mail } from "../components/UserFunctions";
import "../config";

//çekmek için
const mapStateToProps = (state) => {
  return {
    isLogged: state.log,
  };
};

const mapDispatchtoProps = () => {
  return {
    loginaction,
    emailaction,
  };
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      warning: false,
      errorMessage: "",
      isVerified: false,
      showProgress: false,
      showAlert: false,
      alertText: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.forgetPassword = this.forgetPassword.bind(this);
  }

  async componentDidMount() {
    const jwt = getTokenJwt();
    if (jwt) {
      this.props.history.push("/personnel"); //todo , sonradan ac
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.login();
    }
  };

  onResolved = () => {
    this.setState({ isVerified: true });
    console.log(this.state.isVerified);
  };

  sendMessage = () => {
    this.recaptcha.execute();
  };

  onSubmit(e) {
    e.preventDefault();
    this.recaptcha.execute();
    if (this.state.password.length === 0 || this.state.email.length === 0) {
      this.setState({ errorMessage: "Please fill all requirements!" });
    } else {
      this.setState({ showProgress: true });
      const admin = {
        email: this.state.email,
        password: this.state.password,
      };
      LoginFunction(admin).then((res) => {
        if (res) {
          this.setState({ showProgress: false });
          if (
            res.error !== undefined ||
            res.toString().toLowerCase().includes("error")
          ) {
            if (res.error !== undefined) {
              this.setState({ errorMessage: res.error });
            } else {
              this.setState({ errorMessage: "We cant react API, sorry!" });
            }
          } else {
            this.setState({ errorMessage: "" });
            //Login ve Mail Redux...
            this.props.loginaction();
            this.props.emailaction(this.state.email);
            this.props.history.push({
              pathname: `/personnel`,
            });
          }
        }
      });
    }
  }

  forgetPassword(e) {
    e.preventDefault();
    if (this.state.email.length === 0) {
      this.setState({ errorMessage: "Please enter your email!" });
    } else if (!this.state.email.includes("@")) {
      this.setState({
        errorMessage: "Email must be include '@'!",
      });
    } else {
      this.setState({ showProgress: true });
      const admin = {
        email: this.state.email,
      };
      mail(admin).then((res) => {
        if (res) {
          console.log(res);
          this.setState({ showProgress: false });
          if (res.error !== undefined) {
            console.log("buraya gir");
            this.setState({ errorMessage: res.error });
          } else {
            this.setState({
              alertText: "Admin login password sent to " + this.state.email,
            });
            this.setState({ showAlert: true });
          }
        }
      });
    }
  }

  onConfirm = () => {
    this.setState({ showAlert: false });
    this.setState({ alertText: "" });
  };

  render() {
    return (
      <Hero>
        <Banner title="Sign IN">
          <form noValidate onSubmit={this.onSubmit}>
            {this.state.errorMessage && (
              <Alert variant="outlined" severity="error" className="error">
                {this.state.errorMessage}
              </Alert>
            )}
            <div className="divider" />
            <div>
              <span>
                Don't you have an account?{" "}
                <a
                  className="underline"
                  onClick={() => this.props.history.push("/register")}
                >
                  Sign UP now!
                </a>
              </span>
            </div>
            <div className="divider" />
            <div>
              <TextField
                required
                id="outlined-basic"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                label="e-Mail"
                variant="outlined"
              />
            </div>
            <div className="divider" />
            <div>
              <TextField
                required
                id="outlined-password-input"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                label="Password"
                autoComplete="current-password"
                variant="outlined"
              />
            </div>
            <div className="divider" />
            <div>
              <button
                className="btn-primary"
                type="submit"
                onClick={this.onSubmit}
              >
                Login
              </button>
            </div>
            <div className="divider" />
            <div>
              <span>
                <a className="underline" onClick={this.forgetPassword}>
                  Did you forget your password?
                </a>
              </span>
            </div>
            <Recaptcha
              ref={(ref) => (this.recaptcha = ref)}
              sitekey="6Lf46vcUAAAAAE0FSDWracSMu-V7VN16jCaTPY94"
              onResolved={this.onResolved}
            />
            <div className="divider" />
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
          </form>
        </Banner>
      </Hero>
    );
  }
}

export default connect(mapStateToProps, mapDispatchtoProps())(Login);
