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
width: 960px;
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
    top: 9px;
    padding: 0 40px 0 20px;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;

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
// 搜索的ICON
export const SearchIcon = styled.div`
position: absolute;
top: 4px;
right: 5px;
width: 30px;
height: 30px!important;
line-height: normal!important;
padding: 0!important;
color: #969696!important;
text-align: center;
`;
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
background-color: transparent;
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
export const NavSearch = styled.input.attrs({
    autocomplete: "off",
    placeholder: "搜索"
})`
border: none;
outline: none;
width: 70px;
background: transparent;
&:placeholder{
    color:#f04848;
    font-size: 16px;
}
`