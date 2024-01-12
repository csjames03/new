
import { NextResponse } from 'next/server';
import { User } from '@/lib/userSchema';

type UserData = {
    name: string;
    email: string;
};

export async function GET() {
    try {
        return NextResponse.json({"Hello" :"James"}, {'status': 500})
    } catch (error) {
        return NextResponse.json({"message": "Internal Server Error", error}, {'status': 500})
    }
}

export async function POST(request: Request) {
    try {
        const data= await request.json();
        const saveUser = await User.create(data);
        return NextResponse.json({data: saveUser}, {'status': 200})
    } catch (error) {
        return NextResponse.json({"message": "Internal Server Error", error}, {'status': 500})
    }
}
