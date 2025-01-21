import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Input from './Input';

export default function ContactMe(){
    const [isSend, setIsSend]= useState(undefined);  
    const [nameIsInvalid, setNameIsInvalid]= useState(false);  
    const [emailIsInvalid, setEmailIsInvalid]= useState(false);  
    const [messageIsInvalid, setMessageIsInvalid]= useState(false);  
    
    const [enteredValue, setEnteredValue]= useState({
        name: '',
        email: '',
        message: '',
    })
    // const [notValid, setNotValid]= useState(true)
    const form = useRef();

    const formIsValid= enteredValue.name && enteredValue.email && enteredValue.message
    
    function handleChange(identifer, value){
        setEnteredValue((prevValues)=>({
            ...prevValues,
            [identifer]: value,
        }))
    }

    function handleClick(){
        setNameIsInvalid(() => {
            if(!enteredValue.name){
                return true;
            }
            if(enteredValue.name){
                return false;
            }
        })
        setEmailIsInvalid(() => {
            if(!enteredValue.email){
                return true;
            }
            if(enteredValue.email){
                return false;
            }
        })
        setMessageIsInvalid(() => {
            if(!enteredValue.message){
                return true;
            }
            if(enteredValue.message){
                return false;
            }
        })

        setIsSend(undefined);
    }
    // console.log(enteredValue);
    
    const timerResponse = (response)=>{
        setIsSend(response);
        setTimeout(()=>{
            setIsSend(undefined);
        }, 5000)
    };
    
    
    const sendEmail = (e) => {
        e.preventDefault();  
        if(formIsValid){
            e.target.reset()
            emailjs
                .sendForm('service_lh8x7yk', 'template_xfib54o', form.current, {
                publicKey: 'jvSM18jUrTRNQTF73',
                })
                .then(
                () => {
                        // console.log('SUCCESS!');
                        timerResponse(true);
                    },
                (error) => {
                        // console.log('FAILED...', error.text);
                        timerResponse(false);
                    },
                );
                setEnteredValue({
                    name: '',
                    email: '',
                    message: '',
                })
        }
    }
    let isSendClasses= 'fixed top-0 w-full text-center py-3 shadow-2xl';

    if(isSend){
        isSendClasses += '  bg-green-700';
    }else{
        isSendClasses += ' bg-red-700';
    }

    const blockValidation = 'text-red-900 mb-3';
    const hiddenValidation = 'text-transparent mb-3';
    return (
        <section id='contact' className='bg-cyan-700 mt-32'>
            {isSend !== undefined && <p className={isSendClasses}>
                {isSend ?'Email inviata con successo': 'La tua mail ha avuto un guasto'}
            </p>}
            <h2 className='bg-cyan-700 py-14  text-center text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-white'>Richiedi un <span className='text-black'>preventivo</span> </h2>
            <div className='flex justify-center'>
                <form className=' p-5 w-1/2 flex flex-col items-center' ref={form} onSubmit={sendEmail}>
                    <Input
                        onChange={(event)=>handleChange('name', event.target.value)}
                        value={enteredValue.name}
                        label="Nome" 
                        type="text" 
                        name="user_name"/>
                        <p className={nameIsInvalid ? blockValidation : hiddenValidation}>Campo richiesto</p>
                    <Input
                        onChange={(event)=>handleChange('email', event.target.value)}
                        value={enteredValue.email}
                        label="Email" 
                        type="email" 
                        name="user_email"/>
                        <p className={emailIsInvalid ? blockValidation : hiddenValidation}>Campo richiesto</p>

                    <Input
                        onChange={(event)=>handleChange('message', event.target.value)}
                        value={enteredValue.message}
                        label="Messaggio" 
                        name="user_message" 
                        isTextarea/>
                        <p className={messageIsInvalid ? blockValidation : hiddenValidation}>Campo richiesto</p>
                    <input 
                        onClick={()=>handleClick()}
                        type="submit" 
                        value="Invia" 
                        className='border-4 mt- border-cyan-900 font-bold rounded-lg w-5/12 md:w-1/6 py-1 bg-white text-cyan-900' />
                </form>
                
            </div>
        </section>
    )
}