import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['~/views/layout/App.vue'], resolve),
      meta: {
        title: '首页',
        keepAlive: false,
      },
      children: [
        {
          path: '/',
          name: 'dashboard',
          meta: {
            title: '首页',
            keepAlive: false
          },
          component: resolve => require(['~/views/home/Index.vue'], resolve),
        },
        {
          path: '/font_awesome',
          name: 'font_awesome',
          meta: {
            title: 'FontAwesome 4.7',
            keepAlive: false
          },
          component: resolve => require(['~/views/icon/FontAwesome.vue'], resolve),
        },
        {
          path: '/post_manage',
          name: 'post_manage',
          meta: {
            title: '文章管理',
            keepAlive: false
          },
          component: resolve => require(['~/views/contentManage/Index.vue'], resolve),
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '后台登录',
        keepAlive: false
      },
      components: {
        blank: resolve => require(['~/views/login/Login.vue'], resolve),
      }
    },

  ]
})


