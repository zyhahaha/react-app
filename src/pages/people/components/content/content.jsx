import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './content.less';

import likeImg from '@/assets/imgs/like.png';

// img
import people1 from '@/assets/imgs/people/people1.png';
import people2 from '@/assets/imgs/people/people2.png';
import people3 from '@/assets/imgs/people/people3.png';
import people4 from '@/assets/imgs/people/people4.png';
import people5 from '@/assets/imgs/people/people5.png';
import people6 from '@/assets/imgs/people/people6.png';

let json = {
  list: [
    {
      title: '雨天和健身房',
      nickname: 'NAna',
      avatarImg: people1,
      likeNum: '2258'
    },
    {
      title: '雨天和健身房',
      nickname: 'NAna',
      avatarImg: people2,
      likeNum: '2258'
    },
    {
      title: '雨天和健身房',
      nickname: 'NAna',
      avatarImg: people3,
      likeNum: '2258'
    },
    {
      title: '雨天和健身房',
      nickname: 'NAna',
      avatarImg: people4,
      likeNum: '2258'
    },
    {
      title: '雨天和健身房',
      nickname: 'NAna',
      avatarImg: people5,
      likeNum: '2258'
    },
    {
      title: '雨天和健身房',
      nickname: 'NAna',
      avatarImg: people6,
      likeNum: '2258'
    }
  ]
}

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
        <ContentListFl list={json.list} />
        <ContentListFr list={json.list} />
      </div>

    );
  }
}

export default PeopleContent;