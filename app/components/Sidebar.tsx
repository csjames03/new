import Image from "next/image"
import Link from "next/link"

type Props = {
    user: string
}

const Sidebar = ({user}: Props) =>{
    return(
        <div className=" bg-slate-100 h-full w-56 py-36 z-20 absolute top-0">
            <Link href={'/'} className={`flex gap-2 mx-10 mt-20 `+ `${user === 'user'? ('block'):('hidden')}`}>
                <Image src={`./dashboard-icon.svg`} width={20} height={20} alt="Dashboard Icon"/>
                <p className={`text-sm font-semibold text-red-500 `}>Dashboard</p>
            </Link>
            <Image className="w-full absolute  mt-44" src={'./Group 1135.svg'} width={56} height={100} alt="Background"/>
            <Image className="w-full absolute  mt-44" src={'./graph.svg'} width={56} height={100} alt="Background"/>
        </div>
    )
}

export default Sidebar