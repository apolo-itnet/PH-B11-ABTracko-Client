import React from "react";
import ServiceData from "../../../assets/data/services.json";
import * as LucideIcons from "lucide-react";

const ServicesCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 res-padding py-10 w-11/12 mx-auto ">
        {ServiceData.map((service, index) => {
          const Icon = LucideIcons[service.iconName] || LucideIcons.Circle;

          return (
            <div
              key={index}
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay={index * 150}
              className="card bg-base-100 shadow-xl rounded-2xl text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#16a34a] via-[#4ade80] to-[#bbf7d0] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-2xl"></div>

              <div className="card-body justify-center items-center py-8 px-8 z-20">
                <Icon className="w-12 h-12 text-lime-500 mb-2 bg-base-300 p-3 rounded-full" />
                <h2 className="card-title font-bold text-xl">
                  {service.title}
                </h2>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCard;
