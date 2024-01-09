
type Props = {
    bloodType: string
    total: number
    date: string
}
const StockInfoContainer = ({bloodType, total, date}: Props) =>{
    return(
        <div className="w-5/6 h-36 bg-red-200 rounded-3xl p-2 mt-4 md:mt-20 flex justify-center pr-3">
            <div className="w-1/3 h-full relative flex items-center pl-4">
                <div className="bg-red-400 h-8 w-8 p-2 rounded-md flex justify-center items-center z-10 absolute top-10">
                    <p className="text-white tracking-tighter">{bloodType}</p>
                </div>
                <div className="bg-white h-8 w-8 p-2 rounded-md flex justify-center items-start mt-6">
                    <p>2</p>
                </div>
            </div>
            <div className="w-1/3 h-full flex flex-col justify-evenly">
                <p className="text-[17px] text-nowrap font-semibold text-red-700 tracking-tight">In Stock</p>
                <div>
                    <p className="text-sm font-bold  text-red-700  tracking-tighter">Total</p>
                    <p className="text-2xl font-semibold text-red-700  tracking-tight">{total}</p>
                </div>
            </div>
            <div className="w-1/3 h-full flex justify-center items-center ">
                <p className="text-nowrap text-xs font-semibold tracking-tighter text-red-700">{date}</p>
            </div>
        </div>
    )
}

export default StockInfoContainer