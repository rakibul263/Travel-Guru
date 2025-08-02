import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const LeftBanner = () => {
  return (
    <div className='text-white space-y-4'>
      <h1 className='text-7xl font-bold'>Cox's bazar</h1>
      <h3 className=''>
        Cox's Bazar is a city, fishing port, tourism centre and district
        headquarters in southeastern Bangladesh. It is famous mostly for its
        long natural sandy beach, and it ...
      </h3>
      <button className='btn btn-primary text-black py-3 px-4'>Booking <FaArrowRightLong></FaArrowRightLong></button>
    </div>
  );
};

export default LeftBanner;
