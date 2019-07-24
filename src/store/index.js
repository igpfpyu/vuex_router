import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// - 课程栏目
import LessonStore from '@/pages/Lesson/LessonStore'
const modules={
        ...LessonStore
}
export default new Vuex.Store({
    modules:{
        modules
    }

})
