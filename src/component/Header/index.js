import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store/index';
import {
    HeaderWrapper,
    JianshuLogo,
    Container,
    Nav,
    Button,
    NavSearch,
    SearchIcon
} from './style';
class Header extends Component{
    render(){
        return (
        <HeaderWrapper>
            <JianshuLogo/>
            <Container>
                <Nav className="left active">首页</Nav>
                <Nav className="left download">下载APP</Nav>
                <Nav className="left search">
                    <CSSTransition
                        in={this.props.fouced}
                        timeout={200}
                        classNames="slide"
                      >
                        <NavSearch 
                            className={this.props.fouced ? 'fouced': ''}
                            onFocus={this.props.inputFocus}
                            onBlur={this.props.inputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <SearchIcon className={this.props.fouced ? 'fouced-icon': ''}>
                        <i className='iconfont'>&#xe652;</i>
                    </SearchIcon>
                </Nav>
                <Nav className="right">登录</Nav>
                <Nav className="right">
                    <i className="iconfont">&#xe636;</i>
                </Nav>
            </Container>
            <Button className="writeArc"><i className="iconfont">&#xe66b;</i>写文章</Button>
            <Button>注册</Button>
        </HeaderWrapper>);
    };
};
const mapStateToProps = (store)=>{
    return {
        fouced: store.header.fouced
    }
}
console.log('actionCreators', actionCreators);
const mapDispathToProps = (dispatch) => {
    return {
        inputFocus(){
            dispatch(actionCreators.handleInputFocus())
        },
        inputBlur(){
            dispatch(actionCreators.handleInputBlur())
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);