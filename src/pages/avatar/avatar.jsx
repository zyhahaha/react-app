import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './avatar.less';
import backImg from '@/assets/imgs/back.png';

import {avatarData} from '@/assets/api/api.js';

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

function HeaderCard(props){
  let infoData = props.infoData;
  return (
    <div className="header_card">
      <p className="card_img_wrap">
        <img src={infoData.cardImg} alt=""/>
      </p>
      <p className="avatar_img">
        <img src="" alt=""/>
      </p>
      <p className="nickname">
        {infoData.nickname}
      </p>
      <p className="summary">{infoData.summary}</p>
      <p className="stat">
        <span className="attention">关注 {infoData.attentionNum}</span>
        <span>粉丝 {infoData.fansNum}</span>
      </p>
    </div>
  )
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
        <HeaderCard infoData={avatarData.info}></HeaderCard>
        {/* content */}
        <div className="content">
          {/* nav */}
          <div className="nav">
            <Link to="/avatar">
              <p className="grey">动态</p>
            </Link>
            <p>课程</p>
          </div>
          <ContentList list={avatarData.courseList} />
        </div>
      </div>
    );
  }
}

export default Avatar;