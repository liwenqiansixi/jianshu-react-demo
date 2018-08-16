import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store/index';
// import {toJS} from 'immutable'
import {
    HeaderWrapper,
    JianshuLogo,
    Container,
    Nav,
    Button,
    NavSearch,
    SearchContent,
    SearchIcon,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';
class Header extends Component{
    getListArea() {
        const {fouced, lists, page, totalPage, mouseIn, mouseEnter, mouseLeave, changePage} = this.props
        const pageList = [];
        // immutabel转化成为js对象
        const newlist = lists.toJS();
        // 当前页面
        if (newlist.length) {
            for (let i = ((page-1) * 10); i < page * 10; i++) {
                // 刚进入页面的时候getListArea就会被执行，newlist是个空数组，newlist[i]所以是个undefinde,只有获取数据之后才能扎实
                pageList.push(
                    // list是immutabel的数据类型不能直接用【index】的形式
                    <li key={newlist[i]}><SearchInfoItem>{newlist[i]}</SearchInfoItem></li>
                )
            }
        }
        // 函数参数为真返回列表否则返回为空
        if (fouced || mouseIn) {
            return (
            <SearchInfo onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}>
                <SearchInfoTitle>热门搜索</SearchInfoTitle>
                <SearchInfoSwitch onClick={()=> {changePage(page, totalPage, this.spinIcon)}}>
                    <i ref={(icon)=> {this.spinIcon = icon}} className="icon iconfont">&#xe671;</i>
                    换一批
                </SearchInfoSwitch>
                <SearchInfoList>
                    {
                        pageList
                    }
                </SearchInfoList>
            </SearchInfo>)
        } else {
            return null
        }
    }
    render(){
        const {fouced, inputFocus, inputBlur, lists} = this.props
        return (
        <HeaderWrapper>
            <JianshuLogo/>
            <Container>
                <Nav className="left active">首页</Nav>
                <Nav className="left download">下载APP</Nav>
                <SearchContent className="left search">
                    <CSSTransition
                        in={fouced}
                        timeout={200}
                        classNames="slide"
                      >
                        <NavSearch 
                            className={fouced ? 'fouced': ''}
                            onFocus={()=>{inputFocus(lists)}}
                            onBlur={inputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <SearchIcon className={fouced ? 'fouced-icon': ''}>
                        <i className='iconfont'>&#xe652;</i>
                    </SearchIcon>
                    {this.getListArea()}
                </SearchContent>
                <Nav className="right">登录</Nav>
                <Nav className="right">
                    <i className="iconfont">&#xe636;</i>
                    {/* 热门搜索 */}
                </Nav>
            </Container>
            <Button className="writeArc"><i className="iconfont">&#xe66b;</i>写文章</Button>
            <Button>注册</Button>
        </HeaderWrapper>);
    };
};
// 此时传入的store为与connect链接全局的store
const mapStateToProps = (store)=>{
    return {
        fouced: store.getIn(['header', 'fouced']),
        lists: store.getIn(['header', 'lists']),
        page: store.getIn(['header', 'page']),
        totalPage: store.getIn(['header', 'totalPage']),
        mouseIn: store.getIn(['header', 'mouseIn'])
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        inputFocus(lists){
            // 聚焦时发送请求
            (lists.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.handleInputFocus())
        },
        inputBlur(){
            dispatch(actionCreators.handleInputBlur())
        },
        mouseEnter(){
            dispatch(actionCreators.handleMouseEnter())
        },
        mouseLeave(){
            dispatch(actionCreators.handleMouseLeave())
        },
        changePage(page, totalPage, spinIcon){
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle)
            } else {
                originAngle = 0
            }
            spinIcon.style.transform = `rotate(${originAngle + 360}deg)`
            if(page < totalPage){
                dispatch(actionCreators.handleChangePage(page + 1))
            } else {
                dispatch(actionCreators.handleChangePage(1))
            }
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);