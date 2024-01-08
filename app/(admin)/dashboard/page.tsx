import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"
import UserContents from "@/app/components/UserContents"
import SmallInfoContainer from "@/app/components/SmallInfoContainer"
const Dashboard = () =>{
    const user = "admin"
    return(
        <div>
            <Navbar/>
            <Sidebar user={user}/>
            <div className="absolute right-0 w-full  lg:w-11/12 lg:pl-36 h-full top-0 p-2 pt-24 lg:p-24 bg-transparent">
                <p className="text-black text-sm font-semibold">Dashboard</p>
                <div className="w-full flex gap-5 overflow-x-auto lg:overflow-x-hidden">
                    <SmallInfoContainer />
                    <SmallInfoContainer />
                    <SmallInfoContainer />
                </div>
                
            </div>
        </div>
    )
}


export default Dashboard