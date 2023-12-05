import React, { useState } from "react";

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaSass,
  FaPython,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMysql,
  SiAdobexd,
  SiAdobephotoshop,
  SiDart,
  SiFlutter,
  SiTailwindcss,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: 'Habilidades',
    info: [
      {
        title: 'Desarrollo Web',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaSass />,
          <FaBootstrap />,
          <SiTailwindcss />,
          <FaWordpress />,
          <FaPython />,
          <SiMysql />,
          
        ],
      },
      {
        title: 'Diseño UI/UX',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'App Móvil',
        icons: [<SiDart/>, <SiFlutter />,],
      },
    ],
  },
 
];

const About = () => {
 //prueba 
  const [index, setIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  //prueba
  return ( 
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* img */}
        
         {/* text */}
         <motion.div 
         variants={fadeIn('rigth', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.3 }}
         className='flex-1 max-w-lg'>
          <h2 className='h2 text-accent'>Acerca de mí</h2>
          <h3 className='h3 mb-4'>Soy Desarrollador Web</h3>
          <p className='mb-6'>
          He tenido el privilegio de participar en diversos proyectos tanto
          de manera individual como en equipo, lo que me ha permitido 
          adquirir un amplio conocimiento y experiencia en la creación 
          de páginas web con accesibilidad y diseño responsivo.
          <br />
          <br />
          Mi enfoque orientado a desafíos me impulsa constantemente a 
          aprender nuevos conceptos y a resolver problemas de manera creativa. 
          Estoy preparado para asumir cualquier reto que se presente y generar 
          valor en cada proyecto en el que participe.
          </p>
          {/* stats */}
          {/* stats 
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[35px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={1} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                experience
              </div>
            </div>
            <div>
              <div className='text-[35px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                K+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed
              </div>
            </div>
            <div>
              <div className='text-[35px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                K+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Clients of <br />
                Satisfied
              </div>
            </div>
          </ div> */}

          <div className='flex gap-x-8 items-center'>
 
            <Link to='contact'> 
            <button className='btn btn-lg'>Contáctame</button>
            </Link>
            <a href='#' className='text-gradient btn-link'>
              Mi Portafolio
            </a>
          </div>
         </motion.div>
         <div className="h-full  py-32 text-center xl:text-left">
   
   {/* avatar img */}
  
   <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6-'>
     {/* text */}
     <div className="flex-1 flex flex-col justify-center">
       
       {/* counters */}
       
       </div> 
     {/* info */}  
     <motion.div 
     variants={fadeIn('left', 0.4)} 
     initial="hidden" 
     animate="show"
     exit="hidden"
     className="flex-1">
       <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
       {aboutData.map((item, itemIndex) => {
         return (
         <div 
         key={itemIndex} 
         className={`${
           index === itemIndex && 
           'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
           cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1
         after:left-0`}
         onClick={() => setIndex(itemIndex)}
         >
         {item.title}
         </div>
         );
       })}
       </div>
       
       <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
       items-center xl:items-start">
         {aboutData[index].info.map((item, itemIndex) => {
           return (
             <div key={itemIndex} 
               className="flex-1 flex flex-col md:flex-row max-w-max
               gap-x-2 items-center text-white/60">
               {/* title */}
               <div className="font-light mb-2 md:mb-0">{item.title}</div>
               <div className="hidden md:flex">-</div>
               <div>{item.stage}</div>
               <div className="flex gap-x-4">
             |   {/* icons */}
                 {item.icons?.map((icon, itemIndex) => {
                 return <div className="text-2xl text-white">{icon}</div>;
               })}
               </div>
               
             </div>
             
           );
         })}

       </div>
       <a href='https://drive.google.com/file/d/14dkzRHcyJhSZ4RzpCXuLikIj7d5syDKv/view?usp=sharing'>
       <button className='btn btn-lg'>Descargar CV</button>
       </a>
     </motion.div>
   </div>
 </div>
      </div>
    </div>
   
  </section>
  );
};

export default About;
