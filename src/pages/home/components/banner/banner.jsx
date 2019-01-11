import React, { Component } from 'react';
import './banner.less';

class BannerEl extends Component {

  render() {

    return (
      <div className="home__banner">
        <img src={this.props.bannerData.img} alt="" />
        <div className="home__banner__banner_word">
          <h2>推荐您参加这个训练课程</h2>
          <p>{this.props.bannerData.title}</p>
          <p>
            <span>课程教练： {this.props.bannerData.coach}</span>
            <span>时长： {this.props.bannerData.durationTim}</span>
          </p>
          <div className="button home__banner__banner_btn">
            已加入
            </div>
        </div>
      </div>
    );
  }
}

export default BannerEl;
