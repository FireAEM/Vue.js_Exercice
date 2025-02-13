import { createRouter, createWebHashHistory } from "vue-router"
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
// destructuring => { } on récupère ce dont on a besoin

const router = createRouter({
    history: createWebHashHistory(),
    routes : [
        {
            path: '',
            component: HomePage
        },
        {
            path: '/login',
            component: LoginPage
        }
    ]
})

export default router