import React from "react";
import { Link } from "react-router";

const MerchantSection = () => {
  return (
    <div className="res-padding py-10 rounded-2xl md:w-10/12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center res-padding py-14 rounded-2xl gap-8 bg-teal-950 text-white relative">
        <img src={"https://i.postimg.cc/VkFtzXJj/be-a-merchant-bg.png"} alt="" className="absolute top-0 left-10 w-4xl" />
        <div 
          data-aos="fade-right"
          data-aos-duration="1000"
         className="w-3/4 z-10">
          <h1 className="text-4xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-4 w-sm text-sm text-gray-400">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.7
          </p>
          <div className="flex justify-between gap-4 w-52">
            <Link className="btn shadow-none border-none bg-lime-300 rounded-full w-full font-bold hover:bg-white transition-colors ease-in-out duration-300">
              Become a Merchant
            </Link>
            <Link className="btn shadow-none border-lime-300 bg-transparent rounded-full w-full font-bold text-xs text-lime-300 tracking-wide hover:text-white hover:border-white transition-colors ease-in-out duration-300">
              Earn with ABTracko Courier
            </Link>
          </div>
        </div>
        <div 
          data-aos="fade-left"
          data-aos-duration="1000"
         className="w-sm z-10 absolute right-10">
          <img
            src={"https://i.postimg.cc/25WcScf1/Layer-1.png"}
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MerchantSection;
