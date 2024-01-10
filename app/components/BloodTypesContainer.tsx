import Image from "next/image"

const BloodTypesContainer = () =>{
    return(
        <div className="w-36 h-36 rounded-xl cursor-pointer  bg-white-200 shadow-lg p-2 flex flex-col justify-center items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-blue-400 flex justify-center items-center">
                <Image src={'./Vector.svg'} width={20} height={20} alt={'Blood Icon'}/>
            </div>
            <p className="font-bold text-xs tracking-tight text-black">
                A+
            </p>
        </div>
    )
}



export default BloodTypesContainer