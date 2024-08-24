import Logo from '../assets/logo.png'
import Navbar from './Navbar';

function Header(){
    return (
        <header className=" grid grid-cols-3 grid-rows-3 backdrop:blur-sm">
            <div className='col-start-1 col-span-3'>
                <img className='w-16 ' src={Logo} alt="" />
            </div>
            <div className='col-start-1 col-span-3 flex-col myborder'>
                <h1 className=" text-center text-6xl sm:text-7xl md:text-8xl text-white text-3xl">Antonio Anfuso</h1>
                <Navbar/>
            </div>
        </header>
    )
}

export default Header;