import React from 'react'
import './ProductsPage.css'
import { ProductCard } from '../../Components'
import data from '../../Utils/data.json'
import { addToCartHandle } from '../../Utils'

export const ProductsPage = (props) => {
  return (
    <div className='productsContainer'>
      {data.map(product => {
        return (<ProductCard
          key={product._id}
          productImg={product.productImg}
          productName={product.name}
          productBrandName={product.brand}
          prodcutPrice={product.price}
          addToCartClick={()=> addToCartHandle(product, props.cart, props.setCart)}
        />
        )
      })}
    </div>
  )
}
