import React, { Fragment, useState } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux';
import addBus from '../../action/bus';

const AddBus = ({ addBus }) => {
    const [formData, setFormData] = useState({
        vehicleNo: "",
        busName: "",
        agency: "",
        seats: 0,
        busStaff:0,
        busType: "",
        agency: " ",
        seatCategory:" ",
        policy: "",
        image: "",
        from: "",
        to: "",
        arrivalTime: "",
        departureTime: ""
    })

    const {
        vehicleNo,
        busName,
        busStaff,
        agency,
        seats,
        busType,
        seatCategory,
        policy,
        from,
        to,
        arrivalTime,
        departureTime,
    } = formData

    const [image, setImage] = useState([]);
    const [secdule, setScedule] = useState([]);

    const pushDays = function(e){
        if (!secdule.includes(e.target.value)){
            setScedule([...secdule, e.target.value])
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (to === from) {
            alert("can't Add same start and end city", "danger");
        }
        else {
            addBus({
                busName,
                agency,
                vehicleNo,
                seats,
                busType,
                seatCategory,
                busStaff,
                policy,
                secdule,
                image,
                from,
                to,
                arrivalTime,
                departureTime
            })
        }
    }

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    return (
        <Fragment>
            <div className="card">
                <div className="container mt-4">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">Bus Name</label>
                            <input type="text" className="form-control w-50 col" name="busName" value={busName} onChange={(e) => onChange(e)} placeholder="Enter Bus Name" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">Bus Agency</label>
                            <input type="text" className="form-control w-50 col" name="agency" value={agency} onChange={(e) => onChange(e)} placeholder="Enter Bus Name" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">Vehicle No</label>
                            <input type="text" className="form-control w-50 col" name="vehicleNo" value={vehicleNo} onChange={(e) => onChange(e)} placeholder="Enter Vehicle No" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">Seats</label>
                            <input type="number" className="form-control w-50 col" name="seats" value={seats} onChange={(e) => onChange(e)} placeholder="Enter the seats 10" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">BusType</label>
                            <input type="text" className="form-control w-50 col" name="busType" value={busType} onChange={(e) => onChange(e)} placeholder="Enter Ac or NonAc" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">Seat Category</label>
                            <input type="text" className="form-control w-50 col" name="seatCategory" value={seatCategory} onChange={(e) => onChange(e)} placeholder="Enter sleeper or semi sleeper" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">Bus Staff</label>
                            <input type="text" className="form-control w-50 col" name="busStaff" value={busStaff} onChange={(e) => onChange(e)} placeholder="Enter the staff phone" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">Policy</label>
                            <input type="text" className="form-control w-50 col" name="policy" value={policy} onChange={(e) => onChange(e)} placeholder="Enter the policy" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">Image</label>
                            <input type="text" className="form-control w-50 col" name="image" onChange={(e) => setImage(e.target.value)} placeholder="Enter the link of the image" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">From</label>
                            <input type="text" className="form-control w-50 col" name="from" value={from} onChange={(e) => onChange(e)} placeholder="Enter the city name" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">To</label>
                            <input type="text" className="form-control w-50 col" name="to" value={to} onChange={(e) => onChange(e)} placeholder="Enter the city name" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">ArrivalTime</label>
                            <input type="text" className="form-control w-50 col" name="arrivalTime" value={arrivalTime} onChange={(e) => onChange(e)} placeholder="Enter the arrivalTime" />
                        </div>
                        <div className="form-group row justify-content-around">
                            <label className="col-2">DepartureTime</label>
                            <input type="text" className="form-control w-50 col" name="departureTime" value={departureTime} onChange={(e) => onChange(e)} placeholder="Enter the departureTime" />
                        </div>
                        <div className="schedule_sec">
                           secdule{' '}
                            <div className="form-check form-check-inline mr-0">
                                <label className="form-check-label">Sunday</label>
                                <input className="form-check-input" type="checkbox" value="Sunday" onChange={(e) => pushDays(e)} />
                            </div>
                            <div className="form-check form-check-inline mr-0">
                                <label className="form-check-label">Monday</label>
                                <input className="form-check-input" type="checkbox" value="Monday" onChange={(e) => pushDays(e)} />
                            </div>
                            <div className="form-check form-check-inline mr-0">
                                <label className="form-check-label">Tuesday</label>{' '}
                                <input className="form-check-input" type="checkbox" value="Tuesday" onChange={(e) => pushDays(e)} />
                            </div>
                            <div className="form-check form-check-inline mr-0">
                                <label className="form-check-label">Wednesday</label>
                                <input className="form-check-input" type="checkbox" value="Wednesday" onChange={(e) => pushDays(e)} />
                            </div>
                            <div className="form-check form-check-inline mr-0">
                                <label className="form-check-label">Thurday</label>
                                <input className="form-check-input" type="checkbox" value="Thurday" onChange={(e) => pushDays(e)} />
                            </div>
                            <div className="form-check form-check-inline mr-0">
                                <label className="form-check-label">Friday</label>
                                <input className="form-check-input" type="checkbox" value="Friday" onChange={(e) => pushDays(e)} />
                            </div>
                            <div className="form-check form-check-inline mr-0">
                                <label className="form-check-label">Saturday</label>
                                <input className="form-check-input" type="checkbox" value="Saturday" onChange={(e) => pushDays(e)} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

AddBus.propTypes = {
    addBus: propTypes.func.isRequired
}

export default connect(null, { addBus })(AddBus)