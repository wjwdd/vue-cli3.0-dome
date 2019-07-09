export default [
  {
    path: '*',
    redirect: '/index'
  },
  {
    name: 'index',
    component: () => import('@view/index'),
    meta: {
      title: '首页'
    }
  }
];
