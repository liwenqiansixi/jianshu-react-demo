import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    TopicWrapper,
    TopicItem,
    TopicMore
} from '../style'
class Topic extends Component{
    render(){
        const {topicList} = this.props
        return(
            <TopicWrapper>
                {topicList.map((item)=> {
                    return (
                        <TopicItem key={item.get('id')}>
                            <img className="topic-pic"
                            src={item.get('imgUrl')}  alt={item.get('title')}/>
                            {item.get('title')}
                        </TopicItem>
                    )
                })}
                <TopicMore>更多热门专题 ></TopicMore>
            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state)=> {
    return {
        topicList: state.getIn(['home', 'topicList'])
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Topic)