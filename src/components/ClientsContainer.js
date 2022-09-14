import React from "react";
import ClientPageRow from "./ClientPageRow";

function ClientsContainer({ clientsArray, performDelete, performEdit }) {
    return (
        <div>
            {console.log(clientsArray)}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Class Count</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {clientsArray.map(client => {
                        return (
                            <ClientPageRow key={client.id} client={client} performDelete={performDelete} performEdit={performEdit} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ClientsContainer;