import React from 'react'
import CartRow from './CartRow'

const CartList = () => {

  const isDisable=true;

  return (
    <div className='border w-full border-gray-200 bg-white'>
      <div className='flex border-b border-gray-300 py-1 justify-between items-center bg-gray-100 px-8'>
        <span className='w-6'></span> {/* For RxCross2 icon */}
        <span className='w-[50px]'></span> {/* For image */}
        <span className='w-1/3 font-bold'>Product</span>
        <span className='w-[80px] font-bold'>Price</span>
        <span className='w-[80px] font-bold'>Quantity</span>
        <span className='w-[80px] font-bold'>Subtotal</span>
    </div>
    <CartRow />
    <CartRow />
    <div className='flex bg-gray-50 justify-between p-1'>
      <div className='flex p-1'>
        <input className='border  border-gray-300 w-32 text-[12px] pl-2' type='text' placeholder='Coupon code'/>
        <button className='bg-[#FF5151] rounded text-[12px] py-1 text-white px-6 ml-1 text-sm'>APPLY COUPON</button>
      </div>
      <button className={`rounded text-[12px] py-1 text-white px-4 mx-1 ${
        isDisable ? 'bg-[#FF5151] cursor-not-allowed opacity-70' : 'bg-[#FF5151] hover:bg-orange-500'
      } `}>UPDATE CART</button>
    </div>
</div>
  )
}

export default CartList