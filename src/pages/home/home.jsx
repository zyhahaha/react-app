import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './home.less';
import menuImg from '@/assets/imgs/menu.png';
import shareImg from '@/assets/imgs/share.png';

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
        <div className="header">
          <div className="head_wrap">
            <p className="fl">
              <img src={menuImg} alt=""/>
            </p>
            {/* <p className="nav_wrap"> */}
              <span>计划</span>
              <span className="nav_center">有X</span>
              <span>圈子</span>
            {/* </p> */}
            <p className="fr">
              <img src={shareImg} alt=""/>
            </p>
          </div>
        </div>
        {/* banner */}
        <div className="banner">
          <img src="" alt=""/>
        </div>
        {/* content */}
        <div className="content"></div>
      </div>
    );
  }
}

export default Home;
