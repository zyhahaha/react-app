import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './people.less';

import Menu from '@/components/menu/menu';
import PublicHeader from '@/components/header/header';
import HomeContent from './components/content/content';

class People extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isShowMenu: false
  }

  changeMenuState = isShowMenu => {
    this.setState({
      isShowMenu: true
    })
  }

  render() {
    return (
      <div className="people">
        {/* header */}
        <PublicHeader isShowMenu={this.state.isShowMenu} changeMenuState={this.changeMenuState} checkName="people" />
        {/* nav */}
        <div className="people__nav">
          <p className="fl"><span>热门</span></p>
          <p className="fr">关注</p>
        </div>
        {/* content */}
        <HomeContent />
        {/* Menu */}
        {this.state.isShowMenu && <Menu />}
      </div>
    );
  }
}

export default People;