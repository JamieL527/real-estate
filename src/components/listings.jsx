import React from 'react';
import Tabs from '@/components/tabs';

const Listings = () => {
  return (
    <div id="listings" className="relative p-4 mb-4">
      
      <div className="relative ">
        <div className="flex flex-col justify-center items-center mt-20">
          <p className="text-9xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase  dark:text-white">
            listings
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-7 sm:mt-14 dark:text-gray-300">
          Featured Listings
          </p>
        </div>
      </div>

     
      <div className="mt-14">
        <Tabs />
      </div>
    </div>
  );
};

export default Listings;
