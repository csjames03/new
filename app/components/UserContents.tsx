import InfoContainer from "./InfoContainer"
import RequestInfo from "./RequestInfo"
import DownloadForm from "./DownloadForm"
const UserContents = () =>{
    return(
        <div className="absolute right-0 w-full  md:w-11/12 lg:pl-36 h-full top-0 p-2 pt-24 lg:p-24 bg-transparent">
            <div>
                <p className="text-black text-sm font-semibold">Dashboard</p>
                <InfoContainer />
            </div>
            <div className="mt-5 w-full md:flex ">
                <div className="w-full md:w-1/2 h-82 lg:h-full p-2">
                    <p className="text-black text-sm  font-semibold">Delivery Progress</p>
                    <div className="flex flex-col h-96 gap-1 md:gap-3 lg:gap-5 overflow-y-auto">
                        <RequestInfo/>
                        <RequestInfo/>
                        <RequestInfo/>
                        <RequestInfo/>
                        <RequestInfo/>
                        <RequestInfo/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-96 md:h-full p-2 flex flex-col  gap-5">
                    <div className="w-full p-2 flex justify-center gap-4 h-28 md:gap-10 md:h-36 py-2">
                        <DownloadForm  title="Request Form"  description="Input Fill-upped form" img="edit-two.svg"/>
                        <DownloadForm  title="Donor Form"  description="Input Fill-upped form" img="edit-two.svg"/>
                    </div>
                    <div className="w-full p-2 flex justify-center gap-4 h-28 md:gap-10 md:h-36 py-2 mt-5">
                        <DownloadForm title="Printable Form"  description="Downloadable Request Information form" img="download-icon.svg"/>
                        <DownloadForm title="Printable Form"  description="Downloadable Donor's form" img="download-icon.svg"/>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default UserContents