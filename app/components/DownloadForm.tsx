import Image from "next/image"


type Props = {
    color: string
    img: string
    title: string
    description: string
}

const DownloadForm = ({color, img, title, description}:Props) =>{
    return(
        <div className={`w-42 h-36 px-2 py-4 rounded-2xl bg-${color}-400 flex flex-col items-center justify-center cursor-pointer`}>
            <div className={`w-20 h-20 p-2 rounded-full bg-blue-700 flex justify-center items-center`}>
                <Image  src={`./${img}`}width={20} height={20} alt="Icon"/>
            </div>
            <p className="font-lg text-semibold">
                {title}
            </p>
            <p className="mt-3 text-xs text-slate-200">{description}</p>
        </div>
    )
}



export default DownloadForm