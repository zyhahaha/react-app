import React, { Component } from 'react';

import './avatar.less';
import backImg from '@/assets/imgs/back.png';
import shareImg from '@/assets/imgs/share.png';

// img
import cardImg from '@/assets/imgs/avatar/card.png';

class Avatar extends Component {
  render() {
    return (
      <div className="avatar-container">
        {/* header */}
        <div className="header">
          <div className="head_wrap">
            <p className="fl">
              <img src={backImg} alt=""/>
            </p>
            <p className="fr">
              <span>已关注</span>
            </p>
          </div>
        </div>
        {/* header card */}
        <div className="header_card">
          <p className="card_img_wrap">
            <img src={cardImg} alt=""/>
          </p>
          <p className="avatar_img">
            <img src="" alt=""/>
          </p>
          <p className="nickname">
            test赵
          </p>
          <p className="summary">简介</p>
          <p className="stat">
            <span className="attention">关注 11</span>
            <span>粉丝 231</span>
          </p>
        </div>
        {/* content */}
        <div className="content">
          {/* nav */}
          <div className="nav">
            <p className="grey">动态</p>
            <p>课程</p>
          </div>
          <ul className="content_wrap">
            <li>动态</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Avatar;