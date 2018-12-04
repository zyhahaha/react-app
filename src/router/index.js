import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

import home from "@/pages/home/home";
const people = asyncComponent(() => import("@/pages/people/people"));
const MoreCourse = asyncComponent(() => import("@/pages/more_course/more_course"));
// const production = asyncComponent(() => import("@/pages/production/production"));
// const balance = asyncComponent(() => import("@/pages/balance/balance"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/people" exact component={people} />
          <Route path="/more_course" component={MoreCourse} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
