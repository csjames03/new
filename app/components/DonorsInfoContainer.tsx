import Image from "next/image"

const DonorsInfoContainer = () =>{
    return(
        <div className="w-full h-16 px-5 py-2  bg-white shadow-md rounded-xl flex justify-between items-center">
            <div className="flex gap-5">
                <Image src={'./1211442310.jpg 1.svg'} width={40} height={40} alt={`Donor's Picture`}/>
                <div>
                    <p className="text-sm font-semibold text-blue-500">
                        Zeus Morley Penida
                    </p>
                    <p className="text-xs font-medium tracking-tighter text-slate-500">
                        March 12 2003
                    </p>
                </div>
            </div>
            <div>
                <div className=" bg-blue-400 h-8 w-8 flex justify-center items-center rounded-md z-10">
                    <p className="text-sm font-semibold text-white tracking-tighter">B+</p>
                </div>
            </div>
        </div>
    )
}


export default DonorsInfoContainer