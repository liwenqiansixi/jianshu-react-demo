import * as type from './actionType'
console.log(type);
const defaultState = {
    fouced: false
}
export default (state = defaultState, action)=>{
    if(action.type === type.INPUT_FOUCES) {
        return {
            fouced: true
        }
    } else if(action.type === type.INPUT_BLUR) {
        return {
            fouced: false
        }
    }
    return state;
}