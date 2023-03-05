import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion'; 
import {fadeIn} from '../variants'; 

const services = [
  {
    name: 'UI/UX Design',
    description: 
      'I like designing diffrent websites and applications.',
    link: 'Learn More', 
  },
  {
    name: 'Frontend development',
    description: 
      'HTML, CSS, and JavaScript. Learning REACT.JS and Tailwind CSS.',
    link: 'Learn More', 
  },
  {
    name: 'Learning Backend development',
    description: 
      'I have some basic skills in php and learning rigth now javascript (backend).',
    link: 'Learn More', 
  },
  {
    name: 'Building computers',
    description: 
      '',
    link: 'Learn More', 
  },
]

const Services = () => {
  return( <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>

        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom  bg-no-repeat mix-blend-lighten mb-12 lg:mb-6' style={{marginRight:'10%'}}>
          <h2 className='h2 to-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16 '>Im mostly intrested in frontend development and UI/UX design.</h3>
           <button className='btn btn-sm'>See my work</button>
        </motion.div>

        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <div>
            {services.map((service, index) =>{
              const {name, description, link} = service; 
              return (
              
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex'  key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight/>
                  </a>
                  <a href='#' className='text-gradient text-sm'>{link}</a>
                </div>
              </div>
              );

            })}
          </div>
        </motion.div>

      </div>
    </div>
  </section>
  )};

export default Services;
