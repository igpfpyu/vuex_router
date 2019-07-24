import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// - 首页
import HomeStore from '../pages/Home/HomeStore';
// - 课程栏目
import LessonStore from '@/pages/Lesson/LessonStore';
console.log(HomeStore)
const modules= {
    home:HomeStore,
   lesson:LessonStore
}
export default new Vuex.Store({
    modules:{
        ...modules
    }

})
