import React from 'react'
import './Cart.css'
import { CartProductCard, SaveForLaterCard } from '../../Components'
import { decrementhandle, incrementHandle, removeFromCartHandle, saveForLaterHandle, deleteFromSaveHandle } from '../../Utils'

export const Cart = (props) => {
  const totalCartPrice = (cart) => {
    const cartPrices = cart.map(
      (item) => parseInt(item.price) * item.quantity,
    )
    const cartTotal = cartPrices.reduce((curr, acc) => curr + acc, 0)
    return cartTotal
  }

  const totalNumberOfItems = (cart) => cart.map((item) => parseInt(item.quantity)).reduce((curr, acc) => curr + acc, 0)
  return (
    <div className='cartAndDetails'>
      <div>
        <h2>Cart</h2>
        {!props.cart.length > 0 && <p>Your Cart is empty.</p>}
        {props.cart.map(cartItem => {
          return (<CartProductCard
            productImg={cartItem.productImg}
            productName={cartItem.name}
            productPrice={cartItem.price}
            disableDecBtn={cartItem.quantity === 1 ? true : ''}
            decrementFunc={() => decrementhandle(cartItem, props.cart, props.setCart)}
            quantity={cartItem.quantity}
            incrementFunc={() => incrementHandle(cartItem, props.cart, props.setCart)}
            removeFromCartHandle={() => removeFromCartHandle(cartItem, props.cart, props.setCart)}
            saveForLatertHandle={() => saveForLaterHandle(cartItem, props.cart, props.setCart, props.savedForLater, props.setSavedForLater)}
          />)
        })}
        {props.savedForLater.length > 0 && <h2>Saved For Later</h2>}
        {props.savedForLater.map(savedItem => {
          return (
            <SaveForLaterCard
              productImg={savedItem.productImg}
              productName={savedItem.name}
              productPrice={savedItem.price}
              deleteFromSaveHandle={() => deleteFromSaveHandle(savedItem, props.savedForLater, props.setSavedForLater)}
            />
          )
        })}
      </div>
      {props.cart.length > 0 && <div>
        <h2>Cart Details</h2>
        <p className='classDetail'><span className='cartDetailText'>Total Quantities: </span><span>{totalNumberOfItems(props.cart)}</span></p>
        <p className='classDetail'><span className='cartDetailText'>Total Price: </span><span>Rs. {totalCartPrice(props.cart)}</span></p>
      </div>}
    </div>
  )
}
