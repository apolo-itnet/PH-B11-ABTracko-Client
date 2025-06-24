import {
  ArrowBigDownIcon,
  CircleChevronDown,
  CircleChevronUp,
  Truck,
} from "lucide-react";
import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto divide-y divide-slate-200 rounded">
        <details className="group p-4 bg-blue-100 rounded-2xl mb-4" open>
          <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            <div className="flex justify-between items-center gap-4 w-full pb-4 border-b border-gray-300">
              <div className="flex items-center gap-4">
                <span className="text-lime-500"><Truck /></span>
                <p>How do you handle shipping?</p>
              </div>
              <div className="flex items-center gap-2">
                <CircleChevronDown /> <CircleChevronUp />
              </div>
            </div>
          </summary>
          <p className="mt-4 text-slate-500 pl-10 w-10/12">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
        </details>
        <details className="group p-4 bg-blue-100 rounded-2xl" open>
          <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            <div className="flex justify-between items-center gap-4 w-full pb-4 border-b border-gray-300">
              <div className="flex items-center gap-4">
                <span className="text-lime-500"><Truck /></span>
                <p>How do you handle shipping?</p>
              </div>
              <div className="flex items-center gap-2">
                <CircleChevronDown /> <CircleChevronUp />
              </div>
            </div>
          </summary>
          <p className="mt-4 text-slate-500 pl-10 w-10/12">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
        </details>
      </section>
    </div>
  );
};

export default FAQ;
