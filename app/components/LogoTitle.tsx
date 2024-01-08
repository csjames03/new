import Link from "next/link"

const LogoTitle = () =>{
    return(
        <Link href={'/'} className="hidden lg:block text-black z-30">
            <p className="text-2xl font-medium">
                <span className="text-red-700">B</span>lood <span className="text-red-700">B</span>ank
            </p>
            <p className="text-sm font-medium">
                <span className="text-red-700">M</span>anagement <span className="text-red-700">S</span>ystem
            </p>
        </Link>
    )
}


export default LogoTitle