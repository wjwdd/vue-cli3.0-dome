import Vue from 'vue'
import Router from 'vue-router'
import mainRoutes from './mainRoutes'

Vue.use(Router)

const routes = [
  ...mainRoutes
]

routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})


router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router
