/*import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/!* eslint-disable no-new *!/
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})*/
import { createApp } from 'vue'
import App from './App'
import router from './router'
import bus from 'common/bus'
import Store from "./store";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.use(Store)
app.config.globalProperties.$bus = bus;
