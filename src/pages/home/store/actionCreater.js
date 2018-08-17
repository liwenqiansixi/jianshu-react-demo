import * as typeName from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'
const changeData = (res)=> ({
    type: typeName.CHANGE_HOME_DATA,
    topicList: res.get('topicList'),
    articleList: res.get('articleList')
})

const handleAddMoreList = (data,nextPage) => ({
    type: typeName.ADD_MORE_LIST,
    data,
    nextPage
})
export const handleChangeData = () => {
    return (dispatch) => {
        axios.get('./api/home.json').then((res)=> {
            const data = res.data
            if (data.success) {
                const action = changeData(fromJS(data.data))
                dispatch(action)
            }
        })
    }
}
export const getMoreList = (nextPage) => {
    return (dispatch)=> {
        axios.get(`./api/homeList.json?page=${nextPage}`).then((res)=> {
            const data = res.data
            if (data.success) {
                nextPage += 1
                dispatch(handleAddMoreList(fromJS(data.data), nextPage))
            }
            // 获取到原来的list并把新增的添加到
        })
    }
}
