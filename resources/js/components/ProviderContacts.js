import React from 'react'

const ProviderContacts = (props) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">{props.concrete.fullname}</div>
                    <div className="col-md-3">{props.concrete.shortname}</div>
                    <div className="col-md-3">
                        <button className="btn btn-success" onClick={() => props.getContacts(props.concrete.id)}>Get all contacts</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProviderContacts
