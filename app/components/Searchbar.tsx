'use client'
import Image from "next/image"
import { useState, useRef } from "react"
import Link from "next/link"
import { getAllDonors } from "../serverActions/serverAction"

const Searchbar = () =>{
    const [search, setSearch] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const searchHandler = async(event : React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        console.log(search)
        const donors = await getAllDonors()
    }

    const clickSearchHandler = () => {
        if(inputRef.current){
            inputRef.current.focus()
        }
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
            <div onClick={clickSearchHandler} className="w-[200px] lg:w-96 rounded-full bg-slate-300 px-3 py-1 flex gap-2">
                <Image onClick={clickSearchHandler} src={'./bi_search.svg'} width={'20'} height={'20'} alt="Search Icon"/>
                <input ref={inputRef} className="bg-transparent outline-none text-black w-full h-full py-2" onChange={(event)=>{ setSearch(event.target.value)}} type="text"  />
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

export default Searchbar