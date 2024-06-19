import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  // const className = props.open ? ''
  return (
    <nav className='menu'>
      <Link to="/" className="iconfont icon-home">首页</Link>
      <Link to="/course" className="iconfont icon-wenda">课程安排</Link>
      <Link to="/lecture" className="iconfont icon-laoshi">讲师团队</Link>
    </nav>
  )
}
