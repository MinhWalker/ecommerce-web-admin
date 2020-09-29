import {
    createWebHistory,
    createRouter
} from "vue-router"

import Main from "../components/Main.vue";

const history = createWebHistory();

const ifNotAuthenticated = (to, from, next) => {
    const token = localStorage.getItem("token");
    if (!token) {
        next()
        return
    }
    next('/')
}

const ifAuthenticated = (to, from, next) => {
    const token = localStorage.getItem("token");
    if (token) {
        next()
        return
    }
    next('/sign-in')
}

const routes = createRouter({
    history,
    routes: [
        {
            name: 'Main',
            path: '/',
            component: Main,
            beforeEnter: ifAuthenticated,
        },
    ]
})

export default routes;
