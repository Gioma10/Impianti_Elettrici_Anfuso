function Navbar(){
    return (
        <nav className='col-start-1 col-span-3'>
            <ul className='flex gap-4 justify-center text-xs sm:text-sm md:text-lg text-white'>
                <li> <a href="#aboutMe">Dicono di me</a></li>
                <li> <a href="#services">Servizi</a></li>
                <li> <a href="#contact">Contattami</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;