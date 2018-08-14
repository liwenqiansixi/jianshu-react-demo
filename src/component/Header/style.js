import styled from 'styled-components';
import logoImg from '../../static/jianshu-logo.png'
export const HeaderWrapper = styled.div `
position:relative;
height: 56px;
border-bottom: 1px solid #f0f0f0;
`;
export const JianshuLogo = styled.a `
float: left;
width: 100px;
height: 56px;
padding: 0;
background: url(${logoImg}) no-repeat;
background-size: contain;
`
export const Container = styled.div `
position: relative;
width: 60%;
height: 100%;
padding-left: 15px;
padding-right: 30px;
box-sizing: border-box;
margin: 0 auto;
float: left;
`
export const Nav = styled.a `
height: 56px;
line-height: 56px;
padding: 0 15px;
color: #333;

&.left{
    &.active{
        color: #ea6f5a;
    }
    &.download{
        &:hover{
            background-color: #f5f5f5;
            color: #333;
        }
    }
    float: left;
}
&.search {
    position: relative;
    padding: 0;
    top: 9px;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    margin: 0 15px;
    .search-input {
      padding: 0 40px 0 20px;
      width: 160px;
      height: 38px;
      font-size: 14px;
      border: 1px solid #eee;
      border-radius: 40px;
      background: #eee;
    }
}
&.right{
    float: right;
    color: #969696;
}
`

//左侧按钮
export const Button = styled.a `
float: right;
width: 80px;
height: 38px;
line-height: 38px;
text-align: center;
margin: 9px 0px 0 0px;
border: 1px solid rgba(236,97,73,.7);
border-radius: 20px;
font-size: 15px;
color: #ea6f5a;
&.writeArc {
    padding: 0px 12px;
    margin: 8px 15px 0;
    color: #fff;
    background-color: #ea6f5a;
    .iconfont{
        margin-right: 5px;
    }
}
`
// 搜索输入框
export const NavSearch = styled.input.attrs({
    id: 'search',
    autoComplete: "off",
    placeholder: "搜索"
})`
border: none;
outline: none;
width: 70px;
height: 100%;
padding: 0 40px 0 20px;
background: transparent;
font-size: 14px;

&::placeholder{
    color:#999;
}
&.fouced{
    width: 160px;
}
&.slide-enter{
    transition: all .2s ease-out;
}
&.slide-enter-active{
    width: 160px;
}
&.slide-exit{
    transition: all .2s ease-out;
}
&.slide-exit-active{
    width: 70px;
}
`
// 搜索的ICON
export const SearchIcon = styled.label.attrs({
    htmlFor: 'search'
})`
border-radius: 50%;
position: absolute;
top: 4px;
right: 5px;
width: 30px;
height: 30px;
line-height: 30px;
padding: 0!important;
color: #969696;
text-align: center;
&.fouced-icon {
    background-color: #969696;
    color: #fff;
}
`;