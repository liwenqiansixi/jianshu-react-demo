// 使用immutable链接reducer使对象转化为immutabel格式的对象
import { combineReducers } from 'redux-immutable';
import  {reducer as headerReducer} from '../component/Header/store'
const reducer = combineReducers({
    header: headerReducer
})
export default reducer;
