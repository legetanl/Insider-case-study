import Vue from 'vue'
import App from './App.vue'
import router from './router'
import createStore from './store' // Import the createStore function

Vue.config.productionTip = false

const store = createStore() // Call the function to create the store instance

new Vue({
  router,
  store, // Use the store instance
  render: h => h(App)
}).$mount('#app')
