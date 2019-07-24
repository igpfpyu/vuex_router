import {ITEM_CLICK} from "./mutationType";
export default {
    [ITEM_CLICK](state, num){
        console.log(state.les);
        if(state.les==12){
            state.les=num;
        }else{
            state.les=12;
        }
    }
}
