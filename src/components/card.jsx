import Image from 'next/image';
import React from 'react';


const Card = ({ imageSrc, title, price, address, floorplan }) => {
  return (
    <div className="w-[350px] h-[400px] hover:scale-105 ease-in duration-200 mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-slate-700">
      <div className="flex flex-col items-start">
        <div className="relative">
          <Image
            className="w-[350px] h-[195px] object-contain"
            src={imageSrc}
            alt="house image"
          />
         
        </div>

        <div className="p-8">
          <div className="capitalize text-cardText font-black text-[15px] leading-[30px] dark:text-white">
            {title}
          </div>
          <p className=" text-2xl leading-[30px] font-bold text-cardText py-[10px] dark:text-white ">
            {price}
          </p>
          <p className="text-[13px] leading-[25px] text-blueCardSubTitle font-bold py-[10px]  dark:text-white">
            {address}
          </p>
          <p className="text-xs leading-5 text-blueCardSubTitle font-bold dark:text-white">
            {floorplan}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
