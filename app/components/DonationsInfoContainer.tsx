import Image from "next/image"

const DonationsInfoContainer = () =>{
    return(
        <div className="flex w-full justify-between bg-slate-200 hover:bg-slate-300 cursor-pointer rounded-xl p-2">
            <div className="flex gap-2">
                <Image className="w-10 h-10 rounded-full" src={'./1211442310.jpg 1.svg'} width={20} height={20} alt="Profile" />
                <div className="h-full  flex flex-col justify-center">
                    <p className="text-[13px] text-black font-semibold tracking-tight">Yan Bayola</p>
                    <p className="text-slate-500 text-[10px] font-semibold tracking-tighter">15 March 2022</p>
                </div>
            </div>
            <div className="h-full flex justify-center items-center">
                <div className="bg-red-300 p-1 rounded-lg">
                    <p className="text-red-700 font-bold text-sm ">B+</p>
                </div>
            </div>
        </div>
    )
}


export default DonationsInfoContainer