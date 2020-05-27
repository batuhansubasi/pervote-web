import React, { Component } from "react";
import Loader from "react-loader-spinner";
import SweetAlert from "react-bootstrap-sweetalert";

import { getTokenJwt, getMailJwt } from "../helpers/jwt";
import Hero from "../components/Hero";
import Personnel from "../components/Personnel";

export default class SinglePersonnel extends Component {
  constructor() {
    super();
    this.state = {
      points: "",
      gosterilecekler: [],
      showProgress: true,
      alertText: "",
      showAlert: false,
    };
  }

  async componentDidMount() {
    var jwt = getTokenJwt();
    if (!jwt) {
      this.props.history.push("/login");
    } else {
      jwt = getMailJwt();
      await fetch("http://192.168.1.111:3001/points/personnel/" + jwt)
        .then((res) => res.json())
        .then((res) => this.setState({ points: res }))
        .catch(() => this.setState({ hasErrors: true }));

      //Apiden hata döndüyse...
      if (!this.state.hasErrors) {
        this.setState({
          alertText: "Your personnel dont have any points for display.",
        });
        this.setState({ showAlert: true });
      } else {
        const yazdirilacaklar = this.state.points;

        for (let i = 0; i < yazdirilacaklar.length; i++) {
          const templete = yazdirilacaklar[i];

          //ilgili points' in ilgili meetings'ine gittim.
          var meetings = {};
          await fetch(
            "http://192.168.1.111:3001/meetings/" + templete.meetingID
          )
            .then((res) => res.json())
            .then((res) => (meetings = res));

          templete["subject"] = meetings.subject;
          templete["date"] = meetings.date;

          console.log(templete);

          //ilgili points' in oy veren kişisine gittim
          var person = {};
          await fetch(
            "http://192.168.1.111:3001/personnels/" + templete.scorerPersonnel
          )
            .then((res) => res.json())
            .then((res) => (person = res));

          console.log(person);

          if (person === null || person.photo === undefined) {
            templete["scorerMail"] = "kisisilinmis@pervote.com";
            templete["photo"] =
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAADCgAwAEAAAAAQAAADAAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIADAAMAMBEgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/3QAEAAb/2gAMAwEAAhEDEQA/ANu41rUpI9qTpFGCAMD5iKilhTTCj3cSyTRryQdwr59NK/KrkO3VnU6XeJOsdjaXTys548sZJPpXlniXxddaXpU0+mW7te3Ti2tUj+XLNxk1UMNKTTbsjakvaO0Uen6n4m0nTLw2bXNvdS7ghKOMAnsCSAxHfHFeJJ4A8ZzQpd6p4sM12Pm2m2Rgnoucc4rpeFwz1Su+93/wDvjgar6HvWlXvhzxAt3bWt/bzX0UfmzafJ8syKODIgPDqO5XOK8E1GXxL4Llg1LW9el1SzBCq8sCxiFjxgugBC9s9u+aHg6L1p3i/X/MyqYepD4tj3iXT0gImtreJ8jAZeoX1rmtO+IelE2jJ88U0SuhbjnHIyOtedOOJp3W6MHCEdHoT6tq2s2NwH0+DzUYcs3YDirOpatZalF5unAdQHRuAPU1rQnLacfvMZxtsz//0OYOu6h5plkvA+7+DrXESapsY4G0lsj2rFUPI8/VnbLp9/4i8TaHcFG+z218DPxheI2Zf/HgtVvDPi+OxAgugZUdlZCDgxyA4BPqCCc1hWhO1kj2Mqq0YN+0dn07Hf2cvia51eaG+t7eC0EZ8t0X5i351BdyX1xczzy6z9gtSAUnjO4rkfdK9vXNc8HeyR9Pay0dytFouv61Y3eneKGs7nS542jljWMAFTx+f41TlubrRbe6nXUZLqNkURx873J43EHuT2+lbXadkcVVRs77nN6Zo8fh7wNZ2WpXiXEv2iaKKV+Nq7iVJ99uOfeqvjt5rjWbTQVmJTT7dInfbtDSkZb+grWEfaXkzwcbUpLlhBarcvR6rLaeXE2/C/L5gb5Wz0Nco5vUdI5nYsv3cnOQKfsUzh5j/9Hyqw06wuUDtb3Ez4/eY4UH0r1vwz4G0QXV/c39/JdSxQhntlX9wCThQdvLHg55x2qpUZy1WhwuSSvc4/T/AA2j6nai1t4ooXG85UfdHUnPXGO1daNU8PaN8R9QN1q9lFLBaHT7SOKPDh5OG6989cdAvaqWBtFOctx3XLfcrapoDa3o8eo6Bqc9hFe26MAgVwwI4IyODXpOneHrGHQrO2tg0McUCRqo5AAGBXmywtSMm47H0VPGUnBRloeX6J4UmtdQS+1W+nvpYzkNKRgfQAYzXq76HZWlpJPcbnSNS7buBgDJq1Qqy0YfWaMdVdnm6HR9Z0GHUp5vsl5FcXsIna1M6yxpIzBSF+bgZweeM1yPgPU/F1x4u0dNXljfwtrCz39rbT7I2s2+YZjcYbayPkqc8+nSvSp4enKHLUVzw8TU5pykh8+gXmrRHWIvsxt+EjngOYpAepz/AA/Q12Wu+LdN8F65psVtq9nYm508CSGa7ytwquRlkwVbr6d6p4DdUnb1OeFTmgnbc//Z";
          } else {
            templete["scorerMail"] = person.email;
            templete["photo"] = person.photo;
          }
          console.log(templete);
          delete templete["createdAt"];
          delete templete["meetingID"];
          delete templete["ratedPersonnel"];
          delete templete["updatedAt"];
          delete templete["__v"];
        }
        this.setState({ showProgress: false });
        this.setState({ gosterilecekler: yazdirilacaklar });
      }
    }
  }

  render() {
    let listObject = this.state.gosterilecekler.map((val, key) => {
      return <Personnel key={key} keyval={key} val={val} />;
    });
    return (
      <Hero>
        <Loader
          visible={this.state.showProgress}
          type="Ball-Triangle"
          color="#0066ff"
          height={200}
          width={200}
        />
        <SweetAlert
          title={this.state.alertText}
          onConfirm={this.onConfirm}
          show={this.state.showAlert}
        />
        <div styles={{ overflowY: "scroll" }}> {listObject}</div>
      </Hero>
    );
  }
}
