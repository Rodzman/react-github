import React, {Component} from 'react'

export default class Teste extends Component {
    constructor(props){
        super(props)
        this.state = {
            repo : ''
        }
    }
    // componentWillMount(){
    //     // console.log(props.params.id)
    //     this.state.repo = props.params.id
    // }
    render(){
        return (
            <div>Olá TESTE! Este é um teste de router no React</div>
        )
    }
}
    
