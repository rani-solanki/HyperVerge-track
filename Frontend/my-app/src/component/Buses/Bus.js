import React, { Fragment} from "react";
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './bus.css';
import BusNotFound from './BusNotFound';
const Buses = ({ searchBus: { buses, loading } })=>{
    return (
        <Fragment>
            {buses.length === 0 ? (
                <h1>
                    Bus Not Found
                </h1>
            ) : (
                <Fragment>
                    <div class="card-header">
                        Available Buses
                    </div>
                    <div className="fluid-container pb-5">
                        {buses.map((bus) => (
                            <Fragment key={bus._id} bus={bus}>
                            <div class="card box-size" >
                                <div class="col-sm-4"></div>
                                <div class="card-body">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col">
                                                <h4>R.S bus service</h4>
                                                <div className="row">
                                                    <div className="col">
                                                        <h6>Arrival Time</h6>
                                                    </div>
                                                    <div className="col">
                                                        <h6>Departure Time</h6>
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
                                                            <h6>Reviews</h6>
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
                                                        <h6>image</h6>
                                                    </div>
                                                    <div>
                                                        <h6 class="seatsLeft">Total seats</h6>
                                                        <a href="#" class="btn btn-primary">
                                                                <Link to={`/bus/${bus._id}/bookTickets`} className="btn btn-primary">
                                                                <h6>select seat</h6>
                                                            </Link>
                                                            </a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </Fragment>
                        ))}  
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

Buses.propTypes = {
    searchBus: propTypes.object.isRequired,
};

const mapStateToProps = state => ({
    searchBus: state.searchBus
});

export default connect(mapStateToProps)(Buses);
