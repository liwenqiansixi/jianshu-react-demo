import * as typeName from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'
const changeData = (res)=> ({
    type: typeName.CHANGE_HOME_DATA,
    topicList: res.get('topicList'),
    articleList: res.get('articleList')
})
const handleChangeData = () => {
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
export {
    handleChangeData
}