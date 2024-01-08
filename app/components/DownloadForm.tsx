'use client'
import Image from "next/image"
import { useState } from 'react'

type Props = {
    img: string
    title: string
    description: string
}

const DownloadForm = ({ img, title, description}:Props) =>{
    return(
        <div className={`w-36 md:w-42 h-36 px-2 py-4 hover:bg-teal-500 rounded-2xl bg-teal-400 flex flex-col items-center justify-center cursor-pointer`}>
            <div className={`p-4 rounded-full bg-teal-700 flex justify-center items-center`}>
                <Image   src={`./${img}`} width={20} height={20} alt="Icon"/>
            </div>
            <p className={`font-bold text-semibold text-teal-900`}>
                {title}
            </p>
            <p className="mt-3 text-xs text-iron-200 text-wrap w-36 text-center text-iron-300">{description}</p>
        </div>
    )
}



export default DownloadForm