import React from "react";
import Banner from "./Banner";
import Services from "./Services/Services";
import HowItWorks from "../Shared/HowItWorks";
import Marquee from "./Marquee/LogoMarquee";
import LogoMarquee from "./Marquee/LogoMarquee";
import ParcelDetails from "./ParcelDetails/ParcelDetails";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <HowItWorks/>
      </div>
      <div>
        <Services/>
      </div>
      <div>
        <LogoMarquee/>
      </div>
      <div>
        <ParcelDetails/>
      </div>
    </div>
  );
};

export default Home;
