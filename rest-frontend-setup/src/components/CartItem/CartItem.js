import React from 'react'

import './Item.css'

const item = (props) => {
    return (
        <div>
            <li className="cart__item">
                <h1>{props.itemName}</h1>
                <h2>Qty: {props.quantity}</h2>
                <h2>Price: {props.minPrice}</h2>
                <button className="btn danger" type="submit">Delete</button>
            </li>
        </div>
    )
}
export default item