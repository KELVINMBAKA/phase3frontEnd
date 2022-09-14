import React, { useEffect, useState } from "react";
import ClientAddForm from "./ClientAddForm";
import ClientsContainer from "./ClientsContainer";

function ClientsPage() {

    const [ clientsArray, setClientsArray ] = useState([]);
    const [ isDeletedClient, setIsDeletedClient ] = useState(false)
    const [ isUpdatedClient, setIsUpdatedClient ] = useState(false)
    const [ isAddedClient, setIsAddedClient ] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/clients")
        .then(resp => resp.json())
        .then(clientsData => setClientsArray(clientsData))
    }, [isDeletedClient, isUpdatedClient, isAddedClient])

    function performDelete(deleteClientId) {
        fetch(`http://localhost:9292/clients/${deleteClientId}`, {
            method: "DELETE"
        })
        .then(data => setIsDeletedClient(!isDeletedClient))
    }

    function performEdit(updatedClientObj, clientId) {
        fetch(`http://localhost:9292/clients/${clientId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedClientObj)
        })
        .then(data => setIsUpdatedClient(!isUpdatedClient))
    }

    function performAddClient(newClient) {
        fetch(`http://localhost:9292/clients`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newClient)
        })
        .then(data => setIsAddedClient(!isAddedClient))
    }

    return (
        <div>
            <ClientAddForm performAddClient={performAddClient} />
            <ClientsContainer 
                clientsArray={clientsArray}
                performDelete={performDelete}
                performEdit={performEdit}
            />
        </div>
    )
}

export default ClientsPage;