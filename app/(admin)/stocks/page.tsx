import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"
import StockInfoContainer from "@/app/components/StockInfoContainer"

const Stocks = () =>{
    const user = "admin"

    return(
        <div >
            <Navbar/>
            <Sidebar user={user}/>
            <div className="absolute right-0 w-full  lg:w-11/12 lg:pl-36 h-full top-0 p-2 pt-24 lg:p-24 bg-transparent">
                <p className="text-black text-sm font-semibold">Stocks</p>  
                <div className="w-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-4 gap-2 pl-6 py-2">
                    <StockInfoContainer />
                    <StockInfoContainer />
                    <StockInfoContainer />
                    <StockInfoContainer />
                    <StockInfoContainer />
                    <StockInfoContainer />
                    <StockInfoContainer />
                    <StockInfoContainer />
                </div>
            </div>
        </div>
    )
}


export default Stocks