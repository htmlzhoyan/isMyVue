import Vue from 'vue'
import Router from 'vue-router'
import {publishVue} from './publish.js'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    publishVue
  ]
})
