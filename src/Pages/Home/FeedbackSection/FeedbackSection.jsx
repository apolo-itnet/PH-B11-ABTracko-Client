import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote } from 'lucide-react';
import { usersFeedback } from "../../../assets/data/feedbackData";

const FeedbackSection = () => {
  return (
    <section className="py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-2">
          What our customers are saying
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto mb-10">
          Discover how ABTracko has improved delivery tracking and customer satisfaction for businesses and individuals alike.
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="!overflow-visible"
        >
          {usersFeedback.map((feedback, idx) => (
            <SwiperSlide key={idx}>
              <div className="max-w-xl mx-auto bg-white rounded-2xl p-6 border shadow-sm transition-all duration-300">
                <Quote className="text-primary w-8 h-8 mb-4 mx-auto" />
                <p className="text-gray-700 mb-6">
                  {feedback.message}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {feedback.name[0]}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-base text-neutral">
                      {feedback.name}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {feedback.designation}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeedbackSection;
