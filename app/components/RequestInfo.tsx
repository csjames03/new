import Image from "next/image"


const RequestInfo = () =>{
    return(
        <>
            <div className="w-full h-6 lg:h-12 bg-slate-200 rounded-full p-1 lg:p-2">
                <div className="w-full h-full p-1 lg:p-2 bg-slate-50 rounded-full">
                    <div className="bg-red-500 w-1/3 p-1 lg:p-2 rounded-full">
                    </div>
                </div>
            </div>
            <div className="w-full relative md:h-10 flex justify-between">
                <Image className="h-3 md:h-10"  src={'./Request.svg'} width={50} height={20} alt="Request Icon"/>
                <Image className="h-3 md:h-10"  src={'./Truck-kun.svg'} width={70} height={0} alt="Request Icon"/>
                <Image className="h-3 md:h-10"  src={'./Hospital.svg'} width={50} height={20} alt="Request Icon"/>
            </div>
        </>
    )
}

export default RequestInfo