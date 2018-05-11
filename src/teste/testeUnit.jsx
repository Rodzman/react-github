import React, {Component} from 'react'

export default class TesteUnit extends Component {
    constructor(props){
        super(props)
        this.state = {
            repo : props.params.id
        }
    }
    componentWillReceiveProps(newProps){
        // console.log(props.params.id)
        this.state.repo = newProps.params.id
    }
    render(){
        return (
            <div>Olá mundo! Este é um teste de router no React {this.state.repo}</div>
        )
    }
}
    