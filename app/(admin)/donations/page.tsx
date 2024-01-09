import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"

const Donations = () =>{
    const user = "admin"

    return(
        <div >
            <Navbar/>
            <Sidebar user={user}/>
            <div className="absolute right-0 w-full  lg:w-11/12 lg:pl-36 h-full top-0 p-2 pt-24 lg:p-24 bg-transparent">
                <p className="text-black text-sm font-semibold">Donations</p>  
            </div>
        </div>
    )
}


export default Donations