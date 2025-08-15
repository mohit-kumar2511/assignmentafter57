import React, { useState } from 'react'

const Card = ({img,type,title,price,isSale}) => {
    
  return (
    <div className='w-[280px] flex flex-col inline-block mb-4'>
        <div className='relative'>
            <img className='h-[280px] mb-2' src={img} alt="img"/>
            {isSale ? (<button className='bg-orange-600 absolute -top-3 -right-2 rounded-full px-1 py-2 text-sm'>Sale!</button>):null}
        </div>
        <p className='text-sm text-gray-400'>{type}</p>
        <h1 className='font-bold'>{title}</h1>
        <div className='flex w-[15px]'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/24px-Star_empty.svg.png" alt="rating"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/24px-Star_empty.svg.png" alt="rating"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/24px-Star_empty.svg.png" alt="rating"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/24px-Star_empty.svg.png" alt="rating"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/24px-Star_empty.svg.png" alt="rating"/>
        </div>
        <h3 className='font-bold'>₹{price}</h3>
    </div>
  )
}

export default Card