import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import SidebarItem from '../template/sidebarItem'
import {search} from './sidebarActions'

class SidebarList extends Component {
    constructor(props){
        super(props)
        this.state = {
            repos: []
          }
    }

    componentDidMount() {
        this.props.search()
    }

    render(){
        const renderRows = () => {
            const repos = this.props.repos.repos || []
            return repos.map(res => (
                <li key={res.id} className="nav-item">
                    <SidebarItem 
                        path={`#/repo/`+res.name}
                        name={res.name}
                        stargazers_count={res.stargazers_count}
                        forks_count={res.forks_count}/>
                </li>
            ))
        }
        return (
            <nav className="col-md-3 d-none d-md-block sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item" >
                            <a className="nav-link active" href="#">
                                <span data-feather="home"></span>
                                Dashboard <span className="sr-only">(current)</span>
                            </a>
                        </li>
                    </ul>
                    <hr/>
                    <h6 className="menu-title">Projects</h6>
                    <ul className="nav flex-column">
                        {renderRows()}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({repos: state.repos})
const mapDispatchToProps = dispatch => bindActionCreators({search}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SidebarList)