import React from "react";
import Banner from "./Banner";
import Services from "./Services/Services";
import HowItWorks from "../Shared/HowItWorks";

const Home = () => {
  return (
    <div>
      <div className="res-padding">
        <Banner />
      </div>
      <div>
        <HowItWorks/>
      </div>
      <div>
        <Services/>
      </div>
    </div>
  );
};

export default Home;
