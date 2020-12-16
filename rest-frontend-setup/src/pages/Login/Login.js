import React, { Component } from 'react';

import './Login.css';


class Login extends Component {
  state = {
    loginForm: {
      email: '',
      password: ''
    }
  };

  inputChangeHandler = (input, value) => {
    this.setState(prevState => {
      const updatedForm = {
        ...prevState.loginForm,
        [input]: value
      };
      return {
        loginForm: updatedForm
      };
    });
  };


  render() {
    return (
      <section className="form">
        <form
          onSubmit={e =>
            this.props.onLogin(e, {
              email: this.state.loginForm.email.value,
              password: this.state.loginForm.password.value
            })
          }
        >
          <div className="input">
            <label htmlFor="email">Your E-Mail</label>
            <input  
              type="email" 
              onChange={this.inputChangeHandler}
              value={this.state.loginForm['email'].value}
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input  
              type="password" 
              onChange={this.inputChangeHandler}
              value={this.state.loginForm['password'].value}
            />
          </div>
          <button type="submit" className="button" >
            Login
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
