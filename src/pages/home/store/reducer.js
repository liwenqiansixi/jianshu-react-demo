import {
    fromJS
} from 'immutable'
import * as typeName from './actionTypes'

const defaultState = fromJS({
    topicList: [],
    articleList: []
})
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case typeName.CHANGE_HOME_DATA:
        return state.merge({
            topicList: action.topicList,
            articleList: action.articleList
        })
        default: return state;
    }
}
export default reducer