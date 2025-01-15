import { FaTiktok, FaPhoneAlt, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { GiPositionMarker } from "react-icons/gi";


export default function Footer(){
    return (
        <footer>
            <div className="  grid sm:grid-cols-2 sm:grid-rows-1 place-items-center gap-5 p-10">
                <ul className="text-cyan-950 ">
                    <li className="flex gap-2 items-center">
                        <FaPhoneAlt size={20}/> 
                        <p>+39 392-523-1181</p>
                    </li>
                    <li className="flex gap-2 items-center my-5">
                        <IoIosMail size={20}/>
                        <p><a href="mailto:infoanfuso@gmail.com">infoanfuso@gmail.com</a></p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <GiPositionMarker size={20}/>
                        <p> Catania, CT</p>
                    </li>
                </ul>
                <div className="flex items-center justify-center gap-4 text-cyan-950">
                    <p>Mi trovi anche qui:</p>
                    <a target="_blank" href="https://www.tiktok.com/@impiantielettricianfuso"><FaTiktok size={30}/></a>
                </div>
            </div>
           <p className=" text-center w-full text-cyan-950">© 2024 Giovanni Mauro</p>        
        </footer>
    )
}