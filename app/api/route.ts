
import { NextResponse } from 'next/server';

type UserData = {
    name: string;
    email: string;
};

export async function GET() {
    try {
        console.log('Getting User data...');
    
    } catch (error) {
        console.log(error);
        return NextResponse.json({"message": "Internal Server Error", error}, {'status': 500})
    }
}

export async function POST(request: Request) {
    try {
        const data= await request.json();
        console.log(data)
    } catch (error) {
        console.log(error);
        return NextResponse.json({"message": "Internal Server Error", error}, {'status': 500})
    }
}
