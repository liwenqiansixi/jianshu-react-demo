import * as type from './actionType'
import {
    fromJS
} from 'immutable';

const defaultState = fromJS({
    fouced: false,
    mouseIn: false,
    lists: [],
    page: 1, // 当前的页数
    totalPage: 1 // 一共有多少页
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case type.INPUT_FOUCES:
            return state.set('fouced', true)
        case type.INPUT_BLUR:
            return state.set('fouced', false)
        case type.CHANGE_HEADER_LIST:
            // action.data是一个普通的数组，list会由一个immutabel对象转换为普通数组
            // 所以要去修改action.data为immutabel对象
            // return state.set('lists', action.data).set('totalPage', action.totalPage)
            return state.merge({
                'lists': action.data,
                'totalPage': action.totalPage
            })
        case type.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case type.MOUSE_LEAVE: 
            return state.set('mouseIn', false)
        case type.CHANGE_PAGE:
            return state.set('page', action.data)
        default:
            return state;
    }
}