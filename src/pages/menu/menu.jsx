import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.less';

import noticeImg from '@/assets/imgs/menu/notice.png';
import collectImg from '@/assets/imgs/menu/collect.png';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
          <div className="band_card">
            <Link to="/avatar">
              <p className="avatar_wrap">
                <img src="" alt=""/>
              </p>
            </Link>
            <p className="nickname">木棍</p>
            <p className="summary">与更好的自己相遇。</p>
          </div>
          <div className="item_wrap">
            <ul>
              <li>
                <img src={noticeImg} alt=""/>
                <span>我的消息</span>
              </li>
              <li>
                <img src={collectImg} alt=""/>
                <span>我的收藏</span>
              </li>
            </ul>
          </div>
      </div>
    )
  }
}

export default Menu;