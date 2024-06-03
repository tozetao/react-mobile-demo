import React, { Component } from 'react'

import Header from '../../common/components/header'

import '../../common/css/login.css'

import LoginForm from './loginForm'
import RegisterForm from './registerForm'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header menu={true} hasSignedIn={false} />
        <div className="page loginPage">
          <h2 className="loginTitle">
            <img src={require('../../common/img/loginTitle.png')} alt="login.png" />
          </h2>
          <div className="loginWrap">
            <div className="login3d">
              <LoginForm />
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
