import { motion } from 'framer-motion';
import { fadeIn } from '../variants'; 

const Contact = () => {
  return (
  <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2
            tracking-wide'>
              Ponerse en contacto
            </h4>
            <h2 className='text-[45px] lg:text-[72px] leading-none mb-12'>
            Vamos a trabajar <br />
            juntos! </h2>
            <div>
              <h5 className='text-xl uppercase font-semibold font-medium mb-2'>
                Contacto
              </h5>
              <p><strong>Nombre:</strong>  Alejandro Urán </p>
              <p><strong>E-mail:</strong>  alejandrouranarboleda@gmail.com </p>
            </div>
          </div>
          
        </motion.div>
         {/* form */}
         <motion.form
         variants={fadeIn('left', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.3 }}
         className='flex-1 border rounded-2xl flex flex-col gap-y-6
         pb-24 p-6 items-start'>
          <input className='bg-transparent border-b py-3 outline-none w-full
          placeholder:text-white focus:border-accent transition-all' 
          type='text'
          placeholder='Tu nombre' 
          />

           <input className='bg-transparent border-b py-3 outline-none w-full
          placeholder:text-white focus:border-accent transition-all' 
          type='text'
          placeholder='Tu correo' />

           <textarea className='bg-transparent border-b py-12 outline-none w-full
          placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
          placeholder='Tu mensaje'
          ></textarea>
          <button className='btn btn-lg'>Enviar mensaje</button>
         </motion.form>
      </div>
    </div>

   
                
            
    </section>
    

  );
};

export default Contact;
