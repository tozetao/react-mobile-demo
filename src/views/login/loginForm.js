import React from 'react'

export default function LoginForm() {
  return (
    <div className="login-inner login-form">
      <div className="login-ico iconfont icon-dengluming"></div>
      <p className="login-info">如有账号，请直接登录</p>
      <div className="input-txt">
        <input type="text" placeholder="用户名"/>
        <span className="input-txt-ico icon-youxiang iconfont"></span>
      </div>
      <div className="input-txt">
        <input type="password" placeholder="密码" />
        <span className="input-txt-ico icon-mima iconfont"></span>
      </div>
      <div className="input-verify">
        <div className="input-txt">
          <input type="text" placeholder="验证码" />
          <span className="input-txt-ico icon-authcode iconfont"></span>
        </div>
        <img className="input-verify-img"  />
      </div>
      <a className="miaov-btn miaov-btn-md input-btn">登陆</a>
      <p className="login-info">没有帐号？<a className="to-register">立即注册</a></p>
  </div>
  )
}
