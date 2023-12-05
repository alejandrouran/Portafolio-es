import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto px-8'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('right', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:m-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
            Mi último <br /> trabajo</h2>
            <p className='max-w-md mb-16'>
            En mi portafolio, los invito a explorar un conjunto diverso 
            de proyectos web que reflejan mi compromiso con la excelencia 
            en el desarrollo. Cada obra es el resultado de un minucioso 
            proceso creativo y técnico. </p>
            {/* <button className='btn btn-sm'>
                View all projects
  </button> */}
          </div>
          {/* image */}
          <a href='https://github.com/alejandrouran/AirBnB_clone'>
          
          <div className='group relative overflow-hidden border-2 border-white/50
          rounded-xl cursor-pointer'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all
            duration-500 z-50'><span className='text-gradient'>Desarrollo Web</span></div>
              {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all
            duration-700 z-50'>
              <span className='text-3xl text-white'>Airbnb Clon</span>
            </div> 
        </div>          
          </a>   
        </motion.div>

        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex flex-col gap-y-10'>
          {/* image */}

          <a href='https://github.com/alejandrouran/e-commerce-react'>
          <div className='group relative overflow-hidden border-2 border-white/50
          rounded-xl cursor-pointer'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all
            duration-500 z-50'><span className='text-gradient'>Desarrollo Web</span></div>
              {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all
            duration-700 z-50'>
              <span className='text-3xl text-white'>E Commerce React</span>
            </div>   
          </div>
          </a>
          
          <a href='https://github.com/alejandrouran/holbertonschool-smiling-school-javascript'>
          <div className='group relative overflow-hidden border-2 border-white/50
          rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all
            duration-500 z-50'><span className='text-gradient'>Desarrollo Web</span></div>
              {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all
            duration-700 z-50'>
              <span className='text-3xl text-white'>Smiling School</span>
            </div>      
          </div>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Work;
