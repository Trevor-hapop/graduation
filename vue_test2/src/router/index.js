import Vue from 'vue'
import Router from 'vue-router'

/** 组件 */
import HelloWorld from '@/components/HelloWorld'
import HelloBro from '@/components/HelloBro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/HelloBro',
    	name: 'HelloBro',
    	component: HelloBro
    }
  ]
})
