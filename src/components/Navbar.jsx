function Navbar(){
    return (
        <nav className='col-start-1 col-span-3'>
            <ul className='flex gap-4 justify-center text-xs sm:text-sm md:text-lg text-black'>
                <li> <a href="#aboutMe">Chi sono</a></li>
                <li> <a href="#services">Servizi</a></li>
                <li> <a href="#contact">Contattami</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;