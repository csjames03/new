"use server"
import type { Donor, Blood, Hospital } from "@prisma/client"
import prisma from "../db"
import { json } from "stream/consumers"

export const getAllDonors = async () => {
    try{
        const donor: Donor[] = await prisma.donor.findMany()
        console.log(donor)
        return donor
    }catch(error){
        console.log(error)
        return {error: "Failed to fetch the donors"}
    }
}

export const getAllBloods = async () => {
    try{
        const bloods:Blood[] = await prisma.blood.findMany()
        console.log(bloods)
        return bloods
    }catch(error){
        console.log(error)
        return {error: "Failed to fetch the bloods"}
    }

}


export const getAllHospitals = async () => {
    try{
        const hospitals:Hospital[] = await prisma.hospital.findMany()
        console.log(hospitals)
        return hospitals
    }catch(error){
        return {error: "Failed to fetch the hospitals"}
    }
}

export const getBloodByType = async () => {
    try{
        const blood:Blood[] = await prisma.blood.findMany({
            where:{
                type: "A"
            }
        })
        console.log(blood)
        return blood

    }catch(error){
        console.log(error)
        return {message: "Internal server error"}
    }
}

export const insertBlood = async (bags:number, location:string, rh:string, type:string) => {
    try{
        const createBlood: Blood = await prisma.blood.create({
            data: {  
                bags,
                location,
                rh, 
                type

            }
        })
        console.log(createBlood)
        return createBlood
    }catch(error){
        console.log(error)
        return {message: "Internal server error"}
    }
}
