import AvatarIcon from '../assets/aboutMe/avatarIcon.jpg'

export default function AboutMe(){
    return (
        <section className="myborder bg-sky-950 h-screen grid grid-rows-2 items-center">
            <h2 className="myborder row-start-1 text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white">Dicono di me</h2>

            <div className=' row-start-2 myborder grid grid-cols-4 gap-4 place-items-center'>
                <img src={AvatarIcon} alt="" className='col-start-2 col-span-1 w-60 h-60 rounded-full'/>
                <p className='col-start-3 col-span-1 self-center'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum autem ipsa libero ex eos deserunt culpa possimus quis, dolore laudantium quod veniam excepturi dicta. Vero dolore facere ipsa ipsum dolorem!
                </p>
            </div>
        </section>
    )
}