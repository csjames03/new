'use client'
import React from 'react'
import { useState } from 'react' 
const DonationsModal = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [mname, setMname] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const [medicalStatus, setMedicalStatus] = useState("")
    const [sex, setSex] = useState("")
    const [bloodType, setBloodType] = useState("")
    const [rh, setRh] = useState("")
    const [bags, setBags] = useState("")
  return (
    <form className='absolute w-1/2 h-5/8 top-50 left-50  bg-red-300 z-50'>
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{ setFname( e.target.value)}} />
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{ setLname( e.target.value)}} />
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{ setMname( e.target.value)}} />
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{ setAddress( e.target.value)}} />
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{ setContact( e.target.value)}} />
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{ setMedicalStatus( e.target.value)}} />
            <input type="number" />
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{ setFname( e.target.value)}} />
            <select onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>{ setSex( e.target.value)}}>
                <option value="Male">Male</option>
                <option value="Femle">Female</option>
            </select>
            <select onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>{ setBloodType( e.target.value)}}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="O">O</option>    
                <option value="AB">AB</option>
            </select>
            <select onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>{ setRh( e.target.value)}}>
                <option value="+">+</option>
                <option value="-">-</option>
            </select>
            <input type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{ setBags( e.target.value)}} />
    </form>
  )
}

export default DonationsModal