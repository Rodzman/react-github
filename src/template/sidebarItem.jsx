import React from 'react'

export default props => (
    <a className="nav-link" href={props.path}>
        {props.number} - {props.name} 
        <small className="box starbox">{props.stargazers_count} <i className="fa fa-star"></i></small> 
        <small className="box forkbox">{props.forks_count} <i className="fa fa-code-fork"></i></small>
    </a>
)