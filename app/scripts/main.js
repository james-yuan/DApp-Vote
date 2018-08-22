import Vue from 'vue'
import router from './router.js'
import DApp from './DApp.js'
import Vote from '../components/vote.vue'

Vue.config.debug = true

new Vue({
  router: router,
  render: h => h(Vote),
  /*methods: {
    createProvider: function() {
      if (typeof web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider)
      } else {
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://${RPC_HOST}:${RPC_PORT}'))
    }
  },*/
  mounted() {
    DApp.createProvider()
  }
}).$mount('#app')
