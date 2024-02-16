import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import prisma from "@/app/db";


export const POST = async (req: Request, res: NextResponse) => {
    try{
        const body = await req.json()
        const { keyword } : { keyword: string} = body
        console.log(body)
        
        if(!keyword) return NextResponse.json( { error: "Invalid Request"}, {status: 500})

        const bloods = await prisma.blood.findMany({
            where:{
                OR:[
                    {location:{
                        contains: keyword
                    }},
                    {rh:{
                        contains: keyword
                    }},
                   {type: {
                        contains: keyword
                    }}
                ]
            }
        })
        console.log(bloods)

        return NextResponse.json( bloods,{status: 200})

    }catch(error){
        console.log(error);
        return NextResponse.json({error: "Failed to fetch the bloods"}, {status : 500})
    }
} 


