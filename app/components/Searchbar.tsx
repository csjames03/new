'use client'
import Image from "next/image"
import { useState, useRef } from "react"
import Link from "next/link"
import { getAllDonors, getAllHospitals, getAllBloods, insertBlood, createBloodBank, getBloodBank} from "../serverActions/serverAction"

const Searchbar = () =>{
    const [keyword, setKeyword] = useState<string>('')
    const searchHandler = async(event : React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        // Declare the 'search' variable
        const searchData: { id: string; bags: number; location: string; rh: string; type: string; } = await getData(keyword);
    }

    return(
        <form className="flex justify-between items-center gap-1 md:gap-3 lg:gap-5" onSubmit={(e)=>{searchHandler(e)}}>
            <Link href={'/'} className="text-xs font-bold lg:hidden">
                <p className="font-medium">
                    <span className="text-red-700">B</span>lood <span className="text-red-700">B</span>ank
                </p>
                <p className="hidden md:block lg:hidden font-medium">
                    <span className="text-red-700">M</span>anagement <span className="text-red-700">S</span>ystem
                </p>
            </Link>
            <div  className="w-[200px] lg:w-96 rounded-full bg-slate-300 px-3 py-1 flex gap-2">
                <Image  src={'./bi_search.svg'} width={'20'} height={'20'} alt="Search Icon"/>
                <input className="bg-transparent outline-none text-black w-full h-full py-2" type="text" onChange={(e)=>{setKeyword(e.target.value)}} />
            </div>
            <div className="p-2 w-10 h-10 rounded-full flex justify-center items-center bg-slate-300 mx-1 md:mx-3 lg:mx-5 cursor-pointer">
                <Image width={20} height={20} src={`./bi_bell.svg`} alt="Bell Icon"/>
            </div>
            <div className="p-2 w-10 h-10  rounded-full flex justify-center items-center bg-slate-300 mx-1 md:mx-3 lg:mx-5 cursor-pointer">
                <Image width={20} height={20} src={`./bi_gear.svg`} alt="Bell Icon"/>
            </div>
        </form>
    )
}

const getData = async (keyword: string): Promise<{ id: string; bags: number; location: string; rh: string; type: string; }> => {
    const response = await fetch('/api/blood/specific', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "keyword": keyword})
    })
    console.log(keyword)
    const k = await response.json()
    console.log(k)
    return k;
}

export default Searchbar