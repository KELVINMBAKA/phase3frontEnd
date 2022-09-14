import React, { useEffect, useState } from "react";
import ServiceAddClassForm from "./ServiceAddClassForm";
import ServicesContainer from "./ServicesContainer";

function ServicesPage() {

    const [ servicesArray, setServicesArray ] = useState([]);
    const [ isDeletedService, setIsDeletedService ] = useState(false);
    const [ isUpdatedService, setIsUpdatedService ] = useState(false);
    const [ isAddedService, setIsAddedService ] = useState(false);

    useEffect(() => {
        fetch("http://localhost:9292/services")
        .then(resp => resp.json())
        .then(data => setServicesArray(data))
    }, [isDeletedService, isUpdatedService, isAddedService])

    function performDelete(deleteServiceId) {
        fetch(`http://localhost:9292/services/${deleteServiceId}`, {
            method: "DELETE"
        })
        .then(data => setIsDeletedService(!isDeletedService))
    }

    function performEdit(updatedServiceObj, serviceId) {
        fetch(`http://localhost:9292/services/${serviceId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedServiceObj)
        })
        .then(data => setIsUpdatedService(!isUpdatedService))
    }

    function performAddService(newService) {
        fetch("http://localhost:9292/services", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newService)
        })
        .then(data => setIsAddedService(!isAddedService))
    }

    return (
        <div>
            <ServiceAddClassForm performAddService={performAddService}/>
            <ServicesContainer 
                servicesArray={servicesArray} 
                performDelete={performDelete}
                performEdit={performEdit}
            />
        </div>
    )
}

export default ServicesPage;