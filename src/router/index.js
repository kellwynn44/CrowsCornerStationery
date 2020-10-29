/*********************************************************************
***
*Original Author: Vue 3 CLI / Michelle Petit                *
*Date Created: 10/27/2020                                   *
*Version: 1                                                 *
*Date Last Modified: 10/29/2020                             *
*Modified by: Michelle Petit                                *
*Modification log: added flowerbox and routing JS           *
*(I really liked the youtube tutorial by The Earth is Square)*
* initialized new product in node.js using 'vue ui' and added*
*the router as one of the presets                            *
***
******************************************************************** */

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/planners',
    name: 'Planners',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "planners" */ '../views/Planners.vue')
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('../views/Books.vue')
  },
  {
    path: '/journals',
    name: 'Journals',
    component: () => import('../views/Journals.vue')
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: () => import('../views/Recipes.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
