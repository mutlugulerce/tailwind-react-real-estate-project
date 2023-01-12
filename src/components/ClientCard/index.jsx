import React from 'react'
import avatar from "../../assets/avatar.png";


export default function ClientCard({data : {title,name,content,image}}) {
  return (
    <div>
      <div className='bg-white shadow-lg py-8 px-4'>
      <p className='mb-12 text-gray-500 text-xl  tracking-wide'>"{content}"</p>
      <div className='flex items-center bg-green-100 rounded-full'>
      <a href="/" className="relative block">
          <img src={avatar} alt="avatar" />
        </a>
      <div className='flex flex-col justify-around ml-3' >
        <h4 className='text-green-400 font-semibold'>{title}</h4>
        <h4>{name}</h4>
      </div>
      </div>
      </div>
    </div>
  )
}
