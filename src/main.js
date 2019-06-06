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

//引入vue-loading-overlay模块，加载过渡动画
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.use(Loading);

// 设置全局的 axios 默认值
axios.defaults.baseURL = 'http://129.211.64.25:8090';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
