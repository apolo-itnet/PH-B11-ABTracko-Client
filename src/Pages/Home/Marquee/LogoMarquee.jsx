import React from "react";
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  return (
    <div className="py-10">
      <h1 className="text-center text-4xl font-bold py-4">
        We've helped thousands of sales teams
      </h1>
      <Marquee direction="right" className="w-full bg-lime-300 my-4 py-8">
        <div className="flex justify-between items-center gap-20">
          <img src="https://i.postimg.cc/BnT71x1y/amazon.png" alt="Amazon Logo" className="w-32 px-2" />
          <img src="https://i.postimg.cc/7Lqs1f3L/star.png" alt="Star Logo" className="w-32 px-2" />
          <img src="https://i.postimg.cc/wBFWwg2Q/casio.png" alt="Casio Logo" className="w-32 px-2" />
          <img src="https://i.postimg.cc/d115XpSP/moonstar.png" alt="Moonstar Logo" className="w-40 px-2" />
          <img src="https://i.postimg.cc/4dSWTPrK/randstad.png" alt="Randstad Logo" className="w-40 px-2" />
          <img src="https://i.postimg.cc/T15C2m6t/startpeople.png" alt="Startpeople Logo" className="w-40 px-2" />
        </div>
      </Marquee>
      <Marquee pauseOnHover={true} speed={100} className="w-full bg-teal-950 py-4">
        <div className="flex flex-col justify-center items-center">
          <p className="text-8xl uppercase font-black text-lime-300 py-4 px-8">
            Welcome to <span className="text-teal-300">ABTracko</span>, your reliable partner for hassle-free parcel delivery in Bangladesh.
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default LogoMarquee;

