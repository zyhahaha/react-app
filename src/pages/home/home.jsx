import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './home.less';

import Menu from '@/components/menu/menu';
import PublicHeader from '@/components/header/header';
import HomeContent from './components/content/content';

import bannerImg from '@/assets/imgs/home_banner.png';

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
        <div className="banner">
          <img src={bannerImg} alt=""/>
          <div className="banner_word">
            <h2>推荐您参加这个训练课程</h2>
            <p>马甲线速成班</p>
            <p>
              <span>课程教练： Sutuny</span>
              <span>时长： 330分44秒</span>
            </p>
            <div className="button banner_btn">
              已加入
            </div>
          </div>
        </div>
        {/* content */}
        <HomeContent />
        {/* menu */}
        {this.state.isShowMenu && <Menu />}
      </div>
    );
  }
}

export default Home;
