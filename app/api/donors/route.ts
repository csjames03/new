import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async ( req: Request, res: NextApiResponse) =>{
    try{

        const donors = await prisma.donor.findMany({})
         
        if(donors){
            return NextResponse.json(donors, {status: 200})
        }

        return NextResponse.json({ error: "Something went wrong"}, {status: 500})

    }catch(error){
        return NextResponse.json({ error: "Internal Server Error"}, {status: 500})
    }
}



type Donor = {
    fname: string;
    lname: string;
    mname: string;
    address: string;
    age: number;
    contact: string;
    medicalStatus: string;
    sex: string;
  };

  
type DonorwId = {
    id: string;
    fname: string;
    lname: string;
    mname: string;
    address: string;
    age: number;
    contact: string;
    medicalStatus: string;
    sex: string;
  };



export const POST = async (req: Request, res: NextApiResponse) =>{
    try{
        const donorData: Donor = await req.json()
        const donor = await prisma.donor.createMany({
            data: donorData
        })
         if( donor ) return NextResponse.json(donor, { status: 201})

         return NextResponse.json({ error: "Something went wrong"}, { status: 500})

    }catch(error){
        return NextResponse.json({ error: "Internal Server Error"}, { status: 500})
    }
}

export const PUT = async (req: Request, res: NextApiResponse) =>{
    try{
         const donorData: DonorwId = await req.json()
         
         const editDonor = await prisma.donor.update({
            where:{
                id: donorData.id
            },
            data:{
                fname: donorData.fname,
                lname: donorData.lname,
                mname: donorData.mname,
                address: donorData.address,
                age: donorData.age,
                contact: donorData.contact,
                medicalStatus: donorData.medicalStatus,
            }
        })

        if(editDonor) return NextResponse.json(editDonor, {status: 200});
        
        return NextResponse.json({error: "There's an error occurred"}, {status: 500});

    }catch(error){
        return NextResponse.json({ error: "Internal Server Error"}, { status: 500})
    }
}
