export default {
  index:{
    path: '/personal',
    name: 'personal',
    meta: {
      title: '个人中心',
      keepAlive: true
    },
    component: resolve => require(['~/views/personal/Index.vue'], resolve),
  }
}