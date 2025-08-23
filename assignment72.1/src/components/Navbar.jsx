import React from 'react'
import { LuListTodo } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className='flex items-center gap-1 py-4 px-8 border-b border-gray-200'>
        <LuListTodo className='text-4xl text-yellow-500' />
        <h1 className='text-xl font-bold'>TaskZen</h1>
    </div>
  )
}

export default Navbar