import React from 'react'
import { withRouter } from 'react-router-dom'


const checkout = (props) => {
    console.log(props)
    const itemSummary = props.items.map( item => {
        return <li key={item.itemId}>
            <p>Test: {item.itemName}</p> 
            <p>Lab Name: {item.labName}</p>
            <p>Price: {item.minPrice} * {item.quantity} </p> 
        </li>
    })

    return (
        <div className="centered">
            <h3>Your Booking Summary</h3>
            <p>You have booked the following tests : </p>
            <ul className="centered">
                {itemSummary}
            </ul>
            <p><strong>Total Price : {props.totalPrice.toFixed(2)}</strong></p>
        </div>
    )
}

export default withRouter(checkout)