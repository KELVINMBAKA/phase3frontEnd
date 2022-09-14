import React, { useState } from "react";
import { Link } from "react-router-dom";

function ClientPageRow({ client, performDelete, performEdit }) {

    const [ isEditMode, setIsEditMode ] = useState(false)
    const [ clientInfo, setClientInfo ] = useState({
        first: client.first_name,
        last: client.last_name,
        email: client.email
    })

    function handleInput(event) {
        setClientInfo({
            ...clientInfo,
            [event.target.name]: event.target.value
        })
    }

    function handleSave() {
        
        const updatedObj = {
            firstName: clientInfo.first,
            lastName: clientInfo.last,
            email: clientInfo.email
        }

        performEdit(updatedObj, client.id);
        handleIsEditMode();
    }

    function handleIsEditMode() {
        setIsEditMode(!isEditMode)
    }

    function handleDelete() {
        performDelete(client.id)
    }

    function displayRow() {
        if (!isEditMode) {
            return (
                <tr>
                    <td>{client.first_name}</td>
                    <td>{client.last_name}</td>
                    <td>{client.email}</td>
                    <td><Link to={`clients/${client.id}`}>{client.service_count}</Link></td>
                    <td><button type="button" className="btn btn-secondary" onClick={handleIsEditMode}>Edit</button></td>
                    <td><button type="button" className="btn btn-danger" onClick={handleDelete} >Delete</button></td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td><input type="text" name="first" className="form-control" value={clientInfo.first} onChange={handleInput}/></td>
                    <td><input type="text" name="last" className="form-control" value={clientInfo.last} onChange={handleInput}/></td>
                    <td><input type="text" name="email" className="form-control" value={clientInfo.email} onChange={handleInput}/></td>
                    <td>{client.service_count}</td>
                    <td><button type="button" className="btn btn-secondary" onClick={handleSave}>Save</button></td>
                    <td><button type="button" className="btn btn-danger">Cancel</button></td>
                </tr>
            )
        }
    }

    return (
        <>
            {displayRow()}
        </>
    )
}

export default ClientPageRow;