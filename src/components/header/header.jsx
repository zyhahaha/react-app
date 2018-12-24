import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.less';

import menuImg from '@/assets/imgs/menu.png';
import shareImg from '@/assets/imgs/share.png';

function noneX() {
  alert('none')
}

class PublicHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="head_wrap">
          <Link to="/menu">
            <p className="fl">
              <img src={menuImg} alt=""/>
            </p>
          </Link>
          {/* <p className="nav_wrap"> */}
            <span>计划</span>
            <span onClick={noneX} className="nav_center">有X</span>
            <Link to="/people"><span>圈子</span></Link>
          {/* </p> */}
          <p className="fr">
            <img className="share" src={shareImg} alt=""/>
          </p>
        </div>
      </div>
    )
  }
}

export default PublicHeader;

