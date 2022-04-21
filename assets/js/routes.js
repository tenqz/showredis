import KeyData from "./vue/KeyData"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    { path: '/', component: KeyData },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
