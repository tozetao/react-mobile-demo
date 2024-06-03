import React, { Component } from 'react'

import Layout from '../../common/components/layout'
import Tab from '../../common/components/tab'

import Course from './course'
import Miaov from './miaov'
import Vip from './vip'
import Works from './workList'

import '../../common/css/home.css'
import '../../common/css/lecturer.css'

const banners = [
  require('../../common/img/tab/img1.png'),
  require('../../common/img/tab/img2.png'),
  require('../../common/img/tab/img3.png'),
  require('../../common/img/tab/img4.png')
]

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="page">
          <Tab className="banner" renderItem={(item) => (<img src={item} alt="" />)} data={banners} />

          <Course />
          <Vip />
          <Miaov />
          <Works />

          <footer className='loadMore loadIn'><span>加载内容....</span> </footer>
        </div>
      </Layout>
    )
  }
}
