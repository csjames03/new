import Image from "next/image"


const RequestInfo = () =>{
    return(
        <>
            <div className="w-full h-12 bg-slate-200 rounded-full p-2">
                <div className="w-full h-full p-2 bg-slate-50 rounded-full">
                    <div className="bg-red-500 w-1/3 p-2 rounded-full">
                    </div>
                </div>
            </div>
            <div className="w-full relative h-10 flex justify-between">
                <Image className=""  src={'./Request.svg'} width={50} height={20} alt="Request Icon"/>
                <Image className=""  src={'./Truck-kun.svg'} width={70} height={0} alt="Request Icon"/>
                <Image className=""  src={'./Hospital.svg'} width={50} height={20} alt="Request Icon"/>
            </div>
        </>
    )
}

export default RequestInfo