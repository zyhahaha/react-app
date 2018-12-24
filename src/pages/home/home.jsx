import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './home.less';

import Menu from '@/pages/menu/menu';
import PublicHeader from '@/components/header/header';
import HomeContent from './components/content/content';

import bannerImg from '@/assets/imgs/home_banner.png';

class Home extends Component {
  static propTypes = {
    // formData: PropTypes.object.isRequired,
    // saveFormData: PropTypes.func.isRequired,
    // saveImg: PropTypes.func.isRequired,
    // clearData: PropTypes.func.isRequired,
    // clearSelected: PropTypes.func.isRequired,
  }

  state = {
    alertStatus: false, //弹框状态
    alertTip: '', //弹框提示文字
  }
  /**
   * 已选择的商品数据
   * @type {Array}
   */
  selectedProList = [];

  render() {
    
    return (
      <div className="main">
        {/* header */}
        <PublicHeader />
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
        {/* <Menu /> */}
      </div>
    );
  }
}

export default Home;
