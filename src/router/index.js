import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'

Vue.use(Router)
const routes=[
    {path: '/:user', name: 'index', component: Index}
]
export default new Router({
    routes,
    mode:"history"
})
