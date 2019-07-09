import request from '@util/request.js';

import store from '@/store';

export function cs() {
  return request({
    url: '/journalismApi',
    method: 'POST', //请求方法
    data: {
      ymd: '2018-07-17'
    }
  });
}
