import {createApp} from "vue"
import router from "./routes"
import RedisClient from "./vue/RedisClient"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import store from "./store"

const app = createApp(RedisClient)

app
    .use(router)
    .use(store)
    .use(Antd)
    .mount("#show-redis")
