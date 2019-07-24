import {ITEM_CLICK} from "./mutationType";
export default {
    [ITEM_CLICK](state, num){
        console.log(state)
        state.lesson=num;
        console.log(num)
    }
}
