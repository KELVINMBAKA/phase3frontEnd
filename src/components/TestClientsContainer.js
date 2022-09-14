function ClientsContainer() {

    const getClients = async () => {
        try {
            const response = await fetch('http://localhost:9292/clients')
            console.log(response)
            let resp = response.data
        } catch (error) {
            console.log(error)
        }
    }

    function createClient(formData) {
        const {firstName, lastName, email } = formData

        const client = {
            firstName,
            lastName,
            email
        }

        fetch("http://localhost:9292/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(client)
        })
        .then(resp => resp.json())
        .then(client => console.log(client))
    }

    function getClient(id) {
        fetch(`http://localhost:9292/clients/${id}`)
        .then(resp => resp.json())
        .then(client => console.log(client))
    }

    function updateClient(formData, clientId) {
        const {firstName, lastName, email } = formData

        const client = {
            firstName,
            lastName,
            email
        }

        fetch(`http://localhost:9292/clients/${clientId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(client)
        })
        .then(resp => resp.json())
        .then(client => console.log(client))
    }

    function deleteClient(clientId) {
        fetch(`http://localhost:9292/clients/${clientId}`, {
            method: "DELETE"
        })
    }

    // debugger;

    return (
        <div>
            This is ClientsContainer
        </div>
    )
}