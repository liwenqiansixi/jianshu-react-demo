import React, {Component} from 'react'
import {ToTop} from '../style'
class BackToTop extends Component{
    backToTop(){
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <ToTop onClick={this.backToTop}>
                <div className="btn">
                    <i className="iconfont">&#xe6b1;</i>
                </div>
            </ToTop>
        )
    }
}
export default BackToTop