import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ClientDetails from "./ClientDetails";
import ClientDetailsRow from "./ClientDetailsRow";

function ClientDetailsPage() {

    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ isDeleted, setIsDeleted ] = useState(false)
    const [ clientDetailsObj, setClientDetailsObj] = useState({
        firstName: "",
        lastName: "",
        email: "",
        services: []
    })

    const clientId = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:9292/clients/${clientId}`)
        .then(resp => resp.json())
        .then(client => {
            setClientDetailsObj(client)
            setIsLoaded(!isLoaded)
        })
    }, [isDeleted])

    function deleteReservation(resId) {
        fetch(`http://localhost:9292/reservations/${resId}`, {
            method: "DELETE"
        })
        .then(data => setIsDeleted(!isDeleted))
    }

    return (
        <div>
            <ClientDetails clientDetailsObj={clientDetailsObj}/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Class</th>
                        <th scope="col">Instructor</th>
                        <th scope="col">Cancel Class</th>
                    </tr>
                </thead>
                <tbody>
                    {clientDetailsObj.services.map((service) => {
                        return (
                            <ClientDetailsRow key={service.id} service={service} deleteReservation={deleteReservation}/>
                        )
                    })}
                </tbody>
            </table>
            <Link to="/clients"><button type="button" className="btn btn-secondary">Go Back</button></Link>
        </div>
    )
}

export default ClientDetailsPage;