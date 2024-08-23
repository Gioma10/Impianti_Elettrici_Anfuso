import Logo from '../assets/logo.png'

function Header(){
    return (
        <header className=" grid grid-cols-3 grid-rows-3 myborder">
            <div className='col-start-1 col-span-3   myborder'>
                <img className='w-16 ' src={Logo} alt="" />
            </div>
            <div className='col-start-2 h-2/3 flex items-center justify-center  myborder'>
                <h1 className=" text-white text-3xl">Antonio Anfuso</h1>
            </div>
        </header>
    )
}

export default Header;