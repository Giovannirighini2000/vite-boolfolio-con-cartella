import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import AboutUs from './pages/AboutUs.vue'

import ProjectsIndex from './pages/Projects.index.vue'


const history = createWebHistory()
console.log('history: ', history)

const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about-us',
            name: 'about',
            component: AboutUs,
        },

        {
            path: '/blog',
            name: 'projects.index',
            component: ProjectsIndex,
        },

    ],
})

export { router }