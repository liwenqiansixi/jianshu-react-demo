import * as type from './actionType'
import axios from 'axios'
import {fromJS} from 'immutable'
const changeHeaderList = (data)=> ({
    type: type.CHANGE_HEADER_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10) // 页码数
})
export const handleInputFocus = () => ({
    type: type.INPUT_FOUCES
})
export const handleInputBlur = () => ({
    type: type.INPUT_BLUR
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data
            if (data.success) {
                dispatch(changeHeaderList(data.lists))
            }
        }).catch((err) => {
            console.log(err)
        })
    }
}
export const handleMouseEnter = () => ({
    type: type.MOUSE_ENTER
})
export const handleMouseLeave = () => ({
    type: type.MOUSE_LEAVE
})
export const handleChangePage = (data) => ({
    type: type.CHANGE_PAGE,
    data
})