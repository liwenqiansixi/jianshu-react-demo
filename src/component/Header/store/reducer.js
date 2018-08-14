import * as type from './actionType'
import { fromJS } from 'immutable';

const defaultState = fromJS({
    fouced: false
})
export default (state = defaultState, action)=>{
    if(action.type === type.INPUT_FOUCES) {
        return  state.set('fouced', true)
    } else if(action.type === type.INPUT_BLUR) {
        return  state.set('fouced', false)
    }
    return state;
}