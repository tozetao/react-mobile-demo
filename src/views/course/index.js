import React, { Component } from 'react'



import Header from '../../common/components/header'
import Footer from '../../common/components/footer'

import '../../common/css/course.css'

export default class Course extends Component {
  render() {
    return (
      <div>
        <Header menu={true} hasSignedIn={false} />
        <div className="page">
          <div className="course-page page-content">
            <h2 className="course-title">
              <img alt="" src={require("../../common/img/course-title.png")} />
            </h2>
            <table className="course-table">
                <thead>
                <tr>
                    <th>星期</th>
                    <th>时间</th>
                    <th>学习内容</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td rowSpan="2" className="course-day-1"><img alt="" src={require("../../common/img/week-1.png")} /></td>
                    <td>上午</td>
                    <td>前端代码初始</td>
                </tr>
                <tr>
                    <td>下午</td>
                    <td>基本属性：背景，边框</td>
                </tr>
                <tr>
                    <td rowSpan="2"  className="course-day-2"><img alt="" src={require("../../common/img/week-2.png")} /></td>
                    <td>上午</td>
                    <td>H5标签与css选择器</td>
                </tr>
                <tr>
                    <td>下午</td>
                    <td>练习题</td>
                </tr>
                <tr>
                    <td rowSpan="2" className="course-day-3"><img alt="" src={require("../../common/img/week-3.png")} /></td>
                    <td>上午</td>
                    <td>浮动的深度剖析</td>
                </tr>
                <tr>
                    <td>下午</td>
                    <td>定位进阶</td>
                </tr>
                <tr>
                    <td rowSpan="2" className="course-day-4"><img alt="" src={require("../../common/img/week-4.png")} /></td>
                    <td>上午</td>
                    <td>表单详解</td>
                </tr>
                <tr>
                    <td>下午</td>
                    <td>表单的相关属性</td>
                </tr>
                <tr>
                    <td className="course-day-5"><img alt="" src={require("../../common/img/week-5.png")} /></td>
                    <td>全天</td>
                    <td>浏览器兼容性</td>
                </tr>
                <tr>
                    <td className="course-day-last"><img alt="" src={require("../../common/img/week-last.png")}/></td>
                    <td colSpan="2">合理安排自己的时间，记得做联系哦！</td>
                </tr>
                </tbody>
            </table>
            <p className="course-more">
                <span>更详情的课程安排请点击：</span><a href="https://www.miaov.com">www.miaov.com</a>
            </p>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}
