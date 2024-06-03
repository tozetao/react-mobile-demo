import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './home';
import Course from './course';
import Lecturer from './lecturer';

import '../common/font/iconfont.css'
import '../common/css/app.css';

import Works from './works';
import Message from './message'
import Login from './login';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/message" component={Message} />
        <Route path="/works" component={Works} />
        <Route path="/course" component={Course} />
        <Route path="/lecturer" component={Lecturer} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
