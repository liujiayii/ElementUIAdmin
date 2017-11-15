import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './theme/index.css'
import './assets/css/font-awesome.min.css'

import router from './router'
import Config from './config'
import Api from './api'
import Function from './function'

import App from './App.vue'
Vue.prototype.$Api = Api
Vue.prototype.$Config = Config
Vue.prototype.$Func = Function

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title?to.meta.title+'-'+Config.siteName:Config.siteName;
    NProgress.start()
  // if (!sessionStorage.getItem(Config.tokenKey) && to.path != '/login') {
  //   next({path: '/login'});
  //   NProgress.done();
  // } else {
    next();
  //  }
});
router.afterEach(transition => {
    NProgress.done()
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
