
type Props = {
    bt: string
    stock: string
}


const InfoBox = ({bt, stock}: Props) =>{
    return(
        <div className="relative flex justify-around w-full h-full cursor-pointer">
            <div className="absolute w-8 h-8 rounded-lg text-white bg-red-500 flex justify-center items-center">
                <p className="text-xs font-bold">{bt}</p>
            </div>
            <div className="mt-6 w-8 h-8 rounded-lg bg-white text-red-500 flex justify-center items-center">
                <p className="text-xs font-bold">{stock}</p>
            </div>
        </div>
    )
}




export default InfoBox