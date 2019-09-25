import Vue from 'vue'
import Router from 'vue-router'


import PageHome from '../pages/PageHome.vue'
import PageInstansiDetail from '../pages/PageInstansiDetail.vue'
import PageLogin from '../pages/PageLogin.vue'
import PageAntrianLayanan from '../pages/PageAntrianLayanan.vue'
import PageNotFound from '../pages/PageNotFound.vue'
import PageNotAuthenticated from '../pages/PageNotAuthenticated.vue' 

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
            path:'/layanan/:id',
            name: 'PageAntrianLayanan',
            component: PageAntrianLayanan
        },
        {
            path:'/login',
            name: 'PageLogin',
            component: PageLogin
        },
        {
            path: '/401',
            name : 'PageNotAuthenticated',
            component : PageNotAuthenticated
        },
        {
            path: '*',
            name : 'PageNotFound',
            component : PageNotFound
        }
    ],
    mode:'history'
})

export default router