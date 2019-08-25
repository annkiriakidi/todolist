import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Tasks from './views/Tasks.vue'


import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'

import Store from './store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks,
      beforeEnter: AuthGuard

    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
  ],
  mode: 'history'
})

function AuthGuard(from, to, next) {
  if(Store.getters.isUserAuthenticated)
    next()
  else
    next('/signin')
}