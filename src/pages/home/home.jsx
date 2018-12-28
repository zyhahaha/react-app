import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './home.less';

import Menu from '@/components/menu/menu';
import PublicHeader from '@/components/header/header';
import HomeContent from './components/content/content';
import BannerEl from './components/banner/banner';

import { homeContentData } from '@/assets/api/api.js';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    // formData: PropTypes.object.isRequired
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
      <div className="main">
        {/* header */}
        <PublicHeader isShowMenu={this.state.isShowMenu} changeMenuState={this.changeMenuState} />
        {/* banner */}
        <BannerEl bannerData={homeContentData.bannerData} />
        {/* content */}
        <HomeContent homeContentList={homeContentData.list} />
        {/* menu */}
        {this.state.isShowMenu && <Menu />}
      </div>
    );
  }
}

export default Home;
