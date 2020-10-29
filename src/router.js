import {createWebHistory, createRouter} from 'vue-router'
/*const Home = import('./views/Home.vue')
const Books = import('./views/Books.vue')
const Journals = import('./views/Journals.vue')
const Planners = import('./views/Planners.vue')
const Recipes = import('./views/Recipes.vue')*/
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