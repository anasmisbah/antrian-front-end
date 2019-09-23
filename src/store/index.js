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
        
    }
})