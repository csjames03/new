import { NextResponse } from "next/server";
import prisma from "@/app/db";


export async function GET(response: Response) {
    try{
        const hospitals = await prisma.hospital.findMany()
        console.log(hospitals)
        return NextResponse.json(hospitals, {'status': 200})
    }catch(error){
        console.log(error);
        return NextResponse.json(response, {'status': 500});
    }
}

export async function POST(request: Request, response: Response){
    try{
        const textBody = await request.text()
        const data = await JSON.parse(textBody)

        const hospital = await prisma.hospital.create({
            data:{
                  address: data.address,
                  contact: data.contact,
                  name: data.name     
            }
        })

        return NextResponse.json(hospital, {'status': 200})
    }catch(error){
        console.log(error);
        return NextResponse.json(error, {'status':500})
    }
}