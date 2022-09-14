import React, { useState } from "react";

function ClientAddForm({ performAddClient }) {

    const [ newClientInput, setNewClientInput ] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    function handleInput(event) {
        setNewClientInput({
            ...newClientInput,
            [event.target.name]: event.target.value
        })
    }

    function handleAddClient(){
        const newClientObj = {
            firstName: newClientInput.firstName,
            lastName: newClientInput.lastName,
            email: newClientInput.email
        }

        performAddClient(newClientObj);

        setNewClientInput({
            firstName: "",
            lastName: "",
            email: ""
        })
    }

    return (
        <div className="row g-3 align-items-center" style={{"width" : "75%", "margin": "auto"}}>
            <h5 className="card-title">Add New Client</h5>
            <div className="col-auto">
                <input type="text" name="firstName" placeholder="First name" className="form-control" value={newClientInput.firstName} onChange={handleInput} />
            </div>
            <div className="col-auto">
                <input type="text" name="lastName" placeholder="Last name" className="form-control" value={newClientInput.lastName} onChange={handleInput} />
            </div>
            <div className="col-auto">
                <input type="text" name="email" placeholder="Email name" className="form-control" value={newClientInput.email} onChange={handleInput} />
            </div>
            <div className="col-auto">
                <button type="button" className="btn btn-secondary" onClick={handleAddClient}>Add</button>
            </div>
            <p></p>
        </div>
    )
}

export default ClientAddForm;