import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import LessonX from '../pages/Lesson/Lesson/Lesson_x'
export default new Vuex.Store({
    modules:{
        LessonX,
    }
})
