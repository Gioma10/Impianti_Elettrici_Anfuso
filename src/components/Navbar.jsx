function Navbar(){
    return (
        <nav>
            <ul className='flex gap-4 justify-center text-xs sm:text-sm md:text-lg text-black'>
                <li className="relative"> <a className="bordy-animation" href="#aboutMe">Chi sono</a></li>
                <li className="relative"> <a className="bordy-animation" href="#services">Servizi</a></li>
                <li className="relative"> <a className="bordy-animation" href="#contact">Contattami</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;