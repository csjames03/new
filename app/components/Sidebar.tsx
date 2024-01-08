'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
type Props = {
    user: string
}

const Sidebar = ({user}: Props) =>{
    const [isOpen, setIsOpen] = useState(true)

    const clickHandler = () =>{
        setIsOpen(!isOpen)
    }
    if(isOpen){
        return(
            <div className={`${!isOpen&& ('hidden')} bg-slate-100 h-full w-32  lg:w-56 py-36 z-20 absolute top-0`}>
                <div onClick={clickHandler} className={`${!isOpen&& ('hidden')} lg:hidden p-4 rounded-full w-5 h-5 cursor-pointer bg-slate-500  absolute -right-4 top-100 z-50 `}>
                </div>
                <div className="flex flex-col gap-10 w-full px-2 lg:px-10 ">
                    <Link href={'/'} className={`flex gap-2 relative  `+ `${user === 'user'? ('block'):('hidden')}`}>
                        <Image src={`./dashboard-icon.svg`} width={20} height={20} alt="Dashboard Icon"/>
                        <p className={`text-xs md:text-sm font-semibold text-red-500 hover:text-slate-500`}>Dashboard</p>
                    </Link>
                    <Link href={'/dashboard'} className={`flex gap-2  relative  `+ `${user === 'user'? ('hidden'):('block')}`}>
                        <Image src={`./dashboard-icon.svg`} width={20} height={20} alt="Dashboard Icon"/>
                        <p className={`text-xs md:text-sm  font-semibold text-red-500 hover:text-slate-500`}>Dashboard</p>
                    </Link>
                    <Link href={'/stocks'} className={`flex gap-2  relative  `+ `${user === 'user'? ('hidden'):('block')}`}>
                        <Image src={`./stocks-icon.svg`} width={20} height={20} alt="Dashboard Icon"/>
                        <p className={`text-xs md:text-sm  font-semibold text-red-500 relative  hover:text-slate-500`}>Stocks</p>
                    </Link>
                    <Link href={'/requests'} className={`flex gap-2  `+ `${user === 'user'? ('hidden'):('block')}`}>
                        <Image src={`./requests-icon.svg`} width={20} height={20} alt="Dashboard Icon"/>
                        <p className={`text-xs md:text-sm  font-semibold text-red-500 relative hover:text-slate-500 `}>Requests</p>
                    </Link>
                    <Link href={'/donations'} className={`flex gap-2  `+ `${user === 'user'? ('hidden'):('block')}`}>
                        <Image src={`./donations-icon.svg`} width={20} height={20} alt="Dashboard Icon"/>
                        <p className={`text-xs md:text-sm  font-semibold text-red-500 relative hover:text-slate-500 `}>Donations</p>
                    </Link>
                </div>
                <Image className="w-full absolute bottom-0" src={'./Group 1135.svg'} width={56} height={100} alt="Background"/>
                <Image className="w-full absolute bottom-20" src={'./graph.svg'} width={56} height={100} alt="Background"/>
            </div>
        )}else{
            return(
                <div onClick={clickHandler} className={`${isOpen&& ('hidden')} lg:hidden p-4 rounded-full w-5 h-5 cursor-pointer bg-slate-500  absolute -left-4 top-[250px] z-50 `}>
                </div>
            )
        }
    
    
}

export default Sidebar