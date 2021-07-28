import React, { useState } from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import './Form.css';
import bookedSeats from '../../action/Bookseat';
import { bookSeats } from "../../action/Tickets";

const PassengerDetail = ({ id, bookedSeats }) =>{
    console.log(id,bookedSeats)
    console.log("passenger Data",id,bookSeats)
    const [name, setName] = useState([]);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState([]);
    const [gender, setGender] = useState([]);

    // return bookedSeats.map((seat, idx)=>{
        return (
            <div>
                <form className="form seatfrm ">
                    <p className="text-capitalize text-center">Seat No</p>
                    <input
                        className="form-control seatInp"
                        type="String"
                        name="passenger-Name"
                        placeholder="Enter Name"
                    />
                    <br></br>
                    <input
                        className="form-control seatInp"
                        type="int"
                        name="passenger-age"
                        placeholder="Enter Age "
                    />
                    <br></br>
                    <input
                        className="form-control seatInp"
                        type="int"
                        name="passenger-PhoneNumber"
                        placeholder="Enter Phone Number"
                    />
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="Male"
                        />
                        <label className="form-check-label" for="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="Female"
                        />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                </form>
                <a href="#" class="btn btn-primary">
                    Submit
                </a>
                <a><Link to="/bus/:busId/bookTickets">Go back</Link> </a>
            </div>
        );
    // }); 
};

PassengerDetail.propTypes = {
    bookedSeats: PropTypes.array.isRequired
};

export default PassengerDetail;