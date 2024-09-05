import { FaIntercom, FaTv, FaWifi, FaBolt} from "react-icons/fa";
import { PiSecurityCameraFill } from "react-icons/pi";
import { FaScrewdriverWrench } from "react-icons/fa6";


const SERVICES= [
    {id:1 , title: ' Impianti Elettrici', description:'Installazione di impianti elettrici personalizzate per ogni esigenza' , icon: <FaBolt size={36}/> },
    {id:2 , title: 'Riparazione & Manutenzione', description:'Riparazione guasti e manutenzione della rete elettrica' , icon: <FaScrewdriverWrench size={36}/> },
    {id:3 , title: 'Citofono & Videocitofono', description:'Installazione e manutenzione della rete Citofonica e Videocitofonica' , icon: <FaIntercom size={36}/>},
    {id:4 , title: ' TV', description:"Installazione e configurazione di impianti TV, inclusi sistemi satellitari" , icon: <FaTv size={36}/>,},
    {id:5 , title: 'Wifi', description:'Installazione e riparazione guasti della rete internet.' , icon: <FaWifi size={36}/>,},  
    {id:6 , title: 'Antifurto & Videosorveglianza', description:'Installazione sistemi di videosorveglianza e antifurto' , icon: <PiSecurityCameraFill size={36}/>,},
];

export default function Services(){
    return (
        <section id="services">
            <h2 className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl my-10">Servizi</h2>
            <div className="grid grid-cols-1 md-grid-rows-3 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:grid-rows-2 px-10 sm:px-36 h-full">
                {SERVICES.map((service)=>{
                    return (
                        <div key={service.id} className='justify-self-center w-full shadow-lg hover:shadow-cyan-950 text-center p-10 border-2 border-cyan-700 rounded-2xl'>
                            <div className='flex justify-center'>
                                {service.icon}
                            </div>
                            <h3 className='pt-2 pb-5 font-bold'> {service.title} </h3>
                            <p className='text-xs sm:text-sm text-center'>{service.description}</p>
                        </div>
                    )
                })}
                
            </div>
            
        </section>
    )
}