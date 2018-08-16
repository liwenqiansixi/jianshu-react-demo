// 使用immutable链接reducer使对象转化为immutabel格式的对象
import { combineReducers } from 'redux-immutable';
import  {reducer as headerReducer} from '../component/Header/store'
import {reducer as homeReducer} from '../pages/home/store'
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
})
export default reducer;
