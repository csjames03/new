import { NextResponse } from "next/server";
import { CreateDonorBodyValidator } from "@/app/middleware/middleware";
import { DataType } from "@/app/middleware/middleware";
import prisma from "@/app/db";

/*
fname         String
  lname         String
  mname         String
  address       String
  age           Int
  contact       String
  medicalStatus String
  sex           String
*/
export async function POST(request: Request, response: NextResponse){
    try{
        const body = await request.text()
        const data  = await JSON.parse(body)
        const fieldsThatNeedsValidation: (keyof DataType)[] = ["fname", "lname", "mname", "address", "age", "contact", "medicalStatus", "sex"];
        const validate = CreateDonorBodyValidator(data, fieldsThatNeedsValidation);

        if(validate != undefined) {
            console.log(validate)
            return NextResponse.json(validate)
        }

        const savedDonor = await prisma.donor.create({
            data:{
                fname: data.fname,
                mname: data.mname,
                lname: data.lname,
                address: data.address,
                age: data.age,
                contact: data.contact,
                medicalStatus: data.medicalStatus,
                sex: data.sex
            }
        })

        return NextResponse.json(savedDonor, {'status': 200})

    }catch(error){
        console.log(error)
        return NextResponse.json({error},{'status': 500})
    }

}


export async function GET(response: Response){
    try{
        const donors = await prisma.donor.findMany()
        return NextResponse.json(donors, {'status': 200})

    }catch(error){
        console.log(error)
        return NextResponse.json({error},{'status': 50});
    }
}
