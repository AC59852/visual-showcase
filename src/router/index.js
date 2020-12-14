import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project2 from '../views/ProjectEx2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/project2',
    name: 'Project Example 2',
    component: Project2
  },
  {
    path: '/project1',
    name: 'Project Example 1',
    component: () => import('../views/ProjectEx1.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
