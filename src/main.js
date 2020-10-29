/*********************************************************************
***
*Original Author: Vue 3 CLI / Michelle Petit                *
*Date Created: 10/25/2020                                   *
*Version: 1                                                 *
*Date Last Modified: 10/29/2020                             *
*Modified by: Michelle Petit                                *
*Modification log: Initialized and added flowerbox          *
*                   imported router.js & changed some code  *
*                    while trying to troubleshoot routes    *
* followed the tutorial at: https://medium.com/javascript-in-plain-english/a-first-look-at-vue-router-in-vue3-253bc61b2cf5 *
* initialized new project folder/template using Vue ui      *
***
******************************************************************** */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
