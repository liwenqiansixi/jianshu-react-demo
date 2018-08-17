import {
    fromJS
} from 'immutable'
import * as typeName from './actionTypes'

const defaultState = fromJS({
    listPages: 1,
    topicList: [],
    articleList: []
})
const changeHomeData = (state, action)=> {
    return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        listPage: 1
    })
}
const addMoreList = (state, action)=> {
    return state.merge({
        'listPage': fromJS(action.nextPage),
        'articleList': state.get('articleList').concat(action.data)
    })
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case typeName.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case typeName.ADD_MORE_LIST:
            return addMoreList(state, action)
        default: 
            return state;
    }
}
export default reducer