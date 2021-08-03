import React, { Fragment, useState } from 'react'
import propTypes from 'prop-types'
import addLocation  from '../../action/Location';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const AddLocation = ({ addLocation })=>{
    const [formData, setFormData] = useState({
        city: "",
        state: ""
    })
    
    const onSubmit = (e) => {
        e.preventDefault();
        addLocation({ city, state })
    }
    const { city, state } = formData
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <Fragment>
            <div className = "card">
            <div className="container mt-4">
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group row justify-content-around">
                        <label className="col-2">city</label>
                        <input type="text" className="form-control w-50 col" name="city" value={city} onChange={e => onChange(e)} placeholder="Enter the Name" />
                    </div>
                    <div className="form-group row justify-content-around">
                        <label className="col-2">State</label>
                        <input type="text" className="form-control w-50 col" name="state" value={state} onChange={e => onChange(e)} placeholder="Enter phone No" />
                    </div>
                    <button className="btn btn-info"> Save Location</button>
                </form>
                </div>
            </div>
        </Fragment>
    )
}

AddLocation.propTypes = {
    addLocation: propTypes.func.isRequired
}

export default connect(null, { addLocation })(AddLocation);