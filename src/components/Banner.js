import React from 'react';
import Image from '../assets/avatar.png';
import{FaGithub, FaYoutube, FaInstagram} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'; 
import {motion} from 'framer-motion'; 
import {fadeIn} from '../variants'; 

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            Max <span>Roos</span></h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am </span>
            <TypeAnimation sequence={[
              'Developer', 
              2000,
              'Student', 
              2000,
              'Certified gymbro', 
              2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />    
         </div>
         <p className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ligula ut sapien mattis porttitor. Etiam ut mattis ipsum. </p>
         
         <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          <button className='btn btn-lg'>Contact me</button>
          <a href='#' className='text-gradient btn-link'>My Portfolio</a>
         </div>

         <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href='#'>
            <FaYoutube/>
          </a>
          <a href='#'>
            <FaGithub/>
          </a>
          <a href='#'>
            <FaInstagram/>
          </a>
         </div>
        </div>

        <div style={{width:'50%'}}>
          <img src={Image} alt=''/>
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
