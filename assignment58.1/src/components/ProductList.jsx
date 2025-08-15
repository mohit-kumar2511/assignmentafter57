import React from 'react'
import Card from './Card'

const ProductList = ({products}) => {
  return (
    <div className='flex flex-col sm:flex-row flex-wrap gap-5'>
        {products.map(function(items,index){
            return (
                <Card
                    key={index}
                    id={items.id}
                    img={items.img}
                    type={items.type}
                    title={items.title}
                    price={items.price}
                    isSale={items.isSale}
                />
            );
        })}
    </div>
  )
}

export default ProductList