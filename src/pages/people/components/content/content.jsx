import React, { Component } from 'react';
import http from '@/http/http.js';
// import { Link } from 'react-router-dom';
import './content.less';

import likeImg from '@/assets/imgs/like.png';

// import axios from 'axios';
// import { peopleData } from '@/assets/api/api.js';

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
  constructor(props) {
    super(props);
    this.getPeopleData();
  }

  state = {
    peopleData: {}
  }

  getPeopleData() {
    http.get('/peopleData').then(res => {
        let peopleData = res.data.data;
        this.setState({
          peopleData
        })
      });
  }
  // return axios.get('http://localhost:8088/peopleData').then(res => {
  //   let peopleData = res.data.data;
  // });
  render() {
    return (
      <div className="people-content">
        {this.state.peopleData.list && <ContentListFl list={this.state.peopleData.list} />}
        {this.state.peopleData.list && <ContentListFr list={this.state.peopleData.list} />}
      </div>

    );
  }
}

export default PeopleContent;