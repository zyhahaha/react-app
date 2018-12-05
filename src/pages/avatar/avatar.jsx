import React, { Component } from 'react';

import './more_course.less';
import backImg from '@/assets/imgs/back.png';
import shareImg from '@/assets/imgs/share.png';

// img
import courseImg1 from '@/assets/imgs/course1.png';
import courseImg2 from '@/assets/imgs/course2.png';
import courseImg3 from '@/assets/imgs/course3.png';

class Avatar extends Component {
  render() {
    return (
      <div className="more_course">
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
          <p>
            <img src="" alt=""/>
          </p>
          <p className="nickname">
            test
          </p>
          <p className="summary">简介</p>
          <p className="stat">
            <span>关注 11</span>
            <span>粉丝 231</span>
          </p>
        </div>
        {/* nav */}
        <div className="nav">
          <p>动态</p>
          <p>课程</p>
        </div>
        {/* content */}
        <div className="content">
          <ul>
            <li>content</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Avatar;