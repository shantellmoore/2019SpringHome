import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import MyFriends from './views/MyFriends'
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
const publicRoutes = ['home', 'login', 'register', 'aboutyou'];
if(!publicRoutes.includes(to.name) && !Globals.user){
Globals.redirectRoute ={ name: to.name, path: to.path, params: to.params, query: to.query, hash: to.hash }
return next('login');
}
next();
}) 

export default router;

