import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {useState} from 'react';
import Spina from '../assets/spina.png'
import photoGallery from '../photoWork.js'

function WorksGallery(){
    const [currentIndex, setCurrentIndex]= useState(0);

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
        <>
        <section className="myborder h-3/5 w-full py-16 px-4 flex justify-center bg-sky-950 relative group">
            <img src={Spina} alt="" className='w-1/6 absolute top-0 left-0 myborder' />
            <img src={Spina} alt="" className='w-1/6 absolute rotate-180 bottom-0 right-0 myborder' />
            <div style={{backgroundImage: `url(${photoGallery[currentIndex].url})`}} className="border-2 border-cyan-50 w-2/4 rounded-2xl bg-center bg-cover h-full duration-500 relative">
                {/* Left arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                </div>
                {/* Right arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30}/>
                </div>
            </div>
            
        </section>
        
        </>
    )
}

export default WorksGallery;