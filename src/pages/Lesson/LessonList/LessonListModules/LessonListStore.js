import {ITEM_CLICK} from "./mutationType";
const state={
    les:12
}
export default {
    namespaced:true,
    state,
    getters:{
        isLesson(state){
            if(state.les===12){
                return true;
            }else{
                return false;
            }
        }
    },
    actions:{
        itemClick({commit}, num){
            commit(ITEM_CLICK, num.payload)
        }
    },
    mutations:{
        [ITEM_CLICK](state, num){
            console.log(state.les);
            if(state.les==12){
                state.les=num;
            }else{
                state.les=12;
            }
        }
    },

}
