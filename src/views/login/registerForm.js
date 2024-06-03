import React,{ Component } from "react";

export default class RegisterForm extends Component {
    render(){
      return (
        <div className="login-inner register-form">
          <p className="login-info register-title">注册账号</p>
          <div className="input-txt">
            <input type="text" placeholder="用户名" />
            <span className="input-txt-ico icon-youxiang iconfont"></span>
          </div>
          <div className="input-txt">
            <input type="password" placeholder="设置密码" />
            <span className="input-txt-ico icon-mima iconfont"></span>
          </div>
          <div className="input-txt">
            <input type="password" placeholder="确认密码" />
            <span className="input-txt-ico icon-mima iconfont"></span>
          </div>
          <div className="input-verify">
            <div className="input-txt">
              <input type="text" placeholder="验证码" />
              <span className="input-txt-ico icon-authcode iconfont"></span>
            </div>
            <img className="input-verify-img" />
          </div>
          <a className="input-btn miaov-btn miaov-btn-md">
            马上注册
          </a>
          <p className="login-info">已有帐号？<a className="to-login" >立即登陆</a></p>
        </div>
      );
    }
}