import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { menu, hasSignedIn } = this.props

    let menuIcon = <i className='header-btn-left iconfont icon-caidan' />
    if (!menu) {
      menuIcon = <i className='header-btn-left iconfont icon-fanhui'></i>
    }

    let loginIcon = <i className='header-btn-right iconfont icon-denglu'></i>
    if (hasSignedIn) {
      loginIcon = <span className='header-btn-right header-username'>username</span>
    }

    return (
      <div className='header'>
        { menuIcon }
        <img src={require('../../common/img/logo.png')} alt="logo" className="header-logo" />
        { loginIcon }
      </div>
    )
  }
}
