import React from "react";
import {
  BriefcaseBusiness,
  Building2,
  HandCoins,
  PackageCheck,
  Truck,
  Warehouse,
} from "lucide-react";
import { TbTruckDelivery } from "react-icons/tb";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      icon: <PackageCheck />,
      description:
        "We deliver parcels within 24–72 hours in whole Bangladesh. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      icon: <HandCoins />,
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 3,
      title: "Delivery Hub",
      icon: <Warehouse />,
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      icon: <BriefcaseBusiness />,
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
  ];

  return (
    <div className="res-padding py-20 w-11/12 h-full mx-auto z-20">
      <h1 className="text-4xl font-bold pb-2 ">How It Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  py-4 ">
        {steps.map((step, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 150}
            className="card bg-base-100 shadow-xl rounded-2xl text-center group "
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#16a34a] via-[#4ade80] to-[#bbf7d0] opacity-0 group-hover:opacity-100  transition-opacity duration-500 z-0 rounded-2xl"></div>
            <div className="card-body justify-center items-center py-8 px-4 z-20 group-hover:-translate-y-2 transition-all ease-out duration-500">
              <div className="w-12 h-12 text-lime-500 mb-2 bg-base-300 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <h2 className="card-title font-bold text-lg ">{step.title}</h2>
              <p className="text-sm font-medium">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
