import Vue from 'vue'
import Router from 'vue-router'


import PageHome from '../pages/PageHome.vue'
import PageInstansiDetail from '../pages/PageInstansiDetail.vue'
import PageLogin from '../pages/PageLogin.vue'

Vue.use(Router)

const router = new Router({
    routes:[
        {
            path:'/',
            name: 'PageHome',
            component:PageHome
        },
        {
            path:'/instansi/:id',
            name: 'PageDetailInstansi',
            component: PageInstansiDetail
        },
        {
            path:'/login',
            name: 'PageLogin',
            component: PageLogin
        }
    ],
    mode:'history'
})

export default router