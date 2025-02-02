import Image from 'next/image';
import React from 'react';
import heroBg from '../assets/images/background.JPG';
import arrowIcon from '../assets/icons/arrow.png';
import phoneIcon from '../assets/icons/contact.png';
import mailIcon from '../assets/icons/mail.png';

const Hero = ({ address, phone, email }) => {
 
  return (
    <section className="flex flex-col w-full h-screen ">
      <Image
        src={heroBg}
        alt="bg image"
        fill
        className="w-full bg-no-repeat  object-cover object-center"
      />
      <div className="w-full h-screen relative ">
        <div className="relative h-screen text-center flex flex-col justify-center items-center">
          <h1 className="font-normal text-7xl text-center mt-[220px] text-white capitalize">
            find your dream home
          </h1>
          {/* Icons and Text under Heading */}
          <div className="hidden sm:flex mt-[120px] justify-center items-center">
            <div className="flex mr-11 ">
              <Image
                src={arrowIcon}
                alt="arrow icon"
                className="w-5 h-5 mx-3 self-center"
              />
              <p className="text-white text-xl py-2 ">{address}</p>
            </div>
          </div>

            <div className="hidden sm:flex mt-2 justify-center items-center">
            <div className="flex mr-5">
              <Image
                src={phoneIcon}
                alt="phone icon"
                className="w-5 h-5 mx-3 self-center"
              />
              <p className="text-white text-xl py-2">{phone}</p>
            </div>

            <div className="flex ml-5">
              <Image
                src={mailIcon}
                alt="mail icon"
                className="w-5 h-5 mx-3 self-center"
              />
              <p className="text-white text-xl py-2">{email}</p>
            </div>
          </div>
          {/* Show more button  */}
         
        </div>
      </div>
    </section>
  );
};

export default Hero;
