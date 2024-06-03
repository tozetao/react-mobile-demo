import React, { Component } from 'react'




export default class Tab extends Component {
  getNav = () => {
    const { data } = this.props
    if (Array.isArray(data) && data.length > 1) {
      return <div className='pidNav'>
          {
            data.map((item, index) => {
              return (
                <span key={index} className={ index === 0 ? 'active' : '' }></span>  
              )
            })      
          }
      </div>
    }
    return null
  }

  render() {
    const { data, className, renderItem } = this.props

    return (
      <div className={ "tab " + className}>
        <ul className='pidList'>
          {
            data.map((item, index) => {
              return <li key={index}>
                { renderItem(item) }
              </li>
            })
          }
        </ul>
        { this.getNav() }
      </div>
    )
  }
}
