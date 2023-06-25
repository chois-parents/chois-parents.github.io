// @ts-nocheck
import Vue from 'vue';
import App from './App.vue';
import VCalendar from 'v-calendar';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.config.productionTip = false;
Vue.use(VCalendar, {
  componentPrefix: 'v',
});
Vue.use(BootstrapVue);
new Vue({
  render: h => h(App),
}).$mount('#app');
