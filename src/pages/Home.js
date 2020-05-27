import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Hero>
      <Banner title="PerVote Web">
        <div className="divider" />
        <h3>This web page designed for admins.</h3>
        <h5>Admins can be add/delete personnel with using system.</h5>
        <h5>Department information can be enter with using system.</h5>
        <h5>Admins can be display that pointed personnel for meetings.</h5>
        <h4>
          You should use Login button from here if you want to use this system.
        </h4>
        <Link to="/login" className="btn-primary">
          Login Button
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
