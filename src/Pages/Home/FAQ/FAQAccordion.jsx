import React, { useState } from "react";
import {
  Truck,
  PackageCheck,
  ShieldCheck,
  Timer,
  MapPin,
  CircleChevronDown,
  CircleChevronUp,
} from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How do you handle shipping?",
    answer:
      "We collaborate with top-tier courier services to ensure timely and safe delivery. Our team monitors each shipment until it reaches your doorstep.",
    icon: <Truck className="text-lime-500" />,
  },
  {
    id: 2,
    question: "What is the estimated delivery time?",
    answer:
      "Most deliveries within Bangladesh are completed within 2-3 business days. Remote area deliveries may take a little longer.",
    icon: <Timer className="text-orange-500" />,
  },
  {
    id: 3,
    question: "Do you offer package tracking?",
    answer:
      "Yes, every package comes with a unique tracking ID so customers can monitor the delivery status in real-time via our dashboard.",
    icon: <MapPin className="text-sky-500" />,
  },
  {
    id: 4,
    question: "Is my package insured?",
    answer:
      "Absolutely. We provide insurance coverage for all valuable items, ensuring full safety during transit from pickup to delivery.",
    icon: <ShieldCheck className="text-emerald-500" />,
  },
  {
    id: 5,
    question: "What if my package gets damaged or lost?",
    answer:
      "If your package is lost or damaged in transit, we offer immediate support and refund or reshipment based on our policy.",
    icon: <PackageCheck className="text-red-500" />,
  },
];

const FAQAccordion = () => {
  const [openId, setOpenId] = useState(1);
  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-5xl mx-auto rounded py-10">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-center py-4"
      >
        <h1 className="text-4xl font-bold text-teal-950">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="py-4 w-lg mx-auto text-gray-600">
          Find answers to common questions about our services. If you can't find
          what you're looking for, please contact us. We're here to help you.{" "}
        </p>
      </div>

      {faqs.map((faq) => (
          <div
            initial={{ opacity: 0 }}
            animate={{ height: "auto", opacity: 100, }}
            exit={{ height: 0, opacity: 0 }}
            key={faq.id}
            className={`transition-all duration-300 ease-in-out mb-4 rounded-2xl p-4 border  ${
              openId === faq.id
                ? "bg-[#E6F2F3] border border-teal-500 "
                : "bg-white border-transparent"
            } `}
          >
            <button
              onClick={() => toggleAccordion(faq.id)}
              className="w-full text-left flex justify-between items-center pb-4 border-b border-gray-300"
            >
              <div className="flex items-center gap-4">
                <span>{faq.icon}</span>
                <p className="font-medium text-slate-700">{faq.question}</p>
              </div>
              <span className="text-gray-600 transition-transform duration-300">
                {openId === faq.id ? (
                  <CircleChevronUp />
                ) : (
                  <CircleChevronDown />
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openId === faq.id ? "max-h-auto mt-4" : "max-h-0"
              }`}
            >
              <p className="text-slate-500 pl-10 w-10/12">{faq.answer}</p>
            </div>
          </div>
      ))}
    </section>
  );
};

export default FAQAccordion;
