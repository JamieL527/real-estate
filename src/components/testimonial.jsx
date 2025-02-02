import Image from 'next/image';
import React from 'react';

import userImg from '../assets/images/user1.png';
import userImg1 from '../assets/images/user2.png';
import userImg2 from '../assets/images/user3.png';
import ratingImg from '../assets/images/rating.png';

const Testimonial = () => {
  return (
    <div id="testimonial" className="relative p-4 mb-4">
      <div className="relative ">
        <div className="flex flex-col justify-center items-center mt-20">
          <p className="text-9xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase  dark:text-white">
            testimonial
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-7 sm:mt-14 dark:text-gray-300">
            What our customers say
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-[60px] ml-[30px]  ">
        <div className=" flex flex-col mb-5">
          <div className="w-[350px] h-[160px] flex items-start p-[30px] gap-[10px] bg-white  dark:bg-slate-700 shadow-md rounded-[10px] ">
            <p className=" font-semibold text-[13px] leading-[25px] text-bluePText dark:text-white">
              Thank you very much for the house found. This is an ideal option
              for our family at the location and price. 
            </p>
          </div>
          <div className="flex items-start gap-5 w-auto h-[50px] mt-[30px]">
            <Image
              src={userImg}
              alt="user "
              className="w-[50px] h-[50px] bg-[#8833FF4D] rounded-full ml-4"
            />
            <div className="flex flex-col justify-center items-start">
              <p className="font-bold text-sm  text-cardText capitalize  dark:text-white">
                Robert lindsey
              </p>
              <Image
              src={ratingImg}
              alt="rating "
              className="w-[50px] h-[50px]"
            />
              
            </div>
          </div>
        </div>

        <div className=" flex flex-col mb-5">
          <div className="w-[350px] h-[160px] flex items-start p-[30px] gap-[10px] bg-white  dark:bg-slate-700 shadow-md rounded-[10px] ml-[30px]  ">
            <p className=" font-semibold text-[13px] leading-[25px] text-bluePText dark:text-white">
              Best customer services ever! So friendly and patient.
              Will answer all questions related to real estate!
            </p>
          </div>
          <div className="flex items-start gap-5 w-auto h-[50px] mt-[30px]">
            <Image
              src={userImg1}
              alt="user "
              className="w-[50px] h-[50px] bg-[#CC74294D] rounded-full ml-12"
            />
            <div className="flex flex-col justify-center items-start">
              <p className="font-bold text-sm text-cardText capitalize  dark:text-white">
                Noah Russell
              </p>
              <Image
              src={ratingImg}
              alt="rating "
              className="w-[50px] h-[50px]"
            />
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <div className="w-[350px] h-[160px] flex items-start p-[30px] gap-[10px] bg-white  dark:bg-slate-700 shadow-md rounded-[10px] ml-[30px] ">
            <p className=" font-semibold text-[13px] leading-[25px] text-bluePText dark:text-white">
              Jamie and her team are very professinal.
              They had helped me to get the unit that I wanted.
              Thank you!
            </p>
          </div>
          <div className="flex items-start gap-5 w-auto h-[50px] mt-[30px]">
            <Image
              src={userImg2}
              alt="user "
              className="w-[50px] h-[50px] bg-[#E62E7B4D] rounded-full ml-12"
            />
            <div className="flex flex-col justify-center items-start">
              <p className="font-bold text-sm text-cardText capitalize  dark:text-white">
                Nellie Griffith
              </p>
              <Image
              src={ratingImg}
              alt="rating "
              className="w-[50px] h-[50px]"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
