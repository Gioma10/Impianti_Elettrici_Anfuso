import Logo from '../assets/logo.png'
import Navbar from './Navbar.jsx';
import WorksGallery from './WorksGallery.jsx'

function Header(){
    return (
        <header className=' h-screen'>
            <div className="place-items-center h-2/4 grid grid-cols-3 content-center grid-rows-2 relative hero">
                <div className='col-start-2 col-span-1'>
                    <img className='w-8 sm:w-12 md:w-14 lg:w-36 ' src={Logo} alt="" />
                </div>
                <div className='place-self-start justify-self-center col-start-1 col-span-3 flex-col'>
                    <h1 className=" text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-black">Antonio <span className='text-cyan-700'>Anfuso</span> </h1>
                    <Navbar/>
                </div>
            </div>
            <WorksGallery />
        </header>
    )
}

export default Header;