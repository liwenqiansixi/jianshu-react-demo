import React, {Component} from 'react';
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
    render(){
        return (
        <HeaderWrapper>
            <JianshuLogo/>
            <Container>
                <Nav className="left active">首页</Nav>
                <Nav className="left download">下载APP</Nav>
                <Nav className="left search">
                    <NavSearch></NavSearch>
                    <SearchIcon>
                        <i class="iconfont">&#xe652;</i>
                    </SearchIcon>
                </Nav>
                <Nav className="right">登录</Nav>
                <Nav className="right">
                    <i class="iconfont">&#xe636;</i>
                </Nav>
            </Container>
            <Button className="writeArc"><i class="iconfont">&#xe66b;</i>写文章</Button>
            <Button>注册</Button>

        </HeaderWrapper>);
    }
};
export default App;