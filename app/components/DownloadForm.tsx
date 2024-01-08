'use client'
import Image from "next/image"
import { useState } from 'react'

type Props = {
    color: string
    img: string
    title: string
    description: string
}

const DownloadForm = ({color, img, title, description}:Props) =>{
    const [bgColor, setBgColor] = useState(color)
    return(
        <div className={`w-42 h-36 px-2 py-4 rounded-2xl bg-${bgColor}-400 flex flex-col items-center justify-center cursor-pointer`}>
            <div className={`w-20 h-20 p-2 rounded-full bg-${bgColor}-700 flex justify-center items-center`}>
                <Image  src={`./${img}`}width={20} height={20} alt="Icon"/>
            </div>
            <p className={`font-bold text-semibold text-${color}-900`}>
                {title}
            </p>
            <p className="mt-3 text-xs text-iron-200 text-wrap w-36 text-center text-iron-300">{description}</p>
        </div>
    )
}



export default DownloadForm