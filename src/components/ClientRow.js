import React from "react";

function ClientRow({ client, index, deleteReservation }) {

    function handleCancelBooking() {
        // console.log(client.res_id);
        deleteReservation(client.res_id)
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{client.first_name}</td>
            <td>{client.last_name}</td>
            <td>{client.email}</td>
            <td><button onClick={handleCancelBooking} type="button" className="btn btn-danger">Cancel Booking</button></td>
        </tr>
    )
}

export default ClientRow;