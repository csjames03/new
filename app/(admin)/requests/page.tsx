import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"
import DownloadForm from "@/app/components/DownloadForm"
import { RecievedData } from "@/app/data"

const Requests = () =>{
    const user = "admin"
    const recieved = RecievedData
    return(
        <div >
            <Navbar/>
            <Sidebar user={user}/>
            <div className="absolute right-0 w-full  lg:w-11/12 lg:pl-36 h-full top-0 p-2 pt-24 lg:p-24 bg-transparent">
                <p className="text-black text-sm font-semibold">Requests</p>
                <div className="w-full py-2 px-4 flex">
                    <div className="w-8/12">
                        <div className="w-full flex h-full bg-blue-200 rounded-xl">
                            <div className="w-3/12 p-4">
                                <p className="text-blue-600 text-lg font-semibold">Received</p>
                                <div className=" ml-2 mt-7 flex justify-center items-start flex-col">
                                    <p className="text-blue-600  tracking-tighter font-semibold text-sm">Total</p>
                                    <p className="text-blue-600 font-semibold tracking-tight text-2xl">12</p>
                                </div>
                            </div>
                            <div className="w-9/12 grid grid-flow-row-dense grid-cols-8  gap-2 relative px-10">
                                    {
                                        recieved?.map((data)=>(
                                            <div key={`data.bloodType`+'asdaskdj'} className="h-full w-full flex justify-center items-center flex-col">
                                               <div className=" bg-blue-400 h-8 w-8 flex justify-center items-center rounded-md z-10">
                                                    <p className="text-sm font-semibold text-white tracking-tighter">{data.bloodType}</p>
                                                </div>
                                                <div className="bg-white absolute  h-8 w-8 flex justify-center items-center  rounded-md top-20">
                                                    <p className="text-sm font-semibold text-blue-600 tracking-tighter">{data.total}</p>
                                                </div> 
                                            </div>
                                        ))
                                    }
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 flex gap-2 px-5">
                        <DownloadForm title="Printable Form"  description="Downloadable Donor's form" img="download-icon.svg"/>
                        <DownloadForm title="Printable Form"  description="Downloadable Donor's form" img="download-icon.svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Requests