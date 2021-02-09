import React from 'react'
import {Link} from "react-router-dom";

const ProviderOneContact = (props) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">{props.concrete.fullname}</div>
                    <div className="col-md-3">{props.concrete.email}</div>
                    <div className="col-md-3">{props.concrete.phone}</div>
                    <div className="col-md-3">
                        <Link className="btn btn-primary" to={`/addContact`}>Add new contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProviderOneContact
