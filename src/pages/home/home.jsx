import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './home.less';
import menuImg from '@/assets/imgs/menu.png';
import shareImg from '@/assets/imgs/share.png';
import bannerImg from '@/assets/imgs/home_banner.png';

// img
import courseImg1 from '@/assets/imgs/course1.png';
import courseImg2 from '@/assets/imgs/course2.png';
import courseImg3 from '@/assets/imgs/course3.png';

function noneX() {
  alert('none')
}

class Home extends Component {
  static propTypes = {
    // formData: PropTypes.object.isRequired,
    // saveFormData: PropTypes.func.isRequired,
    // saveImg: PropTypes.func.isRequired,
    // clearData: PropTypes.func.isRequired,
    // clearSelected: PropTypes.func.isRequired,
  }

  state = {
    alertStatus: false, //弹框状态
    alertTip: '', //弹框提示文字
  }
  /**
   * 已选择的商品数据
   * @type {Array}
   */
  selectedProList = [];

  render() {
    
    return (
      <div className="main">
        {/* header */}
        <div className="header">
          <div className="head_wrap">
            <Link to="/menu">
              <p className="fl">
                <img src={menuImg} alt=""/>
              </p>
            </Link>
            {/* <p className="nav_wrap"> */}
              <span>计划</span>
              <span onClick={noneX} className="nav_center">有X</span>
              <Link to="/people"><span>圈子</span></Link>
            {/* </p> */}
            <p className="fr">
              <img className="share" src={shareImg} alt=""/>
            </p>
          </div>
        </div>
        {/* banner */}
        <div className="banner">
          <img src={bannerImg} alt=""/>
          <div className="banner_word">
            <h2>推荐您参加这个训练课程</h2>
            <p>马甲线速成班</p>
            <p>
              <span>课程教练： Sutuny</span>
              <span>时长： 330分44秒</span>
            </p>
            <div className="button banner_btn">
              已加入
            </div>
          </div>
        </div>
        {/* content */}
        <div className="content">
          {/* card */}
          <div className="card_list">
            <p className="dynamic fl">精选动态</p>
            <p className="sport_tips">运动Tips</p>
            <p className="cool fr">潮玩潮动</p>
          </div>
          {/* course list */}
          <div className="course_list">
            <div className="title_wrap">
              <h2>推荐课程</h2>
              <p></p>
            </div>
            {/* list */}
            <ul className="list_wrap">
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
              <li>
                <img src={courseImg2} alt="" className="fl" />
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
              <li>
                <img src={courseImg3} alt="" className="fl" />
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
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
