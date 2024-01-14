import { NextResponse } from "next/server";
import { CreateDonorBodyValidator } from "@/app/middleware/middleware";
import { DataType } from "@/app/middleware/middleware";


export async function POST(request: Request, response: NextResponse){
    const body = await request.text()
    const res  = await JSON.parse(body)
    const fieldsThatNeedsValidation: (keyof DataType)[] = ["address", "age", "contact", "firstName", "lastName", "middleName", "medicalStatus", "sex"];
    const validate = CreateDonorBodyValidator(res, fieldsThatNeedsValidation);

    if(validate != undefined) {
        console.log(validate)
        return NextResponse.json(validate)
    }
    

    

    console.log(res);
    return NextResponse.json({res},{'status': 200})
}