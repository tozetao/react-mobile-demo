import React, { Component } from 'react'

import Header from '../../common/components/header'
import Tab from '../../common/components/tab'

import MessageList from './messageList'

import '../../common/css/work.css'

const banners = [
  require('../../common/img/tab/img1.png'),
  require('../../common/img/tab/img2.png'),
  require('../../common/img/tab/img3.png'),
  require('../../common/img/tab/img4.png')
]

let html = `<strong>危险的内容</strong>`

export default class Works extends Component {
  render() {
    return (
      <div>
        <Header menu={true} hasSignedIn={false} />
        <div className="page work-page">
          <Tab
            className="banner"
            renderItem={
              (item) => (<img src={item} alt="" />)
            }
            data={banners}
          />
          <h1 className='work-title'>
            JS会员: 张三的作品集合
          </h1>
          <article className="work-details" dangerouslySetInnerHTML={{
            __html: html
          }}>
          </article>
          <div className="work-aside">
            <span className="good">有12人觉得很赞</span>
            {/* eslint-disable-next-line */}
            <a href='/' className="iconfont icon-dianzan"></a>
          </div>

          <MessageList />

          <div className="post-message">
            <a id="message-btn" className="iconfont icon-liuyan" >
              回复本帖
            </a>
          </div>
        </div>
      </div>
    )
  }
}
