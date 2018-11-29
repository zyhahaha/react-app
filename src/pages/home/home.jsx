import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './home.less';

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
        <h3>home</h3>
        <Link to="/about">
          <h3 to="/about">about</h3>
        </Link>        
      </div>
    );
  }
}

export default Home;
