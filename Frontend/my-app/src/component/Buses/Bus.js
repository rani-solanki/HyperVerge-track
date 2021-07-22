import React, { Fragment, useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import setAlert from '../../action/aleart';
import PropTypes from 'prop-types'
import BusNotFound from './BusNotFound';

const Buses = ({ searchBuses: { buses, loading } }) =>{
    let travelDate = localStorage.getItem('travelDate');
    travelDate = new Date(travelDate)
    const month = travelDate.toLocaleString('default', { month: 'short' })
    const date = travelDate.getDate()
    return (
        <Fragment>
            {buses.length === 0 ? (
                <BusNotFound />
            ) : (
                <Fragment>
                    <div class="fluid-container pb-5">
                        {buses.map((bus) => (
                            <div class="row mb-5">
                                <div class="card w-100">
                                    <div class="card-header d-flex flex-direction-column justify-content-between">
                                        <div>
                                            <h4 class="agencyName">{bus.agency.agencyName}</h4>
                                            <h6 class="busName">{bus.busName}</h6>
                                            <h6>{bus.busType}/ {bus.seatCategory}</h6>
                                        </div>
                                        <div>
                                            <h6>{bus.arrivalTime}</h6>
                                            <h6>{bus.from.city}, {bus.from.state}</h6>
                                            <h6>{date} {month}</h6>
                                        </div>
                                        <div>
                                            <h6>{bus.departureTime}</h6>
                                            <h6>{bus.to.city}, {bus.to.state}</h6>
                                        </div>
                                        <div>
                                            <h6>Fare</h6>
                                            <h6 class="fare">Rs {bus.fare}</h6>
                                        </div>
                                        <div>
                                            <h6 class="seatsLeft">Total 52 seats left</h6>
                                            <h6 class="windowSeats">27 window seats</h6>
                                        </div>
                                    </div>
                                    <div class="card-body d-flex flex-direction-column justify-content-between align-items-end">
                                        <a href="#" class="btn btn-primary">
                                            Select Seats
                                        </a>
                                        <div class="dropdown policies mb-0">
                                            <button
                                                class="btn btn-secondary dropdown-toggle"
                                                type="button"
                                                id="dropdownMenu1"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Policies
                                            </button>
                                            <div
                                                class="dropdown-menu"
                                                aria-labelledby="dropdownMenu1"
                                            >
                                                <p class="dropdown-item">
                                                    {bus.policy}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="dropdown images mb-0">
                                            <button
                                                class="btn btn-secondary dropdown-toggle"
                                                type="button"
                                                id="dropdownMenu2"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                images
                                            </button>
                                            <div
                                                class="dropdown-menu"
                                                aria-labelledby="dropdownMenu2"
                                            >
                                                {
                                                    bus.images.map(image => (
                                                        <img
                                                            class="d-block w-100"
                                                            src={image}
                                                            alt="Third slide"
                                                        />
                                                    ))
                                                }

                                            </div>
                                        </div>
                                        <div class="dropdown reviews mb-0">
                                            <button
                                                class="btn btn-secondary dropdown-toggle"
                                                type="button"
                                                id="dropdownMenu2"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Reviews
                                            </button>
                                            <div
                                                class="dropdown-menu"
                                                aria-labelledby="dropdownMenu2"
                                            >
                                                <h5 class="dropdown-item" type="button">
                                                    Awesome
                                                </h5>
                                            </div>
                                        </div>
                                        <div class="btn-group dropleft staff mb-0">
                                            <button
                                                id="dropdownMenu2"
                                                class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                            >
                                                staff
                                            </button>
                                            <div
                                                class="dropdown-menu"
                                                aria-labelledby="dropdownMenu3"
                                            >
                                                <h6 class="dropdown-item">Driver : {bus.driver.name}</h6>
                                                <h6 class="dropdown-item">Helper: {bus.helper.name}</h6>
                                                <h6 class="dropdown-item r-0">Emergency No: {bus.agency.phone}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Fragment>
            )}
        </Fragment>

    )
}
export default connect(null, { setAlert })(Buses);
