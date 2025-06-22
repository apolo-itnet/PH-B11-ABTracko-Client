import React from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
  return (
    <div className='res-padding py-10 rounded-2xl'>
      <div className=' py-20 bg-teal-950 rounded-2xl'>
        <div className='flex flex-col justify-center items-center text-center text-white'>
          <h1 className='text-4xl font-bold pb-2'>Our Services</h1>
          <p className='text-lg w-3xl font-light'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div >
          <ServicesCard/>
        </div>
      </div>
    </div>
  );
};

export default Services;