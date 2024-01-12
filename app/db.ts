import prisma from "@/prisma";


export const getUser  = async () =>{
    return {
        "name": "James"
    }
}
type User = {
    email: string
    name: string
}

export const createUser = async (name:string, email:string) =>{
    const role = 'user'
    const user = await prisma.user.create({
        data: {
          email,
          name,
          role,
        },
      })
      return {'message': 'Successfully created'}
}