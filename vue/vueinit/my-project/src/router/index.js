import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestKeep from '@/components/TestKeep'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/testkeep',
      name: 'TestKeep',
      component: TestKeep,
      meta: {
        keepAlive: true
      }
    }
  ]
})
