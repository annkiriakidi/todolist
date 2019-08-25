import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './store/user'
import generalModule from './store/general'
import tasksModule from './store/tasks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    generalModule,
    userModule,
    tasksModule
  }
})
