import axios from 'axios'; //引入axios
import Qs from 'qs';
import { baseurl } from '@/config/';
const instance = axios.create({
  //instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
  //所有的请求都会带上这些配置，比如全局都要用的身份信息等。
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  baseURL: baseurl.Hallowmas, //接口公共
  timeout: 10 * 1000, // 30秒超时,
  responseType: 'json', // default
  transformRequest: [
    function(data) {
      console.log(data);
      // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs
      return Qs.stringify(data);
    }
  ]
});

export default function request(options) {
  console.log(options);
  return new Promise((resolve, reject) => {
    instance(options)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
