import React, { Component } from 'react'

import Header from '../../common/components/header'
import Menu from '../../common/components/menu'

export default class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Header menu={true} hasSignedIn={false} />
        <Menu />
        { children }
      </>
    )
  }
}
