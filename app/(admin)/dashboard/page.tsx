import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"
import SmallInfoContainer from "@/app/components/SmallInfoContainer"
import DonationsInfoContainer from "@/app/components/DonationsInfoContainer"


const Dashboard = () =>{
    const user = "admin"
    return(
        <div >
            <Navbar/>
            <Sidebar user={user}/>
            <div className="absolute right-0 w-full  lg:w-11/12 lg:pl-36 h-full top-0 p-2 pt-24 lg:p-24 bg-transparent">
                <p className="text-black text-sm font-semibold">Dashboard</p>
                <div className="w-full flex gap-5 overflow-x-auto lg:overflow-x-hidden">
                    <SmallInfoContainer />
                    <SmallInfoContainer />
                    <SmallInfoContainer />
                </div>
                <div className="absolute flex flex-col md:flex-row w-full lg:w-10/12 py-2 overflow-hidden">
                    <div className="w-full md:w-2/6">
                        <p className="text-black text-sm font-semibold">Most Recent Donations</p>
                        <div className="w-full h-[200px] md:h-[430px] py-2 px-4 md:flex flex-col items-center:gap-2 overflow-y-auto ">
                            <DonationsInfoContainer/>
                            <DonationsInfoContainer/>
                            <DonationsInfoContainer/>
                            <DonationsInfoContainer/>
                            <DonationsInfoContainer/>
                            <DonationsInfoContainer/>
                            <DonationsInfoContainer/>
                            <DonationsInfoContainer/>
                            <DonationsInfoContainer/>
                            <DonationsInfoContainer/>
                            <DonationsInfoContainer/>
                            <DonationsInfoContainer/>
                        </div>
                    </div>
                    <div className="w-4/6">

                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default Dashboard