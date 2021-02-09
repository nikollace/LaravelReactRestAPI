import React from "react";
import {Link} from "react-router-dom";

const Contact = (props) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">{props.concrete.fullname}</div>
                    <div className="col-md-2">{props.concrete.email}</div>
                    <div className="col-md-2">{props.concrete.phone}</div>
                    <div className="col-md-2">
                        <Link className="btn btn-warning" to={`/edit/${props.concrete.id}`}>Edit</Link>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-danger" onClick={() => props.deleteContact(props.concrete.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
