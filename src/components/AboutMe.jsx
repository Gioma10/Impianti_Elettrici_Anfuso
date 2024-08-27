import AvatarIcon from '../assets/aboutMe/avatarIcon.jpg'
import Spina from '../assets/spina.png';

export default function AboutMe(){
    return (
        <section id='aboutMe' className="myborder bg-cyan-950 h-screen grid grid-rows-7 items-center relative">
            <img src={Spina} alt="" className='w-1/6 absolute top-0 right-0 myborder' />
            <h2 className="myborder row-start-1 text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl">Dicono di me</h2>
            <div className=' row-start-4 myborder grid grid-cols-6 gap-4 justify-items-center'>
                <img src={AvatarIcon} alt="" className='col-start-2 col-span-2 w-full rounded-full place-self'/>
                <p className='col-start-4 col-span-2 self-center p-10'>
                Ciao! Sono Antonio Anfuso, elettricista professionista con oltre [x] anni di esperienza. La mia passione per l’elettricità è nata fin da giovane, e oggi mi dedico a realizzare impianti sicuri ed efficienti sia in ambito civile che industriale.
                Nel mio lavoro metto al primo posto le esigenze dei clienti, garantendo sempre la massima qualità e conformità alle normative. Sono specializzato in [specializzazione, es. "automazione domestica"] e aggiornato sulle ultime tecnologie, per offrirti soluzioni innovative e sostenibili.
                Se cerchi un elettricista affidabile e competente, sono qui per aiutarti con qualsiasi progetto, grande o piccolo. Contattami per un servizio professionale su misura per le tue necessità.
                </p>
            </div>
        </section>
    )
}