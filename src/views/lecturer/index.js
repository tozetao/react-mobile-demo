import React, { Component } from 'react'

import Header from '../../common/components/header'
import Footer from '../../common/components/footer'
import Tab from '../../common/components/tab'

import Job from './job';
import JoinUs from './join-us'

import '../../common/css/lecturer.css'

const data = [
  [
    { id: 1, name: 'name1', img: require('../../common/img/job-photo.png') },
    { id: 2, name: 'name1', img: require('../../common/img/job-photo.png') },
    { id: 3, name: 'name1', img: require('../../common/img/job-photo.png') }
  ],
  [
    { id: 4, name: 'name2', img: require('../../common/img/job-photo.png') },
    { id: 5, name: 'name3', img: require('../../common/img/job-photo.png') },
    { id: 6, name: 'name4', img: require('../../common/img/job-photo.png') }
  ]
]

export default class Home extends Component {
  render() {
    const renderTabItem = item => {
      return <ul className='lecturer-list'>
        {
          item.map(item => {
            return (
              <li key={item.id}>
                <a href="http://www.baidu.com">
                  <div className="lecturer-thumbnail" style={{
                    backgroundImage: `url(${item.img})`
                  }}>
                  </div>
                  <p className='lecturer-name'>{ item.name }</p>
                </a>
              </li>
            )
          })
        }
      </ul>
    }
    return (
      <div>
        <Header menu={true} />
        <div className="page lecturer-page">
          <section className='lecturer-item'>
            <h2 className='lecturer-item-title'>
              <img src={require('../../common/img/lecturer-title.png')} />
            </h2>
            <Tab className="lecturer-tab" data={data} renderItem={ renderTabItem } />
          </section>
          <JoinUs />
          <Job />
          <Footer />
        </div>
      </div>
    )
  }
}
