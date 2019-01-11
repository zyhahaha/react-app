import React, { Component } from 'react';
import './content.less';

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
    <ul className="home__content__list_wrap">
      {listItems}
    </ul>
  );
}

class HomeContent extends Component {

  render() {

    return (
      <div className="home__content">
        {/* card */}
        <div className="home__content__card_list">
          <p className="home__content--dynamic fl">精选动态</p>
          <p className="home__content--sport_tips">运动Tips</p>
          <p className="home__content--cool fr">潮玩潮动</p>
        </div>
        {/* course list */}
        <div className="home__content__course_list">
          <div className="home__content__title_wrap">
            <h2>推荐课程</h2>
            <p></p>
          </div>
          {/* list */}
          <ContentList list={this.props.homeContentList} />
        </div>
      </div>
    );
  }
}

export default HomeContent;
