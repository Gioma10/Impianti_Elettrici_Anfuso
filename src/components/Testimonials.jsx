// import Icon from '../assets/aboutMe/avatarIcon.jpg'
// import Male from '../assets/testimonials/male1.png'
// import Female from '../assets/testimonials/female1.png'
// import IconTest from '../assets/testimonials/genericIcon.png'

// const TESTIMONIALS =[
//     {id:1, image: Male, name: 'Marco', text: `"Fantastico! Problema di illuminazione risolto in un'ora. Molto professionale!"` },
//     {id:2, image: Female, name: 'Stefania', text: `"Installazione di nuovi punti luce impeccabile. Veloce e preciso, consiglio!"` },
//     {id:3, image: Male, name: 'Gianfranco', text: `"Impianto elettrico riparato in modo efficiente. Ottima comunicazione e lavoro!"` },
//     {id:4, image: Male, name: 'Luca', text: `"Corto circuito risolto senza problemi. Elettricista disponibile e competente!"` },
//     {id:5, image: Female, name: 'Vincenza', text: `"Illuminazione esterna splendida! Idee creative e lavoro rapido. Molto soddisfatta!"` },
// ]

// export default function Testimonials(){

    
//     return (
//         <section className='border-y-4 border-cyan-900 pb-16 px-16'>
//             <h2 className="text-center text-5xl sm:text-5xl md:text-6xl lg:text-7xl my-10">Dicono di <span className='text-cyan-700'>me</span></h2>
//             <div className='relative h-40 md:h-60 lg:h-56 xl:h-52 gap-4 overflow-hidden test-wrapper'>
//                 {TESTIMONIALS.map((test)=>{
//                     let testClass = "border-2 border-cyan-700 bg-cyan-50 w-40 h-40 md:w-44 md:h-60 lg:w-60 lg:h-56 xl:w-80 xl:h-52 flex flex-col rounded-lg items-center absolute testimonial test1 right-full"
//                     switch (true) {
//                         case test.id === 1:
//                             testClass += " test1"
//                             break;
//                         case test.id === 2:
//                             testClass += " test2"
//                             break;
//                         case test.id === 3:
//                             testClass += " test3"
//                             break;
//                         case test.id === 4:
//                             testClass += " test4"
//                             break;
//                         case test.id === 5:
//                             testClass += " test5"
//                             break;
//                     }
                    
//                     return (
//                     <div key={test.id} id={test.id} className={testClass}>
//                         <img src={test.image} alt="" className='p-2 w-10 md:w-20 rounded-full '/>
//                         <h3>{test.name}</h3>
//                         <p className='p-3 md:text-base text-xs text-center'>{test.text}</p>
//                     </div>
//                     )
//                 })}                
//             </div>
//         </section>
//     )
// }