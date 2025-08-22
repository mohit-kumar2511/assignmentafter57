import React from 'react'
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = ({productCount}) => {
  return (
    <header className="bg-white sm:h-[60px] flex justify-between items-center sm:px-20 px-6">
      <Link to='/'>
        <img
        className="sm:pl-8 w-32 sm:w-48 object-contain"
        src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png"
        alt="Flipkart Logo"
        />
      </Link>
      <Link to='/cart' className='relative'>
        <RiShoppingCartFill className='text-3xl text-orange-500' />
        <span className="absolute -top-2 -right-1 min-w-[20px] h-[20px] flex items-center justify-center text-xs font-semibold text-white bg-orange-500 rounded-full px-1 shadow-md">
            {productCount}
        </span>
      </Link>
    </header>
  )
}

export default Header