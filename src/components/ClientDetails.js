import React from "react";

function ClientDetails({ clientDetailsObj }) {
    return (
        <div className="card text-center" style={{"width" : "75%", "margin": "auto"}}>
            <div className="card-body">
                <h4 className="card-title">{clientDetailsObj.first_name} {clientDetailsObj.last_name}</h4>
                <p className="card-text">{clientDetailsObj.email}</p>
            </div>
        </div>
    )
}

export default ClientDetails;