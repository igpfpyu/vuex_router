import Vue from 'vue'
import Router from 'vue-router'
import Error from '@/pages/Error/Error'
import Login from '@/pages/Login/Login'
import Index from '@/pages/index'

//首页
import Home from '../pages/Home/Home'
import IndexItem from '@/pages/IndexItem/IndexItem'

//在线课程
import Lesson from '../pages/Lesson/Lesson/Lesson'
import LessonList from '../pages/Lesson/LessonList/LessonList'
Vue.use(Router)
const routes=[
    {path: '/',  component: Index, children:[
            {
                path:'/', component:Home, children:[
                    {
                        path:"/", name:"homeitem", component:IndexItem
                    },
                ]
            },{
                path: "/lesson", name: 'lesson', component: Lesson, children: [
                    {path: "/lesson", name: "lessonItem", component: LessonList},
                ]
            }
        ]
    },
    {path:"/login", name:'login', component:Login},
    {path:'*', redirect:"/"}
]
let router=new Router({
    routes,
    mode:"history"
})
// const isLogin=false;
// router.beforeEach((to, from, next) => {
//     console.log(to);
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//         if (!isLogin) {
//             alert('登录已超时,请重新登录');
//             next({
//                 path: '/login',
//                 query: { redirect: to.fullPath }
//             })
//         } else {
//             next()
//         }
//     } else {
//         next() // 确保一定要调用 next()
//     }
// });
export default router;
