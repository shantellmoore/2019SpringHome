import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import MyFriends from './views/MyFriends'
import Workouts from './views/Workouts'
import Goals from './views/Goals'
import Sleep from './views/Sleep'


import Trackedmeals from './views/Trackedmeals'

import { Globals } from "@/models/api.js";


Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/trackedmeals',
      name: 'trackedmeals',
      component: Trackedmeals
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: Workouts

    },
    {
      path: '/goals',
      name: 'goals',
      component: Goals
    },
    {
      path: '/sleep',
      name: 'sleep',
      component: Sleep
    },
    {
      path: '/MyFriends',
      name: 'myfriends',
      component: MyFriends
    },
    {
      path: '/aboutyou',
      name: 'aboutyou',
    

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
const publicRoutes = ['home', 'login', 'register', 'aboutyou','trackedmeals','workouts','goals', 'sleep'];
if(!publicRoutes.includes(to.name) && !Globals.user){
Globals.redirectRoute ={ name: to.name, path: to.path, params: to.params, query: to.query, hash: to.hash }
return next('login');
}
next();
}) 

export default router;

