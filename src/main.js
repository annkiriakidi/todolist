import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import VuetifyConfirm from 'vuetify-confirm'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.use(VuetifyConfirm, {
  vuetify,
  buttonTrueText: 'OK',
  buttonFalseText: 'Oh, no',
  color: 'warning',
  icon: 'warning',
  title: 'Warning',
  width: 350,
  property: '$confirm'
})

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
  	let vm = this
  	firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch('STATE_CHANGED', user)
   });
  }
  
}).$mount('#app')
