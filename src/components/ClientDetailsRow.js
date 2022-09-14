import React from "react";

function ClientDetailsRow({ service, deleteReservation }) {

    function handleCancelBooking() {
        deleteReservation(service.res_id)
    }

    return (
        <tr>
            <td>{service.date}</td>
            <td>{service.time}</td>
            <td>{service.name}</td>
            <td>{service.instructor}</td>
            <td><button onClick={handleCancelBooking} type="button" className="btn btn-danger">Cancel Booking</button></td>
        </tr>
    )
}

export default ClientDetailsRow;