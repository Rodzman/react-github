import React from 'react'

export default props => {
    console.log(props)
    const renderRows = () => {
        let i = 1
        const commits = props.repo || []
        return commits.map(res => (
            <li key={res.sha} className="list-group-item text-muted">
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
            <div className="text-center" onClick={() => (console.log('load more'))}>
                Carregar Mais
            </div>
        </div>
    )
}
