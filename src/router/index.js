import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

import home from "@/pages/home/home";
const people = asyncComponent(() => import("@/pages/people/people"));
const Avatar = asyncComponent(() => import("@/pages/avatar/avatar"));
// const Avatar1 = asyncComponent(() => import("@/pages/avatar.1/avatar"));
// // // const menu = asyncComponent(() => import("@/pages/menu/menu"));
// const fancy = asyncComponent(() => import("@/pages/fancy/fancy"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/people" exact component={people} />
          <Route path="/avatar" component={Avatar} />
          {/* <Route path="/avatar1" component={Avatar1} /> */}
          {/* <Route path="/menu" component={menu} /> */}
          {/* <Route path="/fancy" component={fancy} /> */}
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
