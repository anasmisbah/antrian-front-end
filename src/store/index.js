import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import instansi from './modules/instansi'
import layanan from './modules/layanan'

Vue.use(Vuex)

export default new Vuex.Store({

    modules:{
        auth,
        instansi,
        layanan
    },

    mutations:{
        setItems (state,{resource,items}){
            state[resource].items = items
        },
        setItem(state,{resource,item}){
            state[resource].item = item
        },
    }
})