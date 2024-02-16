import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/db";
import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export const GET = async ( req: Request, res: NextApiResponse) =>{
    try{

        const bloods = await prisma.blood.findMany({})
         
        if(bloods){
            return NextResponse.json(bloods, {status: 200})
        }

        return NextResponse.json({ error: "Something went wrong"}, {status: 500})

    }catch(error){
        return NextResponse.json({ error: "Internal Server Error"}, {status: 500})
    }
}



export const POST = async (req: Request, res: NextApiResponse) => {
    try{
        const { bags, location, rh, type} :{  bags: number, location: string, rh: string, type: string} = await req.json()

        if( !bags || !location || !rh || !type) return NextResponse.json({ error: "Invalid Request"}, { status: 500})

        const updatedBlood = await prisma.blood.create({
            data:{
                bags,
                location,
                rh,
                type
            }
        })
        
        if(updatedBlood) return NextResponse.json(updatedBlood, { status: 200})

        return NextResponse.json({error: "There's an error updating blood"}, {status: 500})
        
    }catch(error){
        return NextResponse.json({ error: "Something went wrong"}, { status: 500})
    }
}



export const PUT = async (req: Request, res: NextApiResponse) => {
    try{
        const {id, bags, location, rh, type} :{ id: string, bags: number, location: string, rh: string, type: string} = await req.json()

        if(!id || !bags || !location || !rh || !type) return NextResponse.json({ error: "Invalid Request"}, { status: 500})

        const updatedBlood = await prisma.blood.update({
            where:{
                id
            },
            data:{
                bags,
                location,
                rh,
                type
            }
        })
        
        if(updatedBlood){
            revalidateTag('blood')
            return NextResponse.json(updatedBlood, { status: 200})
        } 

        return NextResponse.json({error: "There's an error updating blood"}, {status: 500})
        
    }catch(error){
        return NextResponse.json({ error: "Something went wrong"}, { status: 500})
    }
}


export const DELETE = async (req: Request, res: NextApiResponse) => {
    try{
        const { id }: { id: string} = await req.json()
        if(!id)  return NextResponse.json({ error: "Invalid Keyword"}, { status: 500})
        const blood = await prisma.blood.deleteMany({
            where:{
                rh: '+'
            }})

        if(blood) return NextResponse.json(blood, { status: 200})

        return NextResponse.json({ error: "Something went wrong"}, { status: 500})

    }catch(error){
        return NextResponse.json({ error: "Internal Server Error"}, { status: 500})
    }
}
