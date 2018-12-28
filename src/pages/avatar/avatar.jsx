import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './avatar.less';
import backImg from '@/assets/imgs/back.png';
import courseImg1 from '@/assets/imgs/course1.png';

// img
import cardImg from '@/assets/imgs/avatar/card.png';

let json = {
  info: {

  },
  courseList: [
    {
      title: '“巧克力” 肌肉训练',
      content: '想拥有好看的腹肌很重要的一点是皮脂要低，所以想要马甲线或者...',
      coach: 'Sutuny',
      durationTim: '330分44秒',
      img: courseImg1,
      joinNum: 42514,
      joinState: 0
    }
  ]
}

function ListItem(props) {
  let item = props.item || {};
  return (
    <li>
      <img src={item.img} alt="" className="fl" />
      <div className="course_word_wrap fr">
        <p className="course_title">
          {item.title}
        </p>
        <p className="course_content">
          {item.content}
        </p>
        <p className="course_coach">
          主教练：{item.coach}
          </p>
        <p className="course_join">{item.joinNum}人已加入</p>
        <div className="button course_join_btn">
          加入课程
          </div>
      </div>
    </li>
  )
}

function ContentList(props) {
  const list = props.list;
  const listItems = list.map((item, index) =>
    <ListItem key={index.toString()} item={item} />
  );
  return (
    <ul className="content_wrap">
      {listItems}
    </ul>
  );
}

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
            <Link to="/avatar">
              <p className="grey">动态</p>
            </Link>
            <p>课程</p>
          </div>
          <ContentList list={json.courseList} />
          {/* <ul className="content_wrap">
          <li>
              <img src={courseImg1} alt="" className="fl" />
              <div className="course_word_wrap fr">
                <p className="course_title">
                  “巧克力” 肌肉训练
                </p>
                <p className="course_content">
                  想拥有好看的腹肌很重要的一点是皮脂要低，所以想要马甲线或者...
                </p>
                <p className="course_coach">
                  主教练：赵子兴
                </p>
                <p className="course_join">42514人已加入</p>
                <div className="button course_join_btn">
                  加入课程
                </div>
              </div>
            </li>
          </ul> */}
        </div>
      </div>
    );
  }
}

export default Avatar;