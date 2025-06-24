import React from "react";
import Banner from "./Banner";
import Services from "./Services/Services";
import HowItWorks from "../Shared/HowItWorks";
import LogoMarquee from "./Marquee/LogoMarquee";
import ParcelDetails from "./ParcelDetails/ParcelDetails";
import MerchantSection from "./MerchantSection";
import FAQAccordion from "./FAQ/FAQAccordion";
import FeedbackSection from "./FeedbackSection/FeedbackSection";

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
      <div>
        <MerchantSection/>
      </div>
      <div>
        <FeedbackSection/>
      </div>
      <div>
        <FAQAccordion/>
      </div>
    </div>
  );
};

export default Home;
