import React, { Component } from "react";
import { Rating } from "@material-ui/lab";

export default class Meeting extends Component {
  constructor() {
    super();
    this.state = {
      personnel: "",
    };
  }

  render() {
    return (
      <div className="person" key={this.props.val._id}>
        <img src={this.props.val.photo} />
        <h4>Meeting Subject: {this.props.val.subject}</h4>
        <h4>Meeting Date: {this.props.val.date}</h4>
        <h4>Voted Pers. Mail: {this.props.val.scorerMail}</h4>
        <h4>Point: {this.props.val.pointValue}</h4>
        <Rating
          name="half-rating-read"
          defaultValue={this.props.val.pointValue}
          precision={0.1}
          readOnly
          size="large"
        />
        <h5>Description: {this.props.val.description}</h5>
      </div>
    );
  }
}
