import React, { useState } from "react";

function ServiceAddClientForm({ addClientToService }) {

    const [ clientInput, setClientInput ] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    function handleClientInput(event) {
        setClientInput({
            ...clientInput,
            [event.target.name]: event.target.value
        })
    }

    function handleAddClient() {
        const clientObj = {
            firstName: clientInput.firstName,
            lastName: clientInput.lastName,
            email: clientInput.email
        }
        addClientToService(clientObj)
        setClientInput({
            firstName: "",
            lastName: "",
            email: ""
        })
    }

    return (
        <div className="row g-3 align-items-center" style={{"width" : "75%", "margin": "auto"}} >
            <div className="col-auto">
                <input type="text" name="firstName" placeholder="First name" className="form-control" onChange={handleClientInput} value={clientInput.firstName}/>
            </div>
            <div className="col-auto">
                <input type="text" name="lastName" placeholder="Last name" className="form-control" onChange={handleClientInput} value={clientInput.lastName} />
            </div>
            <div className="col-auto">
                <input type="text" name="email" placeholder="Email name" className="form-control" onChange={handleClientInput} value={clientInput.email} />
            </div>
            <div className="col-auto">
                <button type="button" className="btn btn-secondary" onClick={handleAddClient}>Add</button>
            </div>
            <p></p>
        </div>
    )
}

export default ServiceAddClientForm;