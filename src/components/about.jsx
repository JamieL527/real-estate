import React from 'react';

export default function About({
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardSubText1,
  cardSubText2,
  cardSubText3,
}) {
  return (
    <div id="about-container" className="relative p-4 mb-4">
      
      <div className="relative ">
        <div className="flex flex-col justify-center items-center mt-20">
          <p
            className="text-9xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase  dark:text-white
          "
          >
            Jamie Liu
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-16 dark:text-gray-300">
            About Us
          </p>
        </div>
      </div>

      <div className="relative justify-center items-center">
        <p className="font-medium text-base  text-bluePText text-center mt-16">
        Jamie Liu is a registered real estate agent and home inspector in Ontario. 
        With more than ten years of real estate investment experience, <br/>
        she has extensive research on the real estate market in GTA. 
        Her home inspector background enables her to present more accurate and <br/>
        unique advice from an engineering point of view regarding building evaluation and structural repairing.
        Last but not least, her pleasant <br/>personality, excellent negotiation skills and sales strategies 
        make her a really joyful and reliable lifelong business partner.  
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-[50px] ml-[28px]">
        <div className="bg-white  py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle1}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText1}
          </p>
        </div>
        <div className="bg-white py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle2}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText2}
          </p>
        </div>
        <div className="bg-white py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle3}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText3}
          </p>
        </div>
      </div>
    </div>
  );
}
