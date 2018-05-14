import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DetailsList from './detailsList'
import { getDetails, getCommits } from './detailsActions'

class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            repo: props.params.id,
            details: [],
            commits: []
        }
        this.props.getDetails(this.state.repo)
        this.props.getCommits(this.state.repo)
    }

    componentWillReceiveProps(newProps){
        if(newProps && this.state.repo !== newProps.params.id){
            this.state.repo = newProps.params.id
            this.props.getDetails(this.state.repo)
            this.props.getCommits(this.state.repo)
        }
    }

    render(){
         return (
            <DetailsList repo={this.state.repo} />
        )
    }
}

const mapStateToProps = state => ({details: state.details, commits: state.commits})
const mapDispatchToProps = dispatch => bindActionCreators({getDetails, getCommits}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Details)
