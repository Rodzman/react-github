import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DetailsList from './detailsList'
import { getDetails } from './detailsActions'

export default class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            details : props.params.id,
            commits : []
        }
    }

    // componentDidMount() {
    //     if(this.state.details){
    //         this.props.getDetails(this.state.details)
    //         // this.props.getCommits(this.state.details)
    //     }
    // }

    componentWillReceiveProps(newProps){
        // console.log('newProps', newProps.params.id)
        if(newProps){
            this.state.details = newProps.params.id
            // this.props.getDetails(this.state.details)
            // this.props.getCommits(this.state.details)
        }
    }
    render(){
        console.log('return', this.props.params.id    )
        console.log('state', this.state.details    )
         return (
            <DetailsList repo={this.state.details}/>
        )
    }
}
