import React, { Fragment, useState } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux';
import Staff from '../../action/staff';

const AddBusStaff = ({ Staff}) => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        agencyName: "",
        phone: 0,
        isDriver: ""
    })

    const { name, phone, address, agencyName, isDriver } = formData
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        Staff({ name, phone, address, agencyName, isDriver })
    }

    return (
        <Fragment>
            <div className = "card">
                <div className="container mt-4">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">Name</label>
                            <input type="text" className="form-control w-50 col" name="name" value={name} onChange={(e) => onChange(e)} placeholder="Enter the Name" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">phone No</label>
                            <input type="text" className="form-control w-50 col" name="phone" value={phone} onChange={(e) => onChange(e)} placeholder="Enter phone No" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">address</label>
                            <input type="text" className="form-control w-50 col" name="address" value={address} onChange={(e) => onChange(e)} placeholder="Enter the address" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">agencyName</label>
                            <input type="text" className="form-control w-50 col" name="agencyName" value={agencyName} onChange={(e) => onChange(e)} placeholder="Enter the Agency name" />
                        </div>
                        <div className="form-group row">
                            <label className="col-2">isDriver</label>
                            <input type="text" className="form-control w-50 col" name="isDriver" value={isDriver} onChange={(e) => onChange(e)} placeholder="Enter the position" />
                        </div>
                        <button type="submit" className="btn btn-outline-success"> save </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
AddBusStaff.propTypes = {
    Staff: propTypes.func.isRequired
}

export default connect(null, { Staff})(AddBusStaff)