import Image from "next/image"
import Link from "next/link"

type Props = {
    user: string
}

const Sidebar = ({user}: Props) =>{
    return(
        <div className=" bg-slate-100 h-full w-56 py-36 z-20 absolute top-0">
            <div className="flex flex-col gap-10 w-full px-10 ">
                <Link href={'/'} className={`flex gap-2  relative items-center`}>
                    <Image src={`./dashboard-icon.svg`} width={20} height={20} alt="Dashboard Icon"/>
                    <p className={`text-sm font-semibold text-red-500 `}>Dashboard</p>
                </Link>
                <Link href={'/'} className={`flex gap-2  relative  `+ `${user === 'user'? ('hidden'):('block')}`}>
                    <Image src={`./stocks-icon.svg`} width={20} height={20} alt="Dashboard Icon"/>
                    <p className={`text-sm font-semibold text-red-500 relative  `}>Stocks</p>
                </Link>
                <Link href={'/'} className={`flex gap-2  `+ `${user === 'user'? ('hidden'):('block')}`}>
                    <Image src={`./requests-icon.svg`} width={20} height={20} alt="Dashboard Icon"/>
                    <p className={`text-sm font-semibold text-red-500 relative  `}>Requests</p>
                </Link>
                <Link href={'/'} className={`flex gap-2  `+ `${user === 'user'? ('hidden'):('block')}`}>
                    <Image src={`./donations-icon.svg`} width={20} height={20} alt="Dashboard Icon"/>
                    <p className={`text-sm font-semibold text-red-500 relative  `}>Donations</p>
                </Link>
            </div>
            <Image className="w-full absolute bottom-0" src={'./Group 1135.svg'} width={56} height={100} alt="Background"/>
            <Image className="w-full absolute bottom-20" src={'./graph.svg'} width={56} height={100} alt="Background"/>
        </div>
    )
}

export default Sidebar