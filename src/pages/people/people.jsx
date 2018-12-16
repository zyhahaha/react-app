import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './people.less';

import menuImg from '@/assets/imgs/menu.png';
import shareImg from '@/assets/imgs/share.png';
import likeImg from '@/assets/imgs/like.png';
import course1 from '@/assets/imgs/course1.png';
// img
import people1 from '@/assets/imgs/people/people1.png';
import people2 from '@/assets/imgs/people/people2.png';
import people3 from '@/assets/imgs/people/people3.png';
import people4 from '@/assets/imgs/people/people4.png';
import people5 from '@/assets/imgs/people/people5.png';
import people6 from '@/assets/imgs/people/people6.png';

class People extends Component {
  render() {
    return (
      <div className="people">
        {/* header */}
        <div className="header">
          <div className="head_wrap">
            <p className="fl">
              <img src={menuImg} alt=""/>
            </p>
            {/* <p className="nav_wrap"> */}
              <Link to="/"><span>计划</span></Link>
              <Link to="/people"><span className="nav_center">有X</span></Link>
              <Link to="/people"><span>圈子</span></Link>
            {/* </p> */}
            <p className="fr">
              <img className="share" src={shareImg} alt=""/>
            </p>
          </div>
        </div>
        {/* nav */}
        <div className="nav">
          <p className="fl">热门</p>
          <p className="fr">关注</p>
        </div>
        {/* content */}
        <div className="content">
          {/* fl */}
          <ul className="fl">
            <li className="fl">
              <img src={course1} alt=""/>
              <div className="item_wrap">
                <p className="title">雨天和健身房</p>
                <p className="portrait fl">
                  <span></span>
                  NAna
                </p>
                <p className="portrait fr">
                  <span className="like">
                    <img src={likeImg} alt=""/>
                  </span>
                  2258
                </p>
              </div>
            </li>
            {/* 2 */}
            <li className="fr">
              <img src={people1} alt=""/>
              <div className="item_wrap">
                <p className="title">雨天和健身房</p>
                <p className="portrait fl">
                  <span></span>
                  NAna
                </p>
                <p className="portrait fr">
                  <span className="like">
                    <img src={likeImg} alt=""/>
                  </span>
                  78
                </p>
              </div>
            </li>
            {/* 3 */}
            <li className="fl">
              <img src={people2} alt=""/>
              <div className="item_wrap">
                <p className="title">雨天和健身房</p>
                <p className="portrait fl">
                  <span></span>
                  NAna
                </p>
                <p className="portrait fr">
                  <span className="like">
                    <img src={likeImg} alt=""/>
                  </span>
                  12
                </p>
              </div>
            </li>
          </ul>
          {/* fr */}
          <ul className="fr">
            {/* 4 */}
            <li className="fr">
              <img src={people3} alt=""/>
              <div className="item_wrap">
                <p className="title">雨天和健身房</p>
                <p className="portrait fl">
                  <span></span>
                  NAna
                </p>
                <p className="portrait fr">
                  <span className="like">
                    <img src={likeImg} alt=""/>
                  </span>
                  2144
                </p>
              </div>
            </li>
            {/* 5 */}
            <li className="fl">
              <img src={people4} alt=""/>
              <div className="item_wrap">
                <p className="title">雨天和健身房</p>
                <p className="portrait fl">
                  <span></span>
                  NAna
                </p>
                <p className="portrait fr">
                  <span className="like">
                    <img src={likeImg} alt=""/>
                  </span>
                  1234
                </p>
              </div>
            </li>
            {/* 6 */}
            <li className="fr">
              <img src={people5} alt=""/>
              <div className="item_wrap">
                <p className="title">雨天和健身房</p>
                <p className="portrait fl">
                  <span></span>
                  NAna
                </p>
                <p className="portrait fr">
                  <span className="like">
                    <img src={likeImg} alt=""/>
                  </span>
                  1234
                </p>
              </div>
            </li>
            {/* 7 */}
            <li className="fl">
              <img src={people6} alt=""/>
              <div className="item_wrap">
                <p className="title">雨天和健身房</p>
                <p className="portrait fl">
                  <span></span>
                  NAna
                </p>
                <p className="portrait fr">
                  <span className="like">
                    <img src={likeImg} alt=""/>
                  </span>
                  1234
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default People;