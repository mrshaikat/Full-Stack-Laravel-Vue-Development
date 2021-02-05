import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import firstPage from './components/pages/myFirstVuePage.vue'
import newRoure from './components/pages/newFirstVuePage.vue'
import hooks from './components/pages/basic/hooks.vue'
import methods from './components/pages/basic/methods.vue'


//Project Pages
import home from './components/pages/home'
import tags from './components/pages/tags'
const routes = [

    //projects route...

    {
        path: '/',
        component: home,
    },

    {
        path: '/tags',
        component: tags,
    },















    //basic tutorial ...
    {
        path: '/my-new-vue-route',
        component: firstPage,
    },
    {
        path: '/new-route',
        component: newRoure,
    },
    {
        path: '/hooks',
        component: hooks,
    },

    {
        path: '/methods',
        component: methods,
    },
]

export default new Router({
    mode: 'history',
    routes
})
