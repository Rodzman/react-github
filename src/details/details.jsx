import React, {Component} from 'react'
import axios from 'axios'
import DetailsList from './detailsList'

const ProjectURL = 'https://api.github.com/repos/globocom'

export default class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            details : props.params.id,
            commits : []
        }
        
        this.getDetails = this.getDetails.bind(this)
        this.getDetails(this.state.details)
    }
    getDetails(repo, page=1){
        axios.get(`${ProjectURL}/${repo}`)
            .then(resp => {
                this.setState({...this.state, details: resp.data})
                const name = resp.data.name
            })
        axios.get(`https://api.github.com/repos/globocom/${repo}/commits?${page}&per_page=20`)
            .then(resp => {
                this.setState({...this.state, commits: resp.data})
            }) 
    }
    componentWillReceiveProps(newProps){
        // console.log(props.params.id)
        this.state.details = newProps.params.id
        this.getDetails(this.state.details)
    }
    render(){
         return (
            <DetailsList detail={this.state.details} commits={this.state.commits} name={name} />
        )
    }
}
    
