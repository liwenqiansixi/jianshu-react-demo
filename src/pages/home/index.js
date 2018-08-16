import React, {Component} from 'react'
import List from './component/List'
import Recommend from './component/Recommend'
import Topic from './component/Topic'
import Write from './component/Write'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'
class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic />
					<List />
                </HomeLeft>
                <HomeRight>
					<Recommend />
					<Write />
				</HomeRight>
            </HomeWrapper>
        )
    }
}
export default Home