import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import './App.css';
import TestsPage from './pages/Tests/Tests'
import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
import CartPage from './pages/Cart/Cart';


class App extends Component {

  state = {
    isAuth: false,
    authLoading: false,
  };
  loginHandler = (event, authData) => {
    event.preventDefault();
    console.log('clicked')
    this.setState({...this.state,isAuth : true})
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
              loading={this.state.authLoading}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
    if(this.state.isAuth){
      routes = (
        <Switch>
            <Route path="/" exact render={(props) => (<TestsPage />)} />
            <Route path="/cart" exact render={(props) => <CartPage />} />
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

export default App;
