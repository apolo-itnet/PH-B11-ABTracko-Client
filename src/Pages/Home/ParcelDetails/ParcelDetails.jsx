import React from "react";

const ParcelDetails = () => {
  const parcelData = [
    {
      id: 1,
      Image: "https://i.postimg.cc/Cx8XsRRy/Location-tracking-pana.png",
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      Image: "https://i.postimg.cc/tRrKq0Kc/In-no-time-pana.png",
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 3,
      Image: "https://i.postimg.cc/mkh6zDv5/Contact-us-pana.png",
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <div className="res-padding max-w-6xl  mx-auto py-10">
      <div className="grid grid-cols-1 gap-8">
        {parcelData.map((data, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 100}
          >
            <div className="card flex-row items-center bg-base-100 shadow-xl rounded-2xl px-6">
              <figure className="w-70 h-auto ">
                <img src={data.Image} alt={data.title} className="w-full" />
              </figure>
              <div className="card-body p-4 border-l border-dashed border-gray-300 ml-8 w-full h-full">
                <h2 className="card-title font-bold text-xl">{data.title}</h2>
                <p className="text-base font-medium">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParcelDetails;
