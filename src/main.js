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

const app = createApp(App);
app.use(router);
app.mount("#app");
