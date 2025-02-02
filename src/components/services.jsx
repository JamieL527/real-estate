import Image from 'next/image';
import React from 'react';
import evaluationIcon from '../assets/icons/evaluation.png';
import houseIcon from '../assets/icons/house.png';
import cameraIcon from '../assets/icons/camera.png';
import cleaningIcon from '../assets/icons/cleaning.png';
import stagingIcon from '../assets/icons/staging.png';

const Services = () => {
  return (
    <div id="services" className="relative p-4 mb-4">
      
      <div className="relative ">
        <div className="flex flex-col justify-center items-center mt-20">
          <p className=" text-9xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase  dark:text-white">
            services
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-7 sm:mt-14 dark:text-gray-300">
            Our Services
          </p>
        </div>
      </div>

      {/* 5 icons and names of services */}
      <div className="grid grid-cols-2 sm:flex justify-center items-center mt-16 ml-[40px]">
        <div className="flex flex-col justify-center items-center mr-[30px] sm:mr-[60px] sm:ml-[50px] hover:scale-125 ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px] shadow-xl p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image src={houseIcon} alt="house" className="w-11 h-10" />
            <p className="font-bold text-sm leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              buying/<br/>selling
            </p>
          </div>
        </div>

        <div className="flex flex-col  mr-[60px] hover:scale-125  ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px] shadow-xl p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image src={stagingIcon} alt="parking" className="w-12 h-12" />
            <p className="font-bold text-sm leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              Staging
            </p>
          </div>
        </div>

        <div className="flex flex-col mr-[60px] hover:scale-125  ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px] shadow-xl p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image
              src={cleaningIcon}
              alt="apartment"
              className="w-[45px] h-[45px]"
            />
            <p className="font-bold text-sm leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              Cleaning
            </p>
          </div>
        </div>

        <div className="flex flex-col  mr-[60px] hover:scale-125  ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px] shadow-xl p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image src={cameraIcon} alt="warehouse" className="w-12 h-12" />
            <p className="font-bold text-sm leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              Photograph
            </p>
          </div>
        </div>

        <div className="flex flex-col  mr-[60px] hover:scale-125  ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px] shadow-xl p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image src={evaluationIcon} alt="office" className="w-10 h-10" />
            <p className="font-bold text-sm leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              Evaluation
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Services;
