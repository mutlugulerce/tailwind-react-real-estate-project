import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate()
    const [selected,setSelected] =useState('home')
    const routes = ['home','about','services','contact']
  return (
    <div className="bg-white shadow-lg">
        <div className="px-4 mx-auto">
       <div className="flex items-center justify-between">
        <div className="flex space-x-12">
            <div
  onClick={() => navigate("/")}
className="flex items-center cursor-pointer" >
                <FaHome size='50' className="text-orange-500"  />
             <h1 className="ml-3 text-xl font-semibold text-gray-500">Mutlu Gülerce</h1>      
            </div>
       
       <div className="hidden space-x-9 md:flex">
        {routes.map((item,index) => (
            <nav key={index}
            className={`cursor-pointer fonst-semibold py-4 hover:text-blue-500 transition duration-300 capitalize
        ${
            selected !== item
            ? 'text-gray-500'
            : 'text-blue-500 border-b-4 border-blue-500'
        }`}
        onClick={() => {
            navigate(item !== 'home' ? item : '/')
            setSelected(item)
        }}
            >{item}</nav>
        ))}
         </div>
       </div>
       </div>
        </div>
     
    </div>
  )
}