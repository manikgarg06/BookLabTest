import React from 'react'

import './CartItem.css'

const item = (props) => {

    const {cartItem} = props;

    return (
        <div>
            <li className="cart__item">
                <h1>{cartItem.itemName}</h1>
                <h2>Qty: {cartItem.quantity}</h2>
                <h2>Price: {cartItem.price}</h2>
                <button className="btn danger" onClick={() => props.deleteItem(cartItem)}>Delete</button>
            </li>
        </div>
    )
}
export default item