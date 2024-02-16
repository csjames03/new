import InfoBox from "./InfoBox"


type Blood = {
    id: string,
    bags: number,
    rh: string,
    type: string
}

const InfoContainer = async() =>{
    const response = await fetch('http://localhost:3000/api/blood',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        },
        cache: 'no-cache',
        next:{
            tags: ['bloods'],
        }
    });

    const bloodsData: Blood[] = await response.json();
    console.log(bloodsData)

    return(
        <div className="w-full lg:w-10/12 h-26 bg-red-200 rounded-xl p-4 flex flex-col justify-center items-center relative">
            <div className="w-full flex justify-between items-center">
                <p className="text-xl font-semibold  md:font-bold text-red-800 text-nowrap">In Stock</p>
                <p className="text-xs font-semibold text-red-800 text-nowrap">15 March 2022</p>
            </div>
            <div className="flex w-3/4 justify-center items-center gap-1 lg:gap-5 p-2 mb-6">
                {bloodsData.map(data => (
                    <InfoBox key={data.id} bt={`${data.rh}${data.type}`} stock={data.bags} />
                ))}
            </div>
            <div className="flex flex-col justify-center items-center absolute left-0 ml-2 lg::ml-4 bottom-0 lg:mb-4">
                <p className="font-semibold text-xs text-red-800">Total</p>
                <p className="font-bold text-xl md:text-2xl text-red-800">12</p>
            </div>
        </div>
    )
}


export default InfoContainer