import Icon from '../assets/aboutMe/avatarIcon.jpg'
import IconTest from '../assets/testimonials/genericIcon.png'

const TESTIMONIALS =[
    {id:1, image: '', name: 'Marco', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    {id:2, image: '', name: 'Stefania', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    {id:3, image: '', name: 'Gianfranco', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    {id:4, image: '', name: 'Luca', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    {id:5, image: '', name: 'Vincenza', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
]

export default function Testimonials(){
    return (
        <section className='border-y-4 border-cyan-900 p-16'>
            <div className='relative h-44 overflow-hidden test-wrapper'>
                {TESTIMONIALS.map((test)=>{
                    let testClass = "border-2 border-cyan-900 bg-cyan-50 w-80 h-44 flex flex-col rounded-lg items-center absolute testimonial test1 right-full"
                    switch (true) {
                        case test.id === 1:
                            testClass += " test1"
                            break;
                        case test.id === 2:
                            testClass += " test2"
                            break;
                        case test.id === 3:
                            testClass += " test3"
                            break;
                        case test.id === 4:
                            testClass += " test4"
                            break;
                        case test.id === 5:
                            testClass += " test5"
                            break;
                    }
                    
                    return (
                    <div id={test.id} className={testClass}>
                        <img src={IconTest} alt="" className=' w-28 rounded-full '/>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    )
                })}                
            </div>
        </section>
    )
}