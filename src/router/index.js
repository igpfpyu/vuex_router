import Vue from 'vue'
import Router from 'vue-router'
import Error from '@/pages/Error/Error'
import Login from '@/pages/Login/Login'
import Index from '@/pages/index'

Vue.use(Router)
const routes=[
    {path:"/login", name:'login', component:Login},
    {path: '/', name: 'index', component: Index},
    {path:'*', redirect:"/"}
]
let router=new Router({
    routes,
    mode:"history"
})
// router.beforeEach((to, from, next)=>{
//     //alert('还没有登录')
//     next();
// });
export default router;
