"use server"
import type { Donor, Blood } from "@prisma/client"
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