import React from 'react'
import './SaveForLaterCard.css'

export const SaveForLaterCard = (props) => {
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
                    <button onClick={props.deleteFromSaveHandle} className="removeBtn">Delete Saved Item</button>
                </p>
            </div>
        </div>
    )
}
