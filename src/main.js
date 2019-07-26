// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Network  from './platform/utils/Network/Network'
import store from './store'
import './assets/default.less'
import * as GlobalUtils from './platform/utils/GlobalUtils';
import './platform/utils/GlobalFilter';
// import 'element-ui/lib/theme-chalk/index.css'
import IEcharts from 'vue-echarts'
Vue.config.productionTip = false;
Vue.prototype.$post=Network.NetworkPost;
Vue.prototype.$fetch=Network.NetworkGet;
Vue.use(ElementUI);
Vue.prototype.Global=GlobalUtils;
Vue.component('Chart', IEcharts);
new Vue({
    el: '#app',
    store,
    router,
    render:p=>p(App)
});
