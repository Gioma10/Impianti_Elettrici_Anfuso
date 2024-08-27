function Navbar(){
    return (
        <nav className='col-start-1 col-span-3'>
            <ul className='flex gap-4 justify-center text-xs sm:text-sm md:text-lg text-white'>
                <li> <a className='#aboutMe' href="">Dicono di me</a></li>
                <li> <a className='#services' href="">Servizi</a></li>
                <li> <a className='#contact' href="">Contattami</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;