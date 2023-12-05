import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const services = [
  {
    name: 'Desarrollo Web',
    description: 'Mi trabajo es diseñar y construir sitios web funcionales y atractivos, utilizando una variedad de tecnologías y lenguajes de programación.',
   // link: 'Learn More',
  },
  {
    name: 'Diseño UI/UX',
    description: 'Mi enfoque es crear experiencias digitales cautivadoras y estéticamente agradables. Mi trabajo consiste en diseñar de forma intuitiva.',
    //link: 'Learn More',
  },
  {
    name: 'App Móvil',
    description: 'Me especializo en transformar conceptos creativos en aplicaciones móviles funcionales y atractivas.',
    // link: 'Learn More',
  },
]

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div
        variants={fadeIn('right', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 '>
          <h2 className='h2 text-accent mb-6'>Lo que hago</h2>
          <h3 className='h3 max-w-[455px] mb-6'>
          Soy Desarrollador Web
            </h3>
            <p className='mb-6 max-w-lg'>
            Me complace ofrecerte una gama completa de soluciones adaptadas 
            a tus necesidades específicas. Mi enfoque integral abarca desde 
            el desarrollo web hasta el diseño UI/UX y la creación de aplicaciones 
            móviles. Cada servicio se desarrolla con un compromiso inquebrantable 
            hacia la calidad y la innovación, respaldado por mi experiencia en 
            diversas tecnologías y enfoques creativos.
            </p>
            <Link to='work'> 
            <button className='btn btn-sm'>Ver mi trabajo</button>
            </Link>
        </motion.div>
         {/* services */}
         <motion.div
        variants={fadeIn('left', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.3 }}
         className='flex-1'>
          {/* services list */}
          <div>
            {services.map((service, index) => {
              const { name, description, link } = service;
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider
                    font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-light'>{description}</p>
                  </div>
                  {/*} <div className='flex flex-col flex-1 items-end'> */}
                   {/* <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center
                    items-center'>
                      <BsArrowUpRight />
                      </a>
              <a href='#' className='text-gradient text-sm'>{link}</a> */}
                 {/* </div> */}

                </div>
              );
            })}
          </div>
         </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
