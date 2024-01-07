import InfoContainer from "./InfoContainer"


const UserContents = () =>{
    return(
        <div className="absolute right-0 w-11/12 pl-36 h-full top-0 p-24 bg-transparent">
            <div>
                <p className="text-black text-sm font-semibold">Dashboard</p>
                <InfoContainer />
            </div>
            <div>
                <p>Delivery Progress</p>
                
            </div>
            <div>

            </div>
        </div>
    )
}

export default UserContents