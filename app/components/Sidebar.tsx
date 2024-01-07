import Image from "next/image"
import Link from "next/link"

const Sidebar = () =>{
    return(
        <div className=" bg-slate-100 h-full w-56 py-36 absolute top-0">
            <Link href={'/'} className="flex gap-2 mx-10 mt-20">
                <Image src={`./dashboard-icon.svg`} width={20} height={20} alt="Dashboard Icon"/>
                <p className="text-sm font-semibold text-red-500">Dashboard</p>
            </Link>
            <Image className="w-full absolute  mt-56" src={'./graph.svg'} width={56} height={100} alt="Background"/>
        </div>
    )
}

export default Sidebar