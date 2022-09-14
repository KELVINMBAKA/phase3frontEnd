import React, { useState } from "react";
import { Link } from "react-router-dom";

function ServiceTableRow({ service, performDelete, performEdit }) {

    const { name, description, duration, date, time, instructor, price } = service

    const [ isEditMode, setIsEditMode ] = useState(false);
    const [ updatedInput, setUpdatedInput ] = useState({
        name,
        description,
        date, 
        time,
        duration,
        price, 
        instructor
    })

    function handleInput(event) {
        setUpdatedInput({
            ...updatedInput,
            [event.target.name] : event.target.value
        })
    }

    function handleSave() {

        const updatedObj = {
            name: updatedInput.name,
            description: updatedInput.description,
            date: updatedInput.date,
            time: updatedInput.time,
            duration: updatedInput.duration,
            price: updatedInput.price,
            instructor: updatedInput.instructor
        }

        performEdit(updatedObj, service.id);
        handleIsEditMode();
    }

    function handleIsEditMode() {
        setIsEditMode(!isEditMode)
    }

    function handleCancel() {
        performDelete(service.id)
    }

    function displayRow() {
        if (!isEditMode) {
            return (
                <tr>
                    <td>{service.date}</td>
                    <td>{service.time}</td>
                    <td><Link to={`services/${service.id}`}>{service.name}</Link></td>
                    <td>{service.instructor}</td>
                    <td>{service.client_count}</td>
                    <td><button onClick={handleIsEditMode} type="button" className="btn btn-secondary">Edit</button></td>
                    <td><button onClick={handleCancel} type="button" className="btn btn-danger">Cancel</button></td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td><input type="text" name="date" className="form-control" value={updatedInput.date} onChange={handleInput}/></td>
                    <td><input type="text" name="time" className="form-control" value={updatedInput.time} onChange={handleInput}/></td>
                    <td><input type="text" name="name" className="form-control" value={updatedInput.name} onChange={handleInput}/></td>
                    <td><input type="text" name="instructor" className="form-control" value={updatedInput.instructor} onChange={handleInput}/></td>
                    <td>{service.client_count}</td>
                    <td><button onClick={handleSave} type="button" className="btn btn-secondary">Save</button></td>
                    <td><button onClick={handleCancel} type="button" className="btn btn-danger">Cancel</button></td>
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

export default ServiceTableRow;