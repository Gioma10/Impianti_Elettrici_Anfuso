import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {useEffect, useState} from 'react';
import Spina from '../assets/spina.png'
import photoGallery from '../photoWork.js'

function WorksGallery(){
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
        <>
        <section className="bg-cyan-700 h-2/4 w-full py-16 px-4 flex justify-center bg-gradient-to-t relative group">
            <img src={Spina} alt="" className='w-1/6 absolute top-0 left-0' />
            <img src={Spina} alt="" className='w-1/6 absolute rotate-180 bottom-0 right-0' />
            <div style={{backgroundImage: `url(${photoGallery[currentIndex].url})`}} className="border-2 border-black w-2/4 rounded-2xl bg-center bg-cover h-full duration-500 relative">
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