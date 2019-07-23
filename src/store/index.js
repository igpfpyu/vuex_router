import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// - 课程列表
import Lesson from './LessonModules/lesson'
const modules={
    Lesson
}
export default new Vuex.Store(...modules)
