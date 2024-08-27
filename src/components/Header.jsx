import Logo from '../assets/logo.png'
import Navbar from './Navbar.jsx';
import WorksGallery from './WorksGallery.jsx'
import heroBg from '../assets/hero.png'

function Header(){
    return (
        <header className='bg-cyan-800 h-screen'>
            <div className="place-items-center hero h-2/4 grid grid-cols-3 grid-rows-2 relative">
            {/* <img src={Spina} alt="" className='w-1/6 absolute rotate-180 bottom-0 left-0' /> */}
                <div className='col-start-2 col-span-1'>
                    <img className='w-8 sm:w-12 md:w-14 lg:w-36 ' src={Logo} alt="" />
                </div>
                <div className=' col-start-1 col-span-3 flex-col'>
                    <h1 className=" text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white">Antonio Anfuso</h1>
                    <Navbar/>
                </div>
            </div>
            <WorksGallery />
        </header>
    )
}

export default Header;