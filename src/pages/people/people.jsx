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

  render() {
    return (
      <div className="people">
        {/* header */}
        <PublicHeader isShowMenu={this.state.isShowMenu} />
        {/* nav */}
        <div className="nav">
          <p className="fl">热门</p>
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