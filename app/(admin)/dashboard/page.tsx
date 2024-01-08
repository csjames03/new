import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"
import UserContents from "@/app/components/UserContents"

const Dashboard = () =>{
    const user = "admin"
    return(
        <div>
            <Navbar/>
            <Sidebar user={user}/>
        </div>
    )
}


export default Dashboard