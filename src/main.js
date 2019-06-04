import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
//使用ElementUI组件
Vue.use(ElementUI);

//引入promise的HTTP客户端axios
import axios from 'axios';

//将axios改写为Vue的原型属性
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
