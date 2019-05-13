import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import LessonModules from './LessonModules/LessonModules'
export default new Vuex.Store({
    modules:{
        LessonX : LessonModules,
    }
})
