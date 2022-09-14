function ReservationsContainer() {

    function getReservations() {
        fetch("http://localhost:9292/reservations")
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    // function createReservation(formData) {
    //     const { client, service } = formData

    //     const reservation = {
    //         client,
    //         service
    //     }

    //     fetch("http://localhost:9292/clients", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(reservation)
    //     })
    //     .then(resp => resp.json())
    //     .then(reservation => console.log(reservation))
    // }

    return (
        <div>
            ReservationsContainer
            {console.log(getReservations())}
        </div>
    )
}

export default ReservationsContainer;