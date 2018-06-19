import Vue from 'vue'
import Router from 'vue-router'
import Personal from './personal'

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
          path: '/element_icon',
          name: 'element_icon',
          meta: {
              title: 'Element Icon',
              keepAlive: false
          },
          component: resolve => require(['~/views/icon/ElementIcon.vue'], resolve),
        },
        {
          path: '/post_manage',
          name: 'post_manage',
          meta: {
            title: '文章管理',
            keepAlive: false
          },
          component: resolve => require(['~/views/contentManage/Index.vue'], resolve),
        },
        {
          path: '/user_manage',
          name: 'user_manage',
          meta: {
            title: '用户列表',
            keepAlive: true
          },
          component: resolve => require(['~/views/userManage/Index.vue'], resolve),
        },
          //个人中心，可能有修改密码，头像修改等路由
        Personal.index,
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


