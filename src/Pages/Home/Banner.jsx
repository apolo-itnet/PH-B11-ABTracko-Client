import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div
    data-aos="fade-up"
    data-aos-duration="1000"
     className=" w-full mx-auto res-padding " >
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false} >
        <div>
          <img src={"https://i.postimg.cc/Hx1M6zT0/banner1.png"} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={"https://i.postimg.cc/vB7VknmJ/banner2.png"} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={"https://i.postimg.cc/D02XTzJ8/banner3.png"} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
