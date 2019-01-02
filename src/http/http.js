/**
 * 此文件为axios ajax的统一设置,包括请求拦截，post处理等
 */
import axios from 'axios';
import qs from 'qs';
// import router from '../router/index.js';
import { Indicator,Toast} from 'mint-ui';
import api from '@/assets/js/api.js';

const http = axios.create({
  baseURL: 'http://test1.doooly.com',
  timeout: 10000,
});
if(!sessionStorage.httpTimestamp){
  sessionStorage.httpTimestamp = new Date().getTime();
}else if(new Date().getTime() - sessionStorage.httpTimestamp > 86400000){
  sessionStorage.httpTimestamp = new Date().getTime();
}
 
http.interceptors.request.use((config) => {
  // Indicator.open({
  //   text: '加载中...',
  //   spinnerType: 'snake'
  // });
  return config;
}, err =>{
  // Indicator.close();
  return Promise.reject(err)
} );


// 对数据返回进行拦截
http.interceptors.response.use((res) => {
  Indicator.close();
  return res
}, error => {
  // 返回错误统一处理, vuex内无需另行处理，比如自身网络错误等
  Indicator.close();
  // if(navigator.onLine){
  //   Toast("小兜兜正忙,请稍候重试!");
  //   if(errorLog != 0){
  //     return;
  //   }else{
  //     errorLog = 1;
  //     APP.errorLog(error);
  //   }
  // }else{
  //   Toast("网络已断开，请检查网络并刷新!");
  // }
  return Promise.reject(error)
})
var errorLog = 0;
APP.errorLog = function(error){
  http({
    method: 'post',
    url: api.errorLog,
    data: {
      "timestamp":sessionStorage.httpTimestamp, //当前时间戳
    },
  }).then((res) => {
  });
}

export default http
