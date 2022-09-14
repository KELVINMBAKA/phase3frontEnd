import React, { useState } from "react";

function ServiceAddClassForm({ performAddService }) {

    const [ newServiceInput, setNewServiceInput ] = useState({
        date: "",
        time: "",
        name: "",
        instructor: "",
        description: "",
        duration: "",
        price: ""
    })

    function handleInput(event) {
        setNewServiceInput({
            ...newServiceInput,
            [event.target.name]: event.target.value
        })
    }

    function handleAdd() {
        const newServiceObj = {
            date: newServiceInput.date,
            time: newServiceInput.time,
            name: newServiceInput.name,
            instructor: newServiceInput.instructor,
            description: newServiceInput.description,
            duration: newServiceInput.duration,
            price: newServiceInput.price
        }

        performAddService(newServiceObj);

        setNewServiceInput({
            date: "",
            time: "",
            name: "",
            instructor: "",
            description: "",
            duration: "",
            price: ""
        })
    }

    return (
        <div className="row g-3 align-items-center" style={{"width" : "75%", "margin": "auto"}}>
            <h5 className="card-title">Add New Class</h5>
            <div className="col-auto">
                <input type="text" name="date" placeholder="MM/DD/YYYY" className="form-control" value={newServiceInput.date} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="time" placeholder="HH:MM AM/PM" className="form-control" value={newServiceInput.time} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="name" placeholder="Class Name" className="form-control" value={newServiceInput.name} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="instructor" placeholder="Instructor" className="form-control" value={newServiceInput.instructor} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="description" placeholder="Description" className="form-control" value={newServiceInput.description} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="duration" placeholder="Duration" className="form-control" value={newServiceInput.duration} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="price" placeholder="Price" className="form-control" value={newServiceInput.price} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <button type="button" className="btn btn-secondary" onClick={handleAdd}>Add</button>
            </div>
            <p></p>
        </div>
    )
}

export default ServiceAddClassForm;