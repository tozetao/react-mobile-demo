import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Works extends Component {
  render() {
    const lis = []
    for (let i = 0; i < 4; i++) {
      lis.push(
        <li key={i}>
          <Link to="/work">
            <img src={require('../../common/img/work.png')} alt="" />
            <div className="workMask">
              <h4 className="workTitle">时空超链接</h4>
              <span className='iconfont icon-dianzan'>200</span>
              <span className='iconfont icon-liuyan'>5000</span>
            </div>
          </Link>
        </li>
      )
    }
    return (
      <section className='workList'>
        <h2 className="workListTitle">学员作品</h2>
        <ul className="works">
          { lis }
        </ul>
      </section>
    )
  }
}
