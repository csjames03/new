import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"
import DownloadForm from "@/app/components/DownloadForm"
import BloodTypesContainer from "@/app/components/BloodTypesContainer"
import DonorsInfoContainer from "@/app/components/DonorsInfoContainer"
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
                <div className="w-full py-2 px-4 flex flex-col gap-2 md:flex-row">
                    <div className="w-full md:w-8/12">
                        <div className="w-full flex h-full bg-blue-200 rounded-xl">
                            <div className="w-2/12 md:w-3/12 p-4">
                                <p className="text-blue-600 text-lg font-semibold">Received</p>
                                <div className=" ml-2 mt-7 md:flex md:justify-center items-start flex-col md:mt-[20px]">
                                    <p className="text-blue-600  tracking-tighter font-semibold text-xs md:text-sm">Total</p>
                                    <p className="text-blue-600 font-semibold tracking-tight text-2xl">12</p>
                                </div>
                            </div>
                            <div className="w-10/12 md:w-9/12 grid grid-flow-row-dense grid-cols-8  gap-1 md:gap-2 relative px-2 md:px-10 overflow-y-auto">
                                    {
                                        recieved?.map((data)=>(
                                            <div key={`data.bloodType`+'asdaskdj'} className="h-full w-full flex justify-center items-center flex-col">
                                               <div className=" bg-blue-400  h-6  w-6 md:h-8 md:w-8 flex justify-center items-center rounded-md z-10">
                                                    <p className="text-sm font-semibold text-white tracking-tighter">{data.bloodType}</p>
                                                </div>
                                                <div className="bg-white absolute h-6  w-6 md:h-8 md:w-8 flex justify-center items-center  rounded-md top-[4.6rem] md:top-20">
                                                    <p className="text-sm font-semibold text-blue-600 tracking-tighter">{data.total}</p>
                                                </div> 
                                            </div>
                                        ))
                                    }
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12 flex gap-2 md:px-5 justify-center items-center">
                        <DownloadForm title="Request Form"  description="Input Fill-upped form" img="edit-two.svg"/>
                        <DownloadForm title="Printable Form"  description="Downloadable form" img="download-icon.svg"/>
                    </div>
                </div>
                <div>
                    <p className="text-black text-sm font-semibold">Types</p>
                    <div className="w-full  mt-2 flex flex-col md:flex-row gap-2 items-center">
                        <div className="w-full h-[11.5rem] md:h-[420px] overflow-x-auto md:w-4/12 px-4 py-2 grid gap-[150px] grid-cols-8 md:grid-cols-1 lg:grid-cols-2 md:gap-1 ">
                              <BloodTypesContainer />
                              <BloodTypesContainer />
                              <BloodTypesContainer />
                              <BloodTypesContainer />
                              <BloodTypesContainer />
                              <BloodTypesContainer />
                              <BloodTypesContainer />
                              <BloodTypesContainer />
                        </div>
                        <div className="w-full h-[420px] overflow-y-auto md:w-8/12 px-4 py-2 grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2  gap-1">
                            <DonorsInfoContainer />
                            <DonorsInfoContainer />
                            <DonorsInfoContainer />
                            <DonorsInfoContainer />
                            <DonorsInfoContainer />
                            <DonorsInfoContainer />
                            <DonorsInfoContainer />
                            <DonorsInfoContainer />
                            <DonorsInfoContainer />
                            <DonorsInfoContainer />
                            <DonorsInfoContainer />
                            <DonorsInfoContainer />
                            <DonorsInfoContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Requests