import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Header from '../template/header'
import Sidebar from '../sidebar/sidebar'
import Routes from './routes'

export default props => (
    <div>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <main className="col-md-9 ml-sm-auto col-lg-9 px-4">
                    <div className="justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <Routes />
                    </div>
                </main>
            </div>
        </div>
    </div>
)