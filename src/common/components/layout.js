import React, { Component } from 'react'

import Header from '../../common/components/header'
import Menu from '../../common/components/menu'

export default class Layout extends Component {
  state = {
    open: false
  }

  changeOpen=() => {
    this.setState({
      open: !this.state.open
    })
  }

  // 当组件挂载完毕
  componentDidMount() {
    const { view } = this.refs
    view.addEventListener('touchstart', e => {
      if (this.state.open) {
        console.log('e.preventDefault();')
        e.preventDefault();
      }
    })
    // 问题：Header菜单失效。
    // 原因：view包含了Header组件，在Header组件touch后，事件会冒泡了view元素这里，state的open字段相当于没变化。
    // view.addEventListener('touchend', () => {
    //   console.log('touch end on view.')
    //   if (this.state.open) {
    //     this.changeOpen()
    //   }
    // })
  }

  render() {
    const { children, className } = this.props
    const { open } = this.state

    console.log('render, open: %o:', open)
    return (
      <div ref="view" onTouchEnd={() => {
        console.log('touch end in view, state: %o', open)
        if (this.state.open) {
          this.changeOpen()
        }
      }}>
        <Header menu={true} hasSignedIn={false} onChangeOpen={this.changeOpen} />
        <Menu open={open} />
        
        <div
          className={"page " + className}
          style={{
            transition: open ? ".5s cubic-bezier(.2,.85,.23,1.27)" : ".3s",
            transform: open ? "translate3d(4.0rem,0,0)" : "translate3d(0,0,0)"
          }}
        >
          { children }  
        </div>
      </div>
    )
  }
}
/*


  1. 为什么是view先触发touchend，接着才是header模板触发？移动端的事件冒泡是怎么样的？
  2. 为什么无法在header中禁止事件冒泡？


  react事件
  react可以阻止事件冒泡吗?
*/