import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getDetails, getCommits} from './detailsActions'

class DetailsCommits extends Component {
    constructor(props){
        super(props)
        this.state = {
            repo: this.props.details,
            commits: props.commitList,
            perpage: 20,
            page: 1
        }
    }

    loadMore(){
        this.state.page += 1
        this.props.getCommits(this.props.repoName, this.state.page, this.state.perpage)
    }

    render(){
        const renderRows = () => {
            let i = 1
            const commits = this.props.details.commits || []
            return commits.map(res => (
                <li key={res.sha+i} className="list-group-item text-muted">
                    <span className="badge badge-info mr-1 badge-pill">{i++}</span><br/>
                    <b>Autor: </b>{res.commit.author.name} - <b>Data: </b>{res.commit.author.date}<br/>
                    <b>Mensagem: </b>{res.commit.message}<br/>
                    <b>URL: </b>{res.url}
                </li>
            ))
        }
        return (
            <div>
                <ul className="list-group list-group-flush">
                    {renderRows()}
                </ul>
                <div className="text-center load-more" onClick={() => this.loadMore()}>
                    Carregar Mais
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({details: state.details, commits: state.commits})
const mapDispatchToProps = dispatch => bindActionCreators({getDetails, getCommits}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DetailsCommits)
