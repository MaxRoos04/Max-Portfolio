import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  }); 

  return(
  
  <section className='section' id='about' ref={ref}>
    <div className='conatiner mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top' style={{marginRight: "10%"}}></motion.div>
        
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm a student in information and communication technologies at Prakticum, studying my third and last year.</h3>
          <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ligula ut sapien mattis porttitor. Etiam ut mattis ipsum.</p>
        
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'> 
           <div>
            <div className='text-[40px] font-teritary text-gradient'>
              {
                inView ? <CountUp start={0}  end={3} duration={2}/> : 
                null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>Years of <br/>
            Studying
            </div>
          </div>
          <div>
            <div className='text-[40px] font-teritary text-gradient'>
              {
                inView ? <CountUp start={0}  end={5} duration={2}/> : 
                null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>Years of <br/>
            Programing
            </div>
          </div>
          <div>
            <div className='text-[40px] font-teritary text-gradient'>
              {
                inView ? <CountUp start={0}  end={0} duration={0}/> : 
                null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>Years of <br/>
            Work eperience
            </div>
          </div>
        </div>

        <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'>Contact me</button>
          <a href='#' className='text-gradient btn-link'>
            My portfolio
          </a>
        </div>
       </motion.div>
      </div>
    </div>
    </section>
)};

export default About;
