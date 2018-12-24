import React, { Component } from 'react';
import './content.less';

// img
import courseImg1 from '@/assets/imgs/course1.png';
import courseImg2 from '@/assets/imgs/course2.png';
import courseImg3 from '@/assets/imgs/course3.png';

class HomeContent extends Component {

  render() {

    return (
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
    );
  }
}

export default HomeContent;
