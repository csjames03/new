"use server"

import prisma from "../db"
import { json } from "stream/consumers"

type Donor = {
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
  
  // Blood Type
  type Blood = {
    id: string;
    bags: number;
    location: string;
    rh: string;
    type: string;
  };

  type BloodBank = {
    id: string;
    bags: number;
    type: string;
    rh: string;
  }
  
  // Hospital Type
  type Hospital = {
    id: string;
    address: string;
    contact: string;
    name: string;
  };

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

export const getBloodBank = async () => {
    try{
        const bloods:BloodBank[] = await prisma.bloodBank.findMany()
        console.log(bloods)
        return bloods

    }catch(error){
        console.log(error)
        return {message: "Internal server error"}
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



const updatingApprovedBloodRequest = async (requestedBags: number, type: string, rh: string) =>{
    try{
        const bloodFromBank = await prisma.blood.findMany({
            where:{
                type,
                rh,
            }
        })
        console.log("The blood itself",bloodFromBank[0].bags)
        const value = bloodFromBank[0].bags - requestedBags
        //console.log(value)

        const updatedBlood = await prisma.bloodBank.update({
            where:{
                id: bloodFromBank[0].id
            },
            data:{
                bags: value
            }

        })

       // console.log(updatedBlood)
        return updatedBlood
        
    }catch(error){
        console.log(error)
        return {message: "Internal server error"}
    }
}

const updatingBloodForDonates = async (donatedBags: number, type: string, rh: string) =>{
    try{
        const bloodFromBank = await prisma.blood.findMany({
            where:{
                type: {
                    equals: type
                },
                rh:{
                    equals: rh
                }
            }
        })
        console.log(bloodFromBank)

        if(!bloodFromBank){
            console.log("No blood from bank found with type " + type +" rh "+ rh)
            return {message : "Internal server error"}
        }
        const value = bloodFromBank[0].bags + donatedBags

        const updatedBlood = await prisma.bloodBank.update({
            where:{
                id: bloodFromBank[0].id
            },
            data:{
                bags: value
            }

        })

        //console.log(updatedBlood)
        return updatedBlood
        
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
        updatingBloodForDonates(bags, type,rh)
        return createBlood
    }catch(error){
        console.log(error)
        return {message: "Internal server error"}
    }
}


export const insertHospital = async (address: string, contact: string, name: string) => {
    try{
        const createHospital: Hospital = await prisma.hospital.create({
            data: {
                address,
                contact,
                name
            }
        })
        console.log(createHospital)
        return createHospital
    }catch(error){
        console.log(error)
        return {message: "Internal server error"}
    }
}


export const insertDonor = async (fname: string, lname: string, mname: string,address: string, age: number, contact: string, medicalStatus: string, sex: string) =>{
    try{
        const createDonor: Donor = await prisma.donor.create({
            data:{
                fname,
                lname,
                mname,
                address,
                age,
                contact,
                medicalStatus,
                sex
            }
        })
        console.log(createDonor)
        return createDonor
    }catch(error){
        console.log(error)
        return {message: "Internal server error"}
    }
}

export const createBloodBank = async (bags: number, type: string, rh: string) => {
    try{
        const c = await prisma.bloodBank.create({
            data:{
                bags,
                type,
                rh
            }
        })
        return c
    }catch(error){
        console.log(error)
        return {message: "Internal server error"}
    }
}