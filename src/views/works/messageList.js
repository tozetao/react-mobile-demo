import React, { Component } from 'react'

export default class MessageList extends Component {
  render() {
    return (
      <div className='message-list'>
        <p className="work-no-info">抢个沙发把</p>
        <aside>
          <div className="message-info">
            <span>leo</span>回复:
          </div>
          <div className="message-con">hello hello</div>
        </aside>
        <footer className='loadMore'><span>这是底线了....</span> </footer>
      </div>
    )
  }
}
