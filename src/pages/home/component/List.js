import React, {Component} from 'react'
import {
    ListWrapper,
    ListItem,
    ListItemContent,
    ListImg,
    ListMeta,
    ListReadMore
} from '../style'
import {connect} from 'react-redux'
import {actionCreater} from '../store'
class List extends Component{
    render(){
        const {articleList, readMore, listPage} = this.props
        const haveImg = (img, title) => {
            if (img.length > 0) {
                return (
                    <ListImg>
                        <img className="img-blur-done" src={img} alt={title}/>
                    </ListImg>
                )
            } else {
                return null
            }
        }
        return(
            <ListWrapper>
                {articleList.map((item, index)=>{
                    return (
                        <ListItem key={index} className={item.get('imgUrl').length > 0 ? 'have-img': ''} id={item.get('id')}>
                            {haveImg(item.get('imgUrl'), item.get('title'))}
                            <ListItemContent>
                                <a className="title" target="_blank" href={item.get('link')}>{item.get('title')}</a>
                                <p className="abstract">{item.get('desc')}</p>
                                <ListMeta>
                                    <a className="nickname" target="_blank" href={item.get('link')}>
                                        {item.get('authorName')}
                                    </a>
                                    <a target="_blank" href={item.get('link')}>
                                        <i className="iconfont">&#xe763;</i> {item.get('commentNum')}
                                    </a>
                                    <span><i className="iconfont">&#xe635;</i> {item.get('zanNum')}</span>
                                </ListMeta>
                            </ListItemContent>
                        </ListItem>
                    )
                })}
                <ListReadMore onClick={()=> {readMore(listPage)}}>阅读更多</ListReadMore>
            </ListWrapper>
        )
    }
}
const mapState = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList']),
        listPages: state.getIn(['home', 'listPages']),
        listPage: state.getIn(['home', 'listPage'])
    }
}
const mapDispatch = (dispatch) => {
    return {
        readMore: (nextPage) => {
            // 触发加载更多
            dispatch(actionCreater.getMoreList(nextPage))
        }
    }
}
export default connect(mapState, mapDispatch)(List)