export const pro = {
  NODE_ENV: '"production"',
  hosturl: '/api'
};

export const dev = {
  NODE_ENV: '"development"',
  hosturl: '/api'
};
const url = process.env.NODE_ENV === 'development' ? dev.hosturl : pro.hosturl;
export const baseurl = {
  Hallowmas: url
};
