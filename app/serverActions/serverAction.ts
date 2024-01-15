"use server"
import type { Donor } from "@prisma/client"
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