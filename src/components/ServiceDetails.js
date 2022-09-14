import React from "react";

function ServiceDetails({ serviceDetailsObj }) {
    return (
        <div className="card text-center" style={{"width" : "75%", "margin": "auto"}}>
            {/* <div className="card-header">
                {serviceDetailsObj.name}
            </div> */}
            <div className="card-body">
                <h4 className="card-title">{serviceDetailsObj.name} with {serviceDetailsObj.instructor}</h4>
                <p className="card-text">{serviceDetailsObj.description}</p>
                <p className="card-text">{serviceDetailsObj.duration} minutes</p>
            </div>
            {/* <div class="card-footer text-muted">
                2 days ago
            </div> */}
        </div>
    )
}

export default ServiceDetails;