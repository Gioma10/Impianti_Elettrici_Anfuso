import AvatarIcon from '../assets/aboutMe/avatarIcon.jpg'

export default function AboutMe(){
    return (
        // <section id='aboutMe' className="about-me h-screen grid grid-rows-7 content-end items-center relative">
        //     <h2 className="row-start-1 text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl">Chi <span className='text-cyan-700'> sono </span></h2>
        //     <div className=' gap-2 grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 row-start-4 md:row-span-3 md:row-start-3 md:content-center grid lg:grid-cols-6 justify-items-center'>
        //         <img src={AvatarIcon} alt="" className='w-1/3 sm:w-1/4 md:w-full row-start-1 md:row-start-1 md:col-start-1  lg:col-start-2 lg:col-span-2 rounded-full self-end md:self-center border-2 border-black'/>
        //         <p className='text-xs p-6 row-start-2 md:row-start-1 md:col-start-2 w-7/8 sm:w-2/3 md:text-sm md:w-full  lg:col-start-4 lg:col-span-2 self-center bg-cyan-700 rounded-3xl'>
        //             Ciao! Sono Antonio Anfuso, elettricista professionista con oltre [x] anni di esperienza. La mia passione per l’elettricità è nata fin da giovane, e oggi mi dedico a realizzare impianti sicuri ed efficienti sia in ambito civile che industriale.
        //             Nel mio lavoro metto al primo posto le esigenze dei clienti, garantendo sempre la massima qualità e conformità alle normative. Sono specializzato in [specializzazione, es. "automazione domestica"] e aggiornato sulle ultime tecnologie, per offrirti soluzioni innovative e sostenibili.
        //             Se cerchi un elettricista affidabile e competente, sono qui per aiutarti con qualsiasi progetto, grande o piccolo. Contattami per un servizio professionale su misura per le tue necessità.
        //         </p>
        //     </div>
        // </section>
        <section id='aboutMe' className='about-me'>
            <h2 className="my-10 text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl">Chi <span className='text-cyan-700'> sono </span></h2>
            <div className='w-full h-full flex justify-center items-center '>
                
                <p className='smallest-p w-5/6 text-xs sm:text-sm md:text-base md:w-2/3 xl:w-1/2 p-10 bg-cyan-700 rounded-3xl relative'>
                    Ciao! Sono Antonio Anfuso, elettricista professionista con oltre [x] anni di esperienza. La mia passione per l’elettricità è nata fin da giovane, e oggi mi dedico a realizzare impianti sicuri ed efficienti sia in ambito civile che industriale.
                    Nel mio lavoro metto al primo posto le esigenze dei clienti, garantendo sempre la massima qualità e conformità alle normative. Sono specializzato in [specializzazione, es. "automazione domestica"] e aggiornato sulle ultime tecnologie, per offrirti soluzioni innovative e sostenibili.
                    Se cerchi un elettricista affidabile e competente, sono qui per aiutarti con qualsiasi progetto, grande o piccolo. Contattami per un servizio professionale su misura per le tue necessità.
                    <img src={AvatarIcon} alt="" className='absolute -top-8 -left-8 sm:-top-12 sm:-left-12 md:-top-12 md:-left-12 lg:-top-16 lg:-left-16 rounded-full smallest-position w-1/6  border-2 border-black'/>
                </p>
            </div>

        </section>
    )
}