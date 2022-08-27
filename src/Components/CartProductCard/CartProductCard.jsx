import React from 'react'
import './CartProductCard.css'

export const CartProductCard = (props) => {
  return (
    <div className="cartProductCard">
      <div className="cartProductImgContainer">
        <img
          className="productImg"
          src={props.productImg}
          alt={props.productName}
        />
      </div>
      <div className="cartProductDetails">
        <p className="cartProductName">{props.productName}</p>
        <p className="cartProductPrice">Rs. {props.productPrice}</p>
        <p className="cardBtnContainer">
          <span>
            <button disabled={props.disableDecBtn} onClick={props.decrementFunc} className="btnPlusMinus">-</button>
            <span className="cardQuantity"> {props.quantity} </span>
            <button onClick={props.incrementFunc} className="btnPlusMinus">+</button>
          </span>
          <button onClick={props.removeFromCartHandle} className="removeBtn">Remove</button>
          <button onClick={props.saveForLatertHandle} className="removeBtn">Save For Later</button>
        </p>
      </div>
    </div>
  )
}
