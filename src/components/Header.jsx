import { useState, useEffect } from 'react';
import Logo from '../assets/logo.png'
import Navbar from './Navbar.jsx';
import Hero from '../assets/hero.jpeg'
// import WorksGallery from './WorksGallery.jsx'
import photoGallery from '../photoWork.js'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'


function Header(){
    const [currentIndex, setCurrentIndex]= useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex) => {
                    if(prevIndex === photoGallery.length - 1){
                        return 0;
                    }
                    return prevIndex + 1
                }
            )}, 3000)
    

        return ()=> clearInterval(interval);
    }, [currentIndex])    
    
        const prevSlide = ()=>{
            const isFirstSlide = currentIndex === 0;
            const newIndex= isFirstSlide ? photoGallery.length-1 : currentIndex - 1;
            setCurrentIndex(newIndex);
        };
    
        const nextSlide = ()=>{
            const isLastSlide = currentIndex === photoGallery.length - 1;
            const newIndex= isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        };
    
    return (
        // <header style={{backgroundImage: `url(${photoGallery[currentIndex].url})`}} className=' h-1/2 bg-cover bg-center bg-fixed duration-500'>
        <header className='h-screen bg-contain bg-center duration-500'>
                
            <div className="bg-cyan-700 grid md:grid-cols-2 lg:grid-cols-3 h-full hero">
                <div className='cols-start-1 col-span-1 place-self-center flex-col'>
                    <h1 className=" text-center text-6xl sm:text-7xl md:text-6xl lg:text-7xl text-black">Antonino <br /> <span className='text-white'>Anfuso</span> </h1>
                    <Navbar/>
                    {/* <div className=' sticky top-0 w-16'>
                        <img className='w-24 sm:w-28 md:w-36 ' src={Logo} alt="" />
                    </div> */}
                </div>
                <div style={{backgroundImage: `url(${photoGallery[currentIndex].url})`}} className="cols-start-2 lg:col-span-2 w-full h-full bg-center bg-cover duration-500 relative group">
                    {/* Left arrow */}
                    {/* <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white z-10 cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                    </div> */}
                    {/* Right arrow */}
                    {/* <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                      <BsChevronCompactRight onClick={nextSlide} size={30}/>
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default Header;