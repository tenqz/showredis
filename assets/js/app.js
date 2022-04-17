import {createApp} from "vue"
import {createRouter, createWebHistory} from "vue-router"
import routes from "./routes"
import RedisClient from "./vue/RedisClient"

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(RedisClient)
app.use(router)
app.mount("#show-redis")