import { useEffect, useState } from 'react'
import React from 'react'
import Card from './Card'
import ProductList from './ProductList'
import { FaArrowRightLong } from "react-icons/fa6"
import { getProductList } from './api'
import Loading from './Loading'
import { IoSearchSharp } from "react-icons/io5";


const Main = () => {

    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("default");
    const [allData, setAllData] = useState();


    useEffect(function(){
        const p=getProductList();
        p.then(function(res){
            setAllData(res.data.products);
            console.log(res.data.products);
        })
    },[]);

    if(!allData){
       return <div> <Loading/></div>
    }


    let data=allData.filter(function(item){
            return item.title.toLowerCase().indexOf(query.toLowerCase())!==-1;
    });

    if(sort === 'name'){
        data.sort(function(x,y){
            return x.title < y.title ? -1 : 1;
        });
    }else if(sort === 'pricelh'){
        data.sort(function(x,y){
            return x.price - y.price;
        });
    }else if(sort === 'pricehl'){
        data.sort(function(x,y){
            return y.price - x.price;
        });
    }


    // const [data, setData] = useState(allData);

    function handleChange(event){
        // const newQuery = event.target.value;
        // const newdata=allData.filter(function(item){
        //     return item.title.toLowerCase().indexOf(newQuery.toLowerCase())!==-1;
        // });
        setQuery(event.target.value);
        // setData(newdata);
    }

    function handleSortChange(event){
        setSort(event.target.value);
    }


return (
    <div className='bg-white m-4 sm:my-12 sm:mx-32 py-12 px-8 sm:px-16'>
        <div className='flex flex-col gap-2 md:flex-row justify-between mr-2'>
           <div className='relative'>
                <input value={query} onChange={handleChange} placeholder='💡What’s trending?!' className='border w-full py-1 border-gray-300 text-gray-700 pr-4 pl-2 bg-gray-100 text-sm' />
                <IoSearchSharp className='absolute top-2 right-4 text-gray-500' />
           </div>
            <select value={sort} onChange={handleSortChange} className='bg-gray-100 py-1 pl-1 pr-10 text-gray-700 text-sm border border-gray-300'>
                <option value="default">Default sorting</option>
                <option value="name">Sort by title</option>
                <option value="pricelh">Sort by price: low to high</option>
                <option value="pricehl">Sort by price: high to low </option>
            </select>
        </div>
        <main className='mt-8'>
            <ProductList products={data} />
        </main>
        <div className='flex mt-6 gap-1 mb-6'>
            <button className='px-3 py-1 border border-orange-500 text-white bg-orange-500 '>1</button>
            <button className='px-3 py-1 border border-orange-500 text-orange-500 '>2</button>
            <button className='w-8 h-8 py-4 flex items-center justify-center border border-orange-500'>
                <FaArrowRightLong className='text-orange-500' />
            </button>
        </div>
    </div>
)
}

export default Main