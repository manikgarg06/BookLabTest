import React from 'react'
import CartItem from '../../components/CartItem/CartItem'
import './Cart.css'
import { withRouter } from 'react-router-dom'

const cart = (props) => {

    
    console.log(props  )
    return (
        <div>
            <ul className="cart__item-list">
                {props.cartItems.map( cartItem => {
                    return <CartItem cartItem={cartItem} key={cartItem.itemId + "C"} deleteItem={props.deleteFromCarthandler} />
                } )}
            </ul>
            <div className="centered">
               { props.cartItems.length > 0 ?  <><h2>Total Price :{props.totalPrice}</h2>
                <button className="btn" onClick={props.orderHandler} >Order Now </button></> : <h2>Your Cart is empty</h2> }
            </div>
        </div>
    )
}

export default withRouter(cart);