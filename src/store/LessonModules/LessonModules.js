export default {
    state:{
        lesson:12
    },
    getters:{
        isLesson(state){
            if(state.lesson===112){
                return true;
            }else{
                return false;
            }
        }
    },
    mutations:{
        lesson(state){
            return 20;
        },
        itemClick(state, num){
            console.log(num)
        }
    },
    actions:{
        itemClick({commit}, num){
            commit('itemClick', num.payload)

        }
    }
}
