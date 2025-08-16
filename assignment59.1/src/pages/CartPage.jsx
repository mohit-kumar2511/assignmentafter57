import React from 'react'
import CartList from '../components/CartList'

const CartPage = () => {
  return (
    <div className='flex flex-col items-end bg-white h-full my-2 mx-6 py-8 px-24'>
        <CartList/>
        <div className='border mt-4 border-gray-300 w-[30%]'>
            <h1 className='border-b bg-gray-50 text-sm font-bold px-2 py-1 border-gray-300'>Cart totals</h1>
            <div className='p-3 text-sm'>
                <div className='border-b py-1 px-2 border-gray-200 lg:pr-[35%] flex justify-between'>
                <span>Subtotal</span>
                <span>$166</span>
                </div>
                <div className='border-b py-1 px-2 border-gray-200 flex lg:pr-[35%] justify-between'>
                <span>Total</span>
                <span>$166</span>
                </div>
            <button className='bg-[#FF5151] text-[12px] mt-2 w-full text-white rounded px-4 py-2'>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    </div>
  )
}

export default CartPage