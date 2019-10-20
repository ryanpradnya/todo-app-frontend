import React from 'react'

const SignedInDashboard = () => {
    return (
        <div className="dashboard container">
            <div className="row">
                <span className="text-orange">
                    <h1 className="center ">TODO'S LIST</h1>
                </span>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="card">

                        <div className="card-content blue lighten-3 ">
                            <span className="card-title">Title</span>
                            <p>Description</p>
                            <di className="col s1 pull">

                            </di>
                        </div>
                        <div className="card-action blue lighten-5">
                            <di className="col s1">
                                <a className="btn-floating waves-effect waves-dark green lighten-1">
                                    <i className="material-icons left">edit</i>
                                </a>
                            </di>
                            <a className="btn-floating waves-effect waves-light btn red lighten-1">
                                <i className="material-icons left">delete</i>
                            </a>
                            <a className="btn-floating halfway waves-effect waves-light red">
                                <i className="material-icons left">check</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignedInDashboard
