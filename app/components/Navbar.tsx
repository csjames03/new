import LogoTitle from "./LogoTitle"
import Searchbar from "./Searchbar"

const Navbar = () =>{
    return(
        <div className="w-full h-16 bg-white-200 flex items-center px-10 justify-between">
            <LogoTitle/>
            <Searchbar />
        </div>
    )
}

export default Navbar