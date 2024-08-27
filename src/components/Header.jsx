import Logo from '../assets/logo.png'
import Navbar from './Navbar.jsx';
import WorksGallery from './WorksGallery.jsx'


function Header(){
    return (
        <header className='bg-cyan-800 h-screen'>
            <div className="hero h-2/5 grid grid-cols-3 grid-rows-3">
                <div className='col-start-1 col-span-3'>
                    <img className='w-8 sm:w-12 md:w-14 lg:w-16 ' src={Logo} alt="" />
                </div>
                <div className='col-start-1 col-span-3 flex-col'>
                    <h1 className=" text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white">Antonio Anfuso</h1>
                    <Navbar/>
                </div>
            </div>
            <WorksGallery />
        </header>
    )
}

export default Header;