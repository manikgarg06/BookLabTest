import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import './App.css';
import TestsPage from './pages/Tests/Tests'
import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
import CartPage from './pages/Cart/Cart';
import CheckoutPage from './components/Checkout/Checkout'


class App extends Component {

  state = {
    isAuth: false,
    cart : [],
    totalPrice : 0,
    order : {}
  };
  
  defaultUsers = [{email :  "test@test.com",password : "test"},{email :  "test2@test.com",password : "test2"}]

// To handle the login event from Login Page
  loginHandler = (event, authData) => {
    event.preventDefault();
    if(authData.email && authData.password ){
      const index = this.defaultUsers.findIndex( user => {
        return user.email === authData.email && user.password === authData.password
      })
      if(index > -1){
        this.setState({...this.state,isAuth : true})
      }else{
        alert('Username or password invalid')
      }
    }else{
      // this.setState({...this.state,isAuth : true})
      alert("Username or password cannot be empty")
    }

  }
// logout the user from application.
  logoutHandler = () => {
    this.setState({isAuth : false})
  }
// to add the item into the cart and it will be visible 
// in Cart Page
  addToCartHandler = (cartItem) => {
    let updatedCartItem;
    let updatedCart;
    const cartItemIndex = this.state.cart.findIndex( item => {
      if(item.rowid === cartItem.rowid){
        return true;
      }
      return false
    })
    let cart = this.state.cart
    if(cartItemIndex > -1){
      const cartItem = this.state.cart[cartItemIndex]
      updatedCartItem = {...cartItem , quantity :cartItem.quantity+1,price : Number(cartItem.minPrice)*(cartItem.quantity+1)}
      updatedCart = [...cart];
      updatedCart[cartItemIndex] = updatedCartItem;
    }else{
      updatedCartItem = {...cartItem,quantity : 1,price : cartItem.minPrice};
      updatedCart = cart.concat(updatedCartItem);
    }

    this.setState(prevState => {
      return  {...prevState,cart : updatedCart,totalPrice : prevState.totalPrice + Number(cartItem.minPrice)}
    })
  }
  // When user click on Order Now button from Cart Page redirect the user to checkout page
  orderHandler = () => {
    const order = {items : [...this.state.cart],totalPrice : this.state.totalPrice}

    this.setState( prevState => {
      return {...prevState,order: order}
    })
    this.props.history.replace('/checkout')
    this.setState(prevState => {
      return {...prevState,cart : [],totalPrice : 0}
    })
}
//  deletes the item from cart and update the price accordingly
  deleteFromCarthandler = (cartItem) => {

    let updatedCartItem;
    let updatedCart;
    const cartItemIndex = this.state.cart.findIndex( item => {
      if(item.rowid === cartItem.rowid){
        return true;
      }
      return false
    })
    let cart = this.state.cart
    if(cartItemIndex > -1){
      const cartItem = this.state.cart[cartItemIndex]
      if(cartItem.quantity > 1){
        updatedCartItem = {...cartItem , quantity :cartItem.quantity-1,price : Number(cartItem.minPrice)*(cartItem.quantity-1)}
        updatedCart = [...cart];
        updatedCart[cartItemIndex] = updatedCartItem;
      }else{
        updatedCart = cart.filter( item => {
          return item.itemId !== cartItem.itemId
        })
      }
    }

    this.setState(prevState => {
      return  {...prevState,cart : updatedCart,totalPrice : prevState.totalPrice - Number(cartItem.minPrice)}
    })

  }

  render(){
    let routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={props => (
            <LoginPage
              {...props}
              onLogin={this.loginHandler}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
    if(this.state.isAuth){
      routes = (
        <Switch>
            <Route path="/" exact render={(props) => (<TestsPage  cartHandler={this.addToCartHandler} />)} />
            <Route path="/cart" exact render={(props) => <CartPage 
            deleteFromCarthandler={this.deleteFromCarthandler} 
            cartItems={this.state.cart} totalPrice={this.state.totalPrice} 
            orderHandler = {this.orderHandler}
            />} />
            <Route path="/checkout" exact render = {(props) => <CheckoutPage items={this.state.order.items} totalPrice={this.state.order.totalPrice}/>}  />
            <Redirect to = "/" />
        </Switch>
      )
    }
    return (<>
      <MainNavigation 
        onLogout={this.logoutHandler}
        isAuth={this.state.isAuth} 
      />
      <main className="content"></main>
      {routes}
    </>)
  }
}

export default withRouter(App);
