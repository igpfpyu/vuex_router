import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// - 课程列表
import LessonListStore from '@/pages/Lesson/LessonList/LessonListModules/LessonListStore'
const modules={
        ...LessonListStore
}
export default new Vuex.Store({
    modules:{
        modules
    }

})
