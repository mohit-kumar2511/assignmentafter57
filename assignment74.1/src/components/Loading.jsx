import React from 'react'
import { BiLoaderCircle } from "react-icons/bi";

const Loading = () => {
  return (
    <div className='flex h-[80vh] items-center justify-center'>
        <BiLoaderCircle className='text-orange-500 sm:text-7xl text-6xl' 
            style={{ animation: "spin 3s linear infinite" }}
        />
    </div>
  )
}

export default Loading