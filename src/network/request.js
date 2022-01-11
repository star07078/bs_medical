import axios from 'axios'
import vm from '../main.js'

export default function request(config) {
  var instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      'token': localStorage.getItem('token')
    }
  });

  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    if(config.url != '/login'){
      if(!config.headers.token) {
        vm.$router.push('/login');
        return null;
      }
    }
    return config;
  });

  // 添加响应拦截器
  instance.interceptors.response.use(function (response) {
    // 后端返回checktoken这个字段，则表示token失效
    if(response.data.checktoken) {
      vm.$router.push('/signin');
      vm.$message.error(response.data.msg);
      return ;
    }
    if(response.data.token) {
      window.localStorage.setItem('token', response.data.token);
    }
    return response;
  });

  return instance(config);
}