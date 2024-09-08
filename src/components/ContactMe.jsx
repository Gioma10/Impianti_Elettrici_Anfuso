import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Input from './Input';

export default function ContactMe(){
    const [isSend, setIsSend]= useState(undefined);
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs
        .sendForm('service_lh8x7yk', 'template_xfib54o', form.current, {
          publicKey: 'jvSM18jUrTRNQTF7',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setInterval(()=>{
                
            },5000)
          },
          (error) => {
            console.log('FAILED...', error.text);
            setInterval(()=>{
              
            },5000)
          },
        );
    }
    let isSendClasses= 'fixed top-0 w-full text-center py-3 shadow-2xl';

    if(isSend){
        isSendClasses += '  bg-green-700';
    }else{
        isSendClasses += ' bg-red-700';
    }

    
    return (
        <section id='contact' className='mt-32'>
            {isSend !== undefined && <p className={isSendClasses}>
                {isSend ?'Email inviata con successo': 'La tua mail ha avuto un guasto'}
            </p>}
            <h2 className='bg-cyan-700 py-14  text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white'>Richiedi un <span className='text-cyan-900'>preventivo</span> </h2>
            <div className='flex justify-center'>
                <form className='p-5 w-1/2 flex flex-col items-center' ref={form} onSubmit={sendEmail}>
                    <Input label="Nome" type="text" name="user_name"/>
                    <Input label="Email" type="email" name="user_email"/>
                    <Input label="Messaggio" name="message" isTextarea/>
                    <input type="submit" value="Invia" className='border-4 border-cyan-700 font-bold rounded-lg w-5/12 md:w-1/6 py-1 text-cyan-900' />
                </form>
                
            </div>
        </section>
    )
}