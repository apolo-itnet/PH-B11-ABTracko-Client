import React from "react";
import { Building2, HandCoins, icons, Truck } from "lucide-react";
import { GiPayMoney } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      icon: <Truck />,
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
      icon: <TbTruckDelivery />,
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      icon: <Building2 />,
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
  ];

  return (
    <div className="res-padding py-20 w-11/12 mx-auto">
      <h1 className="text-4xl font-bold pb-2 ">How It Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  py-4 ">
        {steps.map((step) => (
          <div
            key={step.id}
            className="card bg-base-100 shadow-xl rounded-2xl text-center hover:bg-lime-300 transition-colors ease-in-out duration-500"
          >
            <div className="card-body justify-center items-center py-8 px-4">
              <p className="w-12 h-12 text-lime-500 mb-2 bg-base-300 p-3 rounded-full">{step.icon}</p>
              <h2 className="card-title font-bold text-xl">{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
