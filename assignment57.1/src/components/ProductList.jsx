import React from 'react'
import Card from './Card'

const ProductList = ({products}) => {
  return (
    <div className='flex flex-wrap gap-4'>
        {products.map(function(items){
            return (
                <Card
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