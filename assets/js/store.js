import {createStore} from "vuex"
import axios from "axios"

const state = {}
const getters = {}
const actions = {
    dbSize() {
        return axios.get("/api/db-size", {})
            .then(response => response)
    }

}
const mutations = {}

const store = createStore({
    state,
    getters,
    actions,
    mutations
})

export default store
