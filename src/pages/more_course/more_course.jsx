import React, { Component } from 'react';

import './more_course.less';
import backImg from '@/assets/imgs/back.png';
import shareImg from '@/assets/imgs/share.png';

// img
import courseImg1 from '@/assets/imgs/course1.png';
import courseImg2 from '@/assets/imgs/course2.png';
import courseImg3 from '@/assets/imgs/course3.png';

class MoreCourse extends Component {
  render() {
    return (
      <div className="more_course">
        {/* header */}
        <div className="header">
          <div className="head_wrap">
            <p className="fl">
              <img src={backImg} alt=""/>
            </p>
            <p className="title">全部课程</p>
            <p className="fr">
              <img className="share" src={shareImg} alt=""/>
            </p>
          </div>
        </div>
        {/* content */}
        <div className="content">
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
            {/* 2 */}
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
            {/* 3 */}
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

export default MoreCourse;