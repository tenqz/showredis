import {createApp} from "vue"
import {createRouter, createWebHistory} from "vue-router"
import routes from "./routes"
import RedisClient from "./vue/RedisClient"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"


const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(RedisClient)
app.use(router)
app.use(Antd)
app.mount("#show-redis")