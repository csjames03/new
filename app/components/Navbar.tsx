import LogoTitle from "./LogoTitle"
import Searchbar from "./Searchbar"

const Navbar = () =>{
    return(
        <div className="w-full absolute z-50 h-16 bg-white-200 flex items-center justify-center px-10 lg:justify-between border-2">
            <LogoTitle/>
            <Searchbar />
        </div>
    )
}

export default Navbar