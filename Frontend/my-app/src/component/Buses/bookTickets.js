import React, { useState, useEffect, Fragment } from "react";
import { useHistory, Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { bookSeats } from '../../action/Bookseat';
import { getBusStatus } from '../../action/busStatus';
import { connect, connectAdvanced } from "react-redux";

const BookTicket = ({ bookSeats, buses, match, busStatus: { loading, status }, getBusStatus }) => {
    useEffect(() => {
        getBusStatus(match.params.busId);
    }, getBusStatus[match.params.busId]);

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [phone, setPhone] = useState([]);
    const [age, setAge] = useState([]);
    const [gender, setGender] = useState([]);
    const [isok, setIsok] = useState("false");
    const [seatNumber, setSeatnumber] = useState([]);
    const travelDate = localStorage.getItem("travelDate");

    const getSeatNumber = (e) => {
        let newSeat = e.target.id;
        if (seatNumber.includes(newSeat)) {
            setSeatnumber(seatNumber.filter((seat) => seat !== newSeat));
        } else {
            setSeatnumber([...seatNumber, newSeat])
        }
    };

    const RenderPage = (seatNumber) => {
        console.log(seatNumber)
        setIsok(seatNumber)
    }

    const Gender = (e) => {
        const gender = e.target.id;
        console.log("gender", gender)
        setGender(...gender, gender);
    };

    const PassengerName = (e) => {
        e.preventDefault();
        const value = e.target.value;
        console.log(value)
        if (!value) {
            return setName("name is not required")
        } else {
            setName(...name, value);
        }
    };

    const PassengerEmail = (e) => {
        e.preventDefault();
        let value = e.target.value;
        console.log(value)
        if (!value) { return setEmail("Email is required") }
        setEmail(...email, value)
    };

    const PassengerPhone = (e) => {
        e.preventDefault();
        let value = e.target.value;
        console.log("phone", value)
        if (!value) { return setPhone("Phone no. is required") }
        setPhone(...phone, value)
    };

    const PassengerAge = (e) => {
        e.preventDefault();
        let value = e.target.value;
        console.log(value)
        if (!value) { return setAge("Age is required") }
        setAge(...age, value)
    }

    const SubmitDetails = (e) => {
        e.preventDefault();
        const passengers = []
        for (let i = 0; i < seatNumber.length; i++) {
            const newSeat = seatNumber[i]
            if (name[newSeat] || age[newSeat] || gender[newSeat] !== "Empty") {
                passengers.push({ name: name, age: age, gender: gender })
            }
            else { return alert("Please fill all the details") }
        }

        let userData = {
            seats_no: seatNumber,
            passengers,
            journeyDate: travelDate,
            email,
            phoneNo: phone
        }

        bookSeats(match.params.busId, userData)
    }
    const isBooked = (seat) => {
        if (!loading) {
            return status.hasOwnProperty(seat) ? seat : "booked"
        }
    }
    return (
        <div className="col-12">
            <div class="col-6">
                <div className="form-group row">
                    {/* <div className="row"></div> */}
                    <div className="col">
                        <div class="plane">
                            <h6>Please select seats</h6>
                            <form>
                                <div rel="stylesheet">
                                    <div class="exit exit--front fuselage">
                                    </div>
                                    <form onChange={(e) => {
                                        setIsok(true)
                                        getSeatNumber(e)
                                    }}>
                                        <ol class="cabin fuselage">
                                            <li class="row row--1">
                                                <ol class="seats" type="A">
                                                    <li class="seat">
                                                        <input type="checkbox" value="1A" id={isBooked("1A")} />
                                                        <label for="1A">1A</label>
                                                    </li>
                                                    <li class="seat">
                                                        <input type="checkbox" value="1B" id={isBooked("1C")} />
                                                        <label htmlFor="1B" className={isBooked("1B")}>1B</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="1C" id={isBooked("1C")} />
                                                        <label htmlFor="1C" className={isBooked("1C")}>1C</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="1D" id={isBooked("1D")} />
                                                        <label htmlFor="1D" className={isBooked("1D")}>1D</label>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="row row--2">
                                                <ol className="seats" type="A">
                                                    <li className="seat">
                                                        <input type="checkbox" value="2A" id={isBooked("2A")} />
                                                        <label htmlFor="2A" className={isBooked("2A")}>2A</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="2B" id={isBooked("2B")} />
                                                        <label htmlFor="2B" className={isBooked("2B")}>2B</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="2C" id={isBooked("2C")} />
                                                        <label htmlFor="2C" className={isBooked("2C")}>2C</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="2D" id={isBooked("2D")} />
                                                        <label htmlFor="2D" className={isBooked("2D")}>2D</label>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li class="row row--3">
                                                <ol class="seats" type="A">
                                                    <li class="seat">
                                                        <input type="checkbox" id="3A" />
                                                        <label for="3A">3A</label>
                                                    </li>
                                                    <li class="seat">
                                                        <input type="checkbox" id="3B" />
                                                        <label for="3B">3B</label>
                                                    </li>
                                                    <li class="seat">
                                                        <input type="checkbox" id="3C" />
                                                        <label for="3C">3C</label>
                                                    </li>
                                                    <li class="seat">
                                                        <input type="checkbox" id="3D" />
                                                        <label for="3D">3D</label>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="row row--4">
                                                <ol className="seats" type="A">
                                                    <li className="seat">
                                                        <input type="checkbox" value="4A" id={isBooked("4A")} />
                                                        <label htmlFor="4A" className={isBooked("4A")}>4A</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="4B" id={isBooked("4B")} />
                                                        <label htmlFor="4B" className={isBooked("4B")}>4B</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="4C" id={isBooked("4C")} />
                                                        <label htmlFor="4C" className={isBooked("4C")}>4C</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="4D" id={isBooked("4D")} />
                                                        <label htmlFor="4D" className={isBooked("4D")}>4D</label>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="row row--5">
                                                <ol className="seats" type="A">
                                                    <li className="seat">
                                                        <input type="checkbox" value="5A" id={isBooked("5A")} />
                                                        <label htmlFor="5A" className={isBooked("5A")}>5A</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="5B" id={isBooked("5B")} />
                                                        <label htmlFor="5B" className={isBooked("5B")}>5B</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="5C" id={isBooked("5C")} />
                                                        <label htmlFor="5C" className={isBooked("5C")}>5C</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="5D" id={isBooked("5D")} />
                                                        <label htmlFor="5D" className={isBooked("5D")}>5D</label>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="row row--6">
                                                <ol className="seats" type="A">
                                                    <li className="seat">
                                                        <input type="checkbox" value="6A" id={isBooked("6A")} />
                                                        <label htmlFor="6A" className={isBooked("6A")}>6A</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="6B" id={isBooked("6B")} />
                                                        <label htmlFor="6B" className={isBooked("6B")}>6B</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="6C" id={isBooked("6C")} />
                                                        <label htmlFor="6C" className={isBooked("6C")}>6C</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="6D" id={isBooked("6D")} />
                                                        <label htmlFor="6D" className={isBooked("6D")}>6D</label>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="row row--7">
                                                <ol className="seats" type="A">
                                                    <li className="seat">
                                                        <input type="checkbox" value="7A" id={isBooked("7A")} />
                                                        <label htmlFor="7A" className={isBooked("7A")}>7A</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="7B" id={isBooked("7B")} />
                                                        <label htmlFor="7B" className={isBooked("7B")}>7B</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="7C" id={isBooked("7C")} />
                                                        <label htmlFor="7C" className={isBooked("7C")}>7C</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="7D" id={isBooked("7D")} />
                                                        <label htmlFor="7D" className={isBooked("7D")}>7D</label>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="row row--8">
                                                <ol className="seats" type="A">
                                                    <li className="seat">
                                                        <input type="checkbox" value="8A" id={isBooked("8A")} />
                                                        <label htmlFor="8A" className={isBooked("8A")}>8A</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="8B" id={isBooked("8B")} />
                                                        <label htmlFor="8B" className={isBooked("8B")}>8B</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="8C" id={isBooked("8C")} />
                                                        <label htmlFor="8C" className={isBooked("8C")}>8C</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="8D" id={isBooked("8D")} />
                                                        <label htmlFor="8D" className={isBooked("8D")}>8D</label>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="row row--9">
                                                <ol className="seats" type="A">
                                                    <li className="seat">
                                                        <input type="checkbox" value="9A" id={isBooked("9A")} />
                                                        <label htmlFor="9A" className={isBooked("9A")}>9A</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="9B" id={isBooked("9B")} />
                                                        <label htmlFor="9B" className={isBooked("9B")}>9B</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="9C" id={isBooked("9C")} />
                                                        <label htmlFor="9C" className={isBooked("9C")}>9C</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="9D" id={isBooked("9D")} />
                                                        <label htmlFor="9D" className={isBooked("9D")}>9D</label>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="row row--10">
                                                <ol className="seats" type="A">
                                                    <li className="seat">
                                                        <input type="checkbox" value="10A" id={isBooked("10A")} />
                                                        <label htmlFor="10A" className={isBooked("10A")}>10A</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="10B" id={isBooked("10B")} />
                                                        <label htmlFor="10B" className={isBooked("10B")}>10B</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="10C" id={isBooked("10C")} />
                                                        <label htmlFor="10C" className={isBooked("10C")}>10C</label>
                                                    </li>
                                                    <li className="seat">
                                                        <input type="checkbox" value="10D" id={isBooked("10D")} />
                                                        <label htmlFor="10D" className={isBooked("10D")}>10D</label>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </form>
                                </div>
                            </form>
                        </div>
                        <div className="col">
                            {
                                (isok) ?
                                    (<Fragment><div className="col">
                                        <div className="overflow-auto forms_sec border">
                                            {seatNumber.map(Seats => (
                                                <Fragment>
                                                    <form className="form seatfrm ">
                                                        <p className="text-capitalize text-center">Seat No {Seats}</p>

                                                        <input
                                                            className="form-control seatInp"
                                                            type="String"
                                                            name="passenger-Name"
                                                            placeholder="Enter Name"
                                                            onChange={(e) => PassengerName(e)}
                                                        />
                                                        <br></br>
                                                        <input
                                                            className="form-control seatInp"
                                                            type="int"
                                                            name="passenger-age"
                                                            placeholder="Enter Age "
                                                            onChange={(e) => PassengerAge(e)}
                                                        />
                                                        <br></br>
                                                        <input
                                                            className="form-control seatInp"
                                                            type="int"
                                                            name="passenger-PhoneNumber"
                                                            placeholder="Enter Phone Number"
                                                            onChange={(e) => PassengerPhone(e)}
                                                        />
                                                        <input
                                                            className="form-control seatInp"
                                                            type="String"
                                                            name="passenger-email"
                                                            placeholder="Enter email"
                                                            onChange={(e) => PassengerEmail(e)}
                                                        />
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="gender"
                                                                id="male"
                                                                onChange={(e) => Gender(e)}
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
                                                                onChange={(e) => Gender(e)}
                                                            />
                                                            <label className="form-check-label" htmlFor="female">
                                                                Female
                                                            </label>
                                                        </div>
                                                    </form>
                                                </Fragment>
                                            ))}
                                            <div className="text-center">
                                                <button className="btn btn-primary mt-3" type="submit" onClick={(e) => SubmitDetails(e)}>Book tickets</button>
                                            </div>
                                        </div>
                                    </div>
                                    </Fragment>
                                    ) : <div> </div>
                            }
                            )
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
BookTicket.propTypes = {
    buses: PropTypes.func.isRequired,
    bookSeats: PropTypes.func.isRequired,
    getBusStatus: PropTypes.func.isRequired,
    busStatus: PropTypes.func
};

const mapStateToProps = state => ({
    busStatus: state.busStatus,
    buses: state.searchBus.buses
})
export default connect(mapStateToProps, { bookSeats, getBusStatus })(BookTicket);
