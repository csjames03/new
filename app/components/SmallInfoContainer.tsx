import InfoBox from "./InfoBox"

const SmallInfoContainer = () =>{
    return(
        <div className="w-1/3 h-28 md:h-36 min-w-[250px] rounded-2xl bg-red-300 hover:bg-red-400 p-4 relative cursor-pointer">
            <div className="flex justify-between items-center">
                <p className="text-red-700 text-medium font-semibold">Requests</p>
                <p className="text-red-700 text-xs font-semibold">January 9 2024</p>
            </div>
            <div className="w-full flex absolute bottom-4 pr-10">
                <div className="w-1/2 mt-4 md:mt-4 md:ml-2">
                    <p className="text-xs font-semibold">Total</p>
                    <p className="text-xl text-red-700 font-semibold">12</p>
                </div>
                <div className="w-1/2 flex gap-2 mt-2 md:gap-4 relative md:mb-2">
                    <InfoBox  bt={"B+"} stock={"5"}/>
                    <InfoBox  bt={"B+"} stock={"5"}/>
                    <InfoBox  bt={"B+"} stock={"5"}/>
                </div>
            </div>
        </div>
    )
}


export default SmallInfoContainer