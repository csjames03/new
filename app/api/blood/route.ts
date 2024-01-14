import { NextResponse } from "next/server";
import prisma from "@/app/db";

export async function GET(res: Response){
    try{
        const bloods = await prisma.blood.findMany()
        return NextResponse.json(bloods, {'status': 200})

    }catch(error){
        console.log(error);
        return NextResponse.json(error, {status: 500});
    }
}

export async function POST(request: Request, response: Response){
    try{
        const bodyText = await request.text()
        const data = await JSON.parse(bodyText)
        const blood = await prisma.blood.create({
            data:{
                bags: data.bags,
                location: data.location,
                rh: data.rh,
                type: data.type
            }
        })
        return NextResponse.json(blood, {status: 200})
    }catch(error){
        console.log(error);
        return NextResponse.json(error, {status: 500})
    }
}

export async function PUT(request: Request, response: Response){
    try{
        const bodyText = await request.text()
        const data = await JSON.parse(bodyText)
        
        const blood = await prisma.blood.update({
            where:{
                id: data.id
            },
            data:{
                bags: data.bags,
                location: data.location,
                rh: data.rh,
                type: data.type
            }
        })

        return NextResponse.json(data, {status: 200})
    }catch(error){
        console.log(error);
        return NextResponse.json(response, {'status': 500})
    }
}