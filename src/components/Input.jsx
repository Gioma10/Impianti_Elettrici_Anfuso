export default function Input({label,isTextarea, ...props}){
    return (
        <div className="flex flex-col mb-6 sm:mb-8 md:mb-6 lg:mb-8 sm:w-11/12 md:w-5/6 lg:w-3/4  ">
            <label className="mb-1 font-bold text-cyan-900">{label}</label>
            {isTextarea ? <textarea rows={8} name="message" className="p-2 border-4 border-cyan-700 hover:bg-cyan-100  rounded-lg"/> :
                <input {...props} className="border-4 border-cyan-700 hover:bg-cyan-100  rounded-lg p-1"/>
            }
            
        </div>
    )
}