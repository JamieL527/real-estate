import React from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <div className="relative p-4 mb-4 mx-[10px] border-t-2 border-solid border-[#EDEFF2]">
      {/* Row 1 */}
      <div className="sm:flex justify-center items-center py-[20px] sm:py-[90px] px-2 ">
        {/* text  */}
        <p className="text-2xl text-center leading-[30px] font-bold text-[#4D5E80] capitalize mb-10 sm:mb-0 dark:text-white">
        First Class Starlink Realty
        </p>
        {/* menu  */}
        <div className="relative flex gap-5 justify-center items-centers  sm:w-[450px]  dark:text-white ">
          <ul className="grid  sm:grid-cols-3 gap-5 text-center sm:gap-10 ">
            <li>
              <Link href="/" className="py-2 hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="#testimonial" className="py-2 hover:text-orange-500">
              Testimonial
              </Link>
            </li>
            <li>
              <Link href="#services" className="py-2 hover:text-orange-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about-container" className="py-2 hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link href="#listings" className="py-2 hover:text-orange-500">
                Listings
              </Link>
            </li>
            <li>
              <Link href="#contact" className="py-2 hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* rating */}
        <div className="flex flex-col items-center sm:items-start gap-1 mt-5 sm:mt-0">
          
          <div className="flex justify-center items-center p-2  dark:text-white">
            <p>Address: 200 TOWN CENTRE BLVD #105 Markham ON L3R 8G5
            <br/>Tel: 905-604-1010
            <br/>Email: jamieliurealtorgta@gmail.com
            </p>
            
          </div>
        </div>
      </div>

      {/* Row 2 */}

      <div className="relative py-0 px=[340px] border-t-2 border-solid border-[#EDEFF2] flex items-center justify-between gap-5">
        <p className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText dark:text-white">
          © 2025 Jamie Liu First Class Starlink Realty All Rights Reserved.
        </p>
        
        <div className="flex items-start p-4 gap-[57px]">
          <Link
            href="#"
            className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText hover:text-orange-500 dark:text-white"
          >
            terms
          </Link>
          <Link
            href="#"
            className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText  hover:text-orange-500 dark:text-white"
          >
            privacy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
