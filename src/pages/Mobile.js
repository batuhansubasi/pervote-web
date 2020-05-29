import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export const Mobile = () => {
  return (
    <Hero>
      <Banner title="PerVote Mobile App">
        <div className="divider" />
        <div>
          <h5>Your personnels will use here. It's open source.</h5>
          <span>
            <a
              className="underline"
              onClick={() =>
                window.open(
                  "https://github.com/batuhansubasi/pervote-mobil",
                  "_blank"
                )
              }
            >
              Click for Mobile App!
            </a>
          </span>
        </div>
      </Banner>
    </Hero>
  );
};

export default Mobile;
