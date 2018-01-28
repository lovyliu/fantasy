import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FantasyMovie from '@/components/FantasyMovie'
import FantasyBook from '@/components/FantasyBook'
import FantasyMusic from '@/components/FantasyMusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/movie',
      name: 'FantasyMovie',
      component: FantasyMovie
    },
    {
      path: '/book',
      name: 'FantasyBook',
      component: FantasyBook
    },
    {
      path: '/music',
      name: 'FantasyMusic',
      component: FantasyMusic
    }
  ]
})
