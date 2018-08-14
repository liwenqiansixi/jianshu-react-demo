import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {
    HeaderWrapper,
    JianshuLogo,
    Container,
    Nav,
    Button,
    NavSearch,
    SearchIcon
} from './style';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            fouced: false
        }
        this.handleInputFocus.bind(this);
        this.handleInputBlur.bind(this);
    }
    render(){
        return (
        <HeaderWrapper>
            <JianshuLogo/>
            <Container>
                <Nav className="left active">首页</Nav>
                <Nav className="left download">下载APP</Nav>
                <Nav className="left search">
                    <CSSTransition
                        in={this.state.fouced}
                        timeout={200}
                        classNames="slide"
                      >
                        <NavSearch 
                            className={this.state.fouced ? 'fouced': ''}
                            onFocus={this.handleInputFocus}
                            onBlur={this.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <SearchIcon className={this.state.fouced ? 'fouced-icon': ''}>
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
    handleInputFocus = ()=> {
        this.setState(()=>({
            fouced: true
        }))
    }
    handleInputBlur = ()=> {
        this.setState(()=>({
            fouced: false
        }))
    }
};
const mapStateToProps = (store)=>{
    return {

    }
}
const mapDispatchToProps = (dispath) => {
    return {
        
    }
}
export default connect(null, null)(App);