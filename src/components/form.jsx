import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usernameIcon from '../assets/icons/Icon.png';
import callIcon from '../assets/icons/callIcon.png';
import emailIcon from '../assets/icons/email.png';
import messageIcon from '../assets/icons/message.png';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]*$/, 'Invalid phone number, please enter numbers only')
    .required('Phone number is required'),
  message: yup.string().required('Message is required'),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      console.log(data);
      const response = await axios.post('/api/sendEmail', data);
      console.log(response.data);
      toast.success('Form submitted successfully!');
      reset();
    } catch (error) {
      console.error(error);
      toast.error('Failed to submit form');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative p-4 mb-4">
      <div className="relative">
        <div className="flex flex-col justify-center items-center  mt-20">
          <p className="text-9xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
            contact
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-7 sm:mt-14 dark:text-gray-300">
            Get in touch
          </p>
        </div>
      </div>

      {/* FORM */}

      <div className="sm:flex justify-center items-center mt-[60px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="sm:flex flex-col justify-center items-center gap-[30px] p-0 w-[670px] h-full ">
            {/* 1st row */}
            <div className="sm:flex items-start p-0 gap-[30px] w-full h-[60px] relative">
              <div className="flex flex-col">
                <label className="relative">
                  <input
                    {...register('firstName')}
                    name="firstName"
                    placeholder="First Name"
                    className="flex justify-between items-center rounded-xl py-[15px] px-[30px] shadow-md sm:w-[320px] h-[60px] capitalize mb-5 sm:mb-0 dark:bg-gray-600"
                  />
                  <Image
                    src={usernameIcon}
                    alt="username icon"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.firstName && (
                  <span className=" text-red-500 text-xs text-center mt-1">
                    required
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label className="relative">
                  <input
                    {...register('lastName')}
                    name="lastName"
                    placeholder="Last Name"
                    className="flex justify-between items-center  rounded-xl py-[15px] px-[30px] shadow-md sm:w-[320px] h-[60px] capitalize mb-5 sm:mb-0 dark:bg-gray-600"
                  />
                  <Image
                    src={usernameIcon}
                    alt="username icon"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.lastName && (
                  <span className="text-red-500 text-xs mt-1 text-center">
                    required
                  </span>
                )}
              </div>
            </div>

            {/* 2nd row */}
            <div className="sm:flex items-start p-0 gap-[30px] w-full h-[60px] relative mt-36 sm:mt-0">
              <div className="flex flex-col">
                <label className="relative ">
                  <input
                    {...register('email')}
                    name="email"
                    placeholder="Email Address"
                    className="flex justify-between items-center  rounded-xl py-[15px] px-[30px] shadow-md sm:w-[320px] h-[60px] capitalize  mb-5  sm:mb-0 dark:bg-gray-600"
                  />
                  <Image
                    src={emailIcon}
                    alt="email icon"
                    className="w-5 h-4 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.email && (
                  <span className="text-red-500 text-xs text-center">
                    required
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label className="relative">
                  <input
                    {...register('phoneNumber')}
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="flex justify-between items-center  rounded-xl py-[15px] px-[30px] shadow-md sm:w-[320px] h-[60px] mb-5  sm:mb-0 dark:bg-gray-600"
                  />
                  <Image
                    src={callIcon}
                    alt="phone icon"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.phoneNumber && (
                  <span className="text-red-500 text-xs text-center">
                    required
                  </span>
                )}
              </div>
            </div>

            {/* 3rd row  */}

            <div className="sm:flex justify-between items-center p-0 gap-[10px] w-full h-[60px] relative mt-36 sm:mt-0">
              <div className="flex flex-col">
                <label className="relative">
                  <input
                    {...register('message')}
                    name="message"
                    placeholder="Your Message"
                    className="flex justify-between items-center  rounded-xl py-[15px] px-[30px] shadow-md sm:w-[670px] h-[60px] overflow-ellipsis overflow-hidden dark:bg-gray-600"
                  />
                  <Image
                    src={messageIcon}
                    alt="message"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.message && (
                  <span className="text-red-500 text-xs text-center">
                    required
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="flex justify-center items-center py-[15px] px-[35px] bg-blue-900 hover:bg-[#11266e] rounded-[30px] capitalize text-white mt-7 sm:mt-0"
            >
              send request
            </button>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

