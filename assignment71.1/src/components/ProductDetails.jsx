import React, { useState } from 'react'
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link, useParams } from 'react-router-dom';
import { getProductDetail } from './api';
import { useEffect } from "react";
import Loading from './Loading';
import PageNotFound from './PageNotFound';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const ProductDetails = ({addToCart}) => {

  const Id = +(useParams().id);
  const [product,setProduct] = useState();
  const [count,setCount] = useState(1);
  const [loading,setLoading] = useState(true);
 

  useEffect(function(){
    const p=getProductDetail(Id);

    p.then(function(res){
      setProduct(res.data);
      setLoading(false);
    }).catch(function(res){
      setLoading(false);
    })
  },[Id]);
  
  function handleCount(e){
    if(e.target.value < 1){
      setCount(0);
    }else{
    setCount(e.target.value);
    }
  }

  function hanldeAddToCart(){
    addToCart(product.id,count);
  }

  function setHandleCount(){
    setCount(1);
  }


  if(loading){
    return <div><Loading/></div>
  }

  if(!product){
    return <div><PageNotFound/></div>
  }

  return (
    <div className='class="bg-[#F4F5F6]"'>
      <Link to="/" className='text-3xl text-[#FF5151] flex items-center gap-2 ml-8 mt-4'>
        <FiArrowLeftCircle />
      </Link>
      <div className="flex flex-col sm:flex-row mx-[20px] gap-4 px-8 py-4 bg-white sm:mx-[120px] mb-[40px] mt-[10px]">
      <img className='h-[50%]' src={product.thumbnail} alt="img"/>
      <div className="ml-8 space-y-4">
        <h1 className="text-2xl font-bold text-[#415160]">
          {product.title}
        </h1>
        <p className="text-xl font-bold text-[#415160]">
          ₹{product.price}
        </p>
        <p className="text-[#415160]">
          Floralis gets to you premium Coffee Mugs for a positive and bright mornings. These Mugs are also perfect for tea or hot chocolate for those cold winter nights. 
        </p>
        <input onChange={handleCount} value={count} type="number" placeholder='1' className='border-[1.5px] w-12 mr-1 pl-1 w-10 border-gray-400' />
        <button onClick={hanldeAddToCart} className="bg-[#FF5151] hover:cursor-pointer border-[1px] border-[#FF5151] text-white px-4 py-1 rounded text-sm">
          ADD TO CART
        </button>
      </div>
    </div>
    <div className='flex justify-between items-center px-6 pb-6 sm:px-32' >
      <div className='text-white px-2 py-1 rounded bg-orange-500'>
        <Link onClick={setHandleCount} className='flex items-center gap-2 text-lg pb-1' to={'/details/'+ (Id-1)} >
        <FaAngleDoubleLeft className='mt-1' />
        Prev
        </Link>
      </div>
      <div className='text-white px-2 py-1 rounded bg-orange-500'>
        <Link onClick={setHandleCount} className='flex items-center gap-2 text-lg pb-1' to={'/details/'+ (Id+1)} >
        Next
        <FaAngleDoubleRight className='mt-1' />
        </Link>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails