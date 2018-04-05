// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// require('../node_modules/semantic-ui/dist/semantic.min.js')
require('../node_modules/jquery/dist/jquery.min.js')

require('./styles/main.css')
require('../node_modules/semantic-ui/dist/semantic.min.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {message: 'Hello world'}
})
