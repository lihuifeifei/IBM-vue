import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
      path: '/',
      redirect: '/login',
      meta:{
        keepAlive:false
      }
      },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
          keepAlive:true
      }
    },
    {
        path: '/history',
        name: 'history',
        meta:{
            keepAlive:true
        },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/History.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta:{
          keepAlive:true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
          path: '/login',
          name: 'login',
          meta:{
              keepAlive:false
          },
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
      },
      {
          path: '/register',
          name: 'register',
          meta:{
              keepAlive:false
          },
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Registered.vue')
      }
    
  ]
})
