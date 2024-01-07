import InfoBox from "./InfoBox"

const InfoContainer = () =>{
    const fakeDatas = [
        { 
            id: 0,
            bt: 'A+',
            stock: '5'
        },
        { 
            id:1,
            bt: 'A-',
            stock: '5'
        },
        { 
            id: 2,
            bt: 'B+',
            stock: '5'
        },
        { 
            id: 3,
            bt: 'B-',
            stock: '5'
        },
        {   
            id:4,
            bt: 'AB+',
            stock: '5'
        },
        { 
            id: 6,
            bt: 'AB-',
            stock: '5'
        },
        { 
            id: 7,
            bt: 'O+',
            stock: '5'
        },
        {   
            id: 8,
            bt: 'O-',
            stock: '5'
        }
    ]
    return(
        <div className="w-10/12 h-26 bg-red-200 rounded-xl p-4 flex flex-col justify-center items-center relative">
            <div className="w-full flex justify-between items-center">
                <p className="text-xl font-bold text-red-800 text-nowrap">In Stock</p>
                <p className="text-xs font-semibold text-red-800 text-nowrap">15 March 2022</p>
            </div>
            <div className="flex w-3/4 justify-center items-center gap-5 p-2 mb-6">
                {
                    fakeDatas.map(data =>(
                        <InfoBox key={data.id}  bt={data.bt} stock={data.stock}/>
                    ))
                }
            </div>
            <div className="flex flex-col justify-center items-center absolute left-0 ml-4 bottom-0 mb-4">
                <p className="font-semibold text-xs text-red-800">Total</p>
                <p className="font-bold text-2xl text-red-800">12</p>
            </div>
        </div>
    )
}


export default InfoContainer