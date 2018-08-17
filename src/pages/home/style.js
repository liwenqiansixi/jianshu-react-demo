import styled from 'styled-components'
export const HomeWrapper = styled.div `
    overflow: hidden;
	width: 960px;
	margin: 0 auto;`
export const HomeLeft = styled.div `
    float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`
export const HomeRight = styled.div `
    width: 280px;
    float: right;
`
// topic的内容
export const TopicWrapper = styled.div `
    overflow: hidden;
    padding: 20px 0 10px 0
`
export const TopicItem = styled.div`
    float: left;
	height: 32px;
	line-height: 32px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
    border-radius: 4px;
    overflow: hidden;
    margin: 0 18px 18px 0;
    .topic-pic{
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`
export const TopicMore = styled.a.attrs({
    href: '#'
})`
float: left;
margin-top: 7px;
font-size: 14px;
color: #787878;`
// 列表页面
export const ListWrapper = styled.ul`
margin: 0;
padding: 0;
list-style: none;
`
export const ListItem = styled.li`
position: relative;
width: 100%;
margin: 0 0 15px;
padding: 15px 2px 20px 0;
border-bottom: 1px solid #f0f0f0;
word-wrap: break-word;
&.have-img {
    &>div{
        padding-right: 140px;
    }
}
.abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
    max-height: 48px;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; 
}
`
export const ListImg = styled.a.attrs({
    href: '#',
    target: '_blank'
})`
position: absolute;
top: 50%;
margin-top: -60px;
right: 0;
width: 125px;
height: 100px;
overflow: hidden;
img{
    max-width: 100%;
    max-height: 100%;
}
`
export const ListItemContent = styled.div`
.title{
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    max-height: 54px;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; 
}`
export const ListMeta = styled.div`
    padding-right: 0;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    a {
        transition: .1s ease-in;
        margin-right: 10px;
        color: #b4b4b4;
        &:hover{
            transition: .1s ease-in;
            color: #787878;
        }
    }
    span {
        margin-right: 10px;
        color: #b4b4b4;
    }
`