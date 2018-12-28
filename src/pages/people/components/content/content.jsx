import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './content.less';

import likeImg from '@/assets/imgs/like.png';

import { peopleData } from '@/assets/api/api.js';

function ListItem(props) {
  let item = props.item || {};
  return (
    <li className="fl">
      <img src={item.avatarImg} alt="" />
      <div className="item_wrap">
        <p className="title">{item.title}</p>
        <p className="portrait fl">
          <span></span>
          {item.nickname}
          </p>
        <p className="portrait fr">
          <span className="like">
            <img src={likeImg} alt="" />
          </span>
          {item.likeNum}
          </p>
      </div>
    </li>
  )
}

function ContentListFl(props) {
  const list = props.list;
  const listItems = list.map((item, index) =>
    <ListItem key={index.toString()} item={item} />
  );
  return (
    <ul className="fl">
      {listItems}
    </ul>
  );
}

function ContentListFr(props) {
  const list = props.list;
  const listItems = list.map((item, index) =>
    <ListItem key={index.toString()} item={item} />
  );
  return (
    <ul className="fr">
      {listItems}
    </ul>
  );
}

class PeopleContent extends Component {

  render() {
    return (
      <div className="content">
        <ContentListFl list={peopleData.list} />
        <ContentListFr list={peopleData.list} />
      </div>

    );
  }
}

export default PeopleContent;