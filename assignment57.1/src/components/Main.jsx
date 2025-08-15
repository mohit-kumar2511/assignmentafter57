import { useState } from 'react'
import React from 'react'
import Card from './Card'
import ProductList from './ProductList'

const Main = () => {

    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("default");

    const allData=[
        {
            img:"https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2023/09/pbi-iphone-15-plus.png",
            type:"SmartPhone",
            title:"Apple iPhone 15",
            price:64900,
            isSale:false
        },
        {
            img:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70&crop=false",
            type:"SmartPhone",
            title:"Apple iPhone 16",
            price:74900,
            isSale:true
        },
        {
            img:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false",
            type:"SmartPhone",
            title:"Apple iPhone 15 Plus",
            price:74900,
            isSale:false
        },
        {
            img:"https://www.fnp.com//images/pr/l/v20200423195637/saasu-maa-special-printed-mug_1.jpg",
            type:"Mug",
            title:"Sasu Maa Special Coffee Mug",
            price:349,
            isSale:true
        },
        {
            img:"https://www.fnp.com//images/pr/l/v20201009022733/forever-always-printed-mug-hand-delivery_1.jpg",
            type:"Mug",
            title:"Forever Always Printed Coffee Mug",
            price:349,
            isSale:true
        },
        {
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/mug/m/z/x/teal-gold-milk-cup-glossy-finish-stoneware-ceramic-cup-real-gold-original-imah9j3exmgxstb9.jpeg?q=70",
            type:"Mug",
            title:"Teal Milk Mug",
            price:799,
            isSale:false
        },
        {
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/jean/s/r/l/28-jean-slim-003-noah-original-imah52sybrszhgyu.jpeg?q=70",
            type:"Jeans",
            title:"Men Jogger Fit Jeans",
            price:499,
            isSale:false
        },
        {
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/jean/n/s/w/38-rdm1104-red-tape-original-imagxqhnkfhzkgfp.jpeg?q=70",
            type:"Jeans",
            title:"Men Regular Jeans",
            price:899,
            isSale:true
        },
        {
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/jean/p/r/l/36-baggy-jeans-zaba-denim-original-imahbgvgxen3jm6u.jpeg?q=70",
            type:"Jeans",
            title:"Men Straight Fit Jeans",
            price:799,
            isSale:false
        },
    ]

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
    <div className='bg-white my-12 mx-32 py-12 px-16'>
        <div className='flex justify-between mr-2'>
            <input value={query} onChange={handleChange} placeholder='Search' className='border border-gray-300 text-gray-700 px-4 bg-gray-100 text-sm' />
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
                <img
                    className='w-4 h-4'
                    src="https://static.vecteezy.com/system/resources/previews/017/785/202/large_2x/right-arrow-icon-on-transparent-background-free-png.png"
                    alt="arr"
                />
            </button>
        </div>
    </div>
)
}

export default Main