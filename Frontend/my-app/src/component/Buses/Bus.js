import React, { Fragment, useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import setAlert from '../../action/aleart';
import propTypes from 'prop-types'
import './bus.css';
import { BUSNOT_FOUND } from "../../action/type";
import BusNotFound from './BusNotFound';

const Buses = ({searchBuses})=>{
    return (
        <Fragment>
            <div class="card box-size" >
                <div class="card-header">
                    Available Buses
                </div>
                <div class="col-sm-4"></div>
                <div class="card-body">
                    <div className="col-12">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title">Laxmi bus service</h5>
                                <div className="row">
                                    <div className="col">
                                        Arrival Time
                                    </div>
                                    <div className="col">
                                        Departure Time
                                    </div>
                                    <div className="col">
                                        <h6>Fare</h6>
                                        <h6 class="fare">Rs {500}</h6>
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
                                    <div className="col">
                                        image
                                    </div>
                                    <div>
                                        <h6 class="seatsLeft">Total 52 seats left</h6>
                                        <h6 class="windowSeats">27 window seats</h6>
                                        <a href="#" class="btn btn-primary">
                                            Select Seats
                                        </a>
                                        <p className="forgot-password text-left">
                                            Are you want to Book Tickets<Link to="/bookTickets">select seat</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))
        </Fragment>
    )
}
Buses.propTypes = {
    searchBuses: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    searchBuses: state.searchBuses,
});

export default connect(mapStateToProps)(Buses);
