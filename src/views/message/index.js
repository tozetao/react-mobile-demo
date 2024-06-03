import React, { Component } from 'react'
import Header from '../../common/components/header'

import '../../common/css/message.css'

export default class Message extends Component {
  render() {
    return (
      <div>
        <Header back={true} />
        <div className="page">
          <div className="scroll-con">
            <textarea className="message"></textarea>
            <span className="miaov-btn miaov-btn-md message-btn">
              提交留言
            </span>
          </div>
        </div>
      </div>
    )
  }
}
