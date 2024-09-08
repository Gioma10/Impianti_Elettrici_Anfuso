export default function Footer(){
    return (
        <footer className="bg-cyan-700 flex items-center gap-10 justify-end">

            <div >
                <ul>
                    <li>Apertura <br /> <span className="text-sm text-stone-300">8:00/13:00 - 15:00/18:00</span></li>
                    <li className="my-10">Email<br /> <span className="text-sm text-stone-300">admin@gmail.com</span></li>
                    <li>Telefono <br /> <span className="text-sm text-stone-300">+39 1234567890</span></li>
                </ul>
                <p> </p>
                <p></p>
                <p></p>
            </div>
            <div className="m-10 map-responsive w-2/3">
                <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Catania+(Impianti%20Elettrici%20Anfuso)&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps tracker sport</a>
                </iframe>
            </div>
            
        </footer>
    )
}