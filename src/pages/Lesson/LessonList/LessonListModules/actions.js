import {ITEM_CLICK} from './mutationType';
export default {
    itemClick({commit}, num){
        commit(ITEM_CLICK, num.payload)

    }
}
