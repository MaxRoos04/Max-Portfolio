import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion'; 
import {fadeIn} from '../variants'; 

const services = [
  {
    name: 'U1/UX Design',
    description: 
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ligula ut sapien mattis porttitor. Etiam ut mattis ipsum.',
    link: 'Learn More', 
  },
  {
    name: 'Development',
    description: 
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ligula ut sapien mattis porttitor. Etiam ut mattis ipsum.',
    link: 'Learn More', 
  },
  {
    name: 'Digital Marketing',
    description: 
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ligula ut sapien mattis porttitor. Etiam ut mattis ipsum.',
    link: 'Learn More', 
  },
  {
    name: 'Product Branding',
    description: 
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ligula ut sapien mattis porttitor. Etiam ut mattis ipsum.',
    link: 'Learn More', 
  },
]

const Services = () => {
  return( <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>

        <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-6'>
          <h2 className='h2 to-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Im mostly intrested in frontend development and UI/UX</h3>
           <button className='btn btn-sm'>See my work</button>
        </div>

        <div className='flex-1'>
          <div>
            {services.map((service, index) =>{
              const {name, description, link} = service; 
              return (
              
              <div key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div>{link}</div>
              </div>
              );

            })}
          </div>
        </div>

      </div>
    </div>
  </section>
  )};

export default Services;
