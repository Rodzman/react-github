import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DetailsCommits from './detailsCommits'
import { getDetails, getCommits } from './detailsActions'

const DetailsList = props => {
    const detail = props.details.details
    return (
        <div>
            <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
                <div className="lh-100">
                    <h6 className="mb-0 text-white lh-100">{detail.name}</h6>
                    <small>{detail.full_name}</small>
                </div>
            </div>
            <div className="my-3 p-3 bg-white rounded box-shadow">
                <h6 className="border-bottom border-gray pb-2 mb-0">Detalhes</h6>
                <div className="media text-muted pt-3">
                    <p className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">Nome</strong>
                        {detail.name}
                    </p>
                </div>
                <div className="media text-muted pt-3">
                    <p className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">Descrição</strong>
                        {detail.description}
                    </p>
                </div>
                <div className="media text-muted pt-3">
                    <p className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">Language</strong>
                        {detail.language}
                    </p>
                </div>
                <div className="media text-muted pt-3">
                    <p className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">Criado em</strong>
                        {detail.created_at}
                    </p>
                </div>
            </div>
            <div className="my-3 p-3 bg-white rounded box-shadow">
                <h6 className="border-bottom border-gray pb-2 mb-0">Commits</h6>
                <DetailsCommits repoName={detail.name}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({details: state.details, commits: state.commits})
export default connect(mapStateToProps)(DetailsList)