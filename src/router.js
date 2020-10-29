/*********************************************************************
***
*Original Author: Vue 3 CLI / Michelle Petit                *
*Date Created: 10/27/2020                                   *
*Version: 1                                                 *
*Date Last Modified: 10/27/2020                             *
*Modified by: Michelle Petit                                *
*Modification log: added flowerbox and routing JS           *
*(I really liked the youtube tutorial by The Earth is Square)*
***
******************************************************************** */

import {createWebHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Books from './views/Books.vue'
import Journals from './views/Journals.vue'
import Planners from './views/Planners.vue'
import Recipes from './views/Recipes.vue'

const routerHistory = createWebHistory()

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/planners",
        name: "Planners",
        component: Planners,
    },
    {
        path: "/journals",
        name: "Journals",
        component: Journals,
    },
    {
        path: "/books",
        name: "Books",
        component: Books,
    },
    {
        path: "/recipes",
        name: "Recipes",
        component: Recipes,
    }
]

const router = createRouter({
    history: routerHistory,
    routes 
})

export default router