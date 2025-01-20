export default function Input({notValid, label,isTextarea, ...props}){
    return (
        <div className="flex flex-col sm:w-11/12 md:w-5/6 lg:w-3/4  ">
            <label className="mb-1 font-bold text-cyan-50">{label}</label>
            {isTextarea ? <textarea {...props} rows={8} className=" border-4 border-cyan-900 hover:bg-cyan-50  rounded-lg"/> :
                <input {...props}  className="border-4 border-cyan-900 hover:bg-cyan-50  rounded-lg p-1"/>
            }
            {/* {notValid &&
                <p className="text-red-400 italic"> Compila il campo {label.toLowerCase()} per favore </p>
            } */}
        </div>
    )
}