import React, { Fragment,useEffect } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { cancelTicket } from '../../action/Bookseat';

const Tickets = ({ Tickets, cancelTicket }) =>{
    let count = 0;
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="ticket-info text-center mt-2">
                    <h3>Your Tickets </h3>
                    <div className="card">
                        {Tickets.map(ticket =>(
                            <Fragment>
                                <div className="card-body d-flex">
                                    <div className="col-auto">
                                        {count += 1}
                                    </div>
                                    <div className="col d-flex">
                                        {ticket.passengers.map(passenger=>(
                                            <Fragment>
                                                <div className="col-auto seat_no_sec d-flex">
                                                    <div className="seat_no">
                                                        Seat No:
                                                    </div>
                                                    <div className="seat_no">
                                                        {passenger.seat_no}
                                                    </div>

                                                </div>
                                                <div className="col-auto passenger_name_sec  d-flex">
                                                    <div className="passenger_name">
                                                        Passenger Name:
                                                    </div>
                                                    <div className="passenger_name">
                                                        {passenger.name}
                                                    </div>
                                                </div>
                                            </Fragment>
                                        ))}
                                        <div className="col-auto d-flex">
                                            <div className="journey_date">
                                                journeyDate :
                                            </div>
                                            <div>
                                                {ticket.journeyDate.slice(0, 10)}
                                            </div>
                                        </div>
                                        <div className="col-auto d-flex">
                                            <div>
                                                Booked At :
                                            </div>
                                            <div>
                                                {ticket.createdAt.slice(0, 10)}
                                            </div>
                                    </div>
                                    <div className="col-auto d-flex">
                                        <div>
                                            Fare 500
                                        </div>
                                        <div>
                                            {ticket.createdAt.slice(0, 10)}
                                        </div>
                                    </div>
                                        <div className="col">
                                            <button type="submit" className="btn btn-outline-danger" id = "Tickets" onClick={(e) =>(e.target.id)}>Cancel Ticket</button>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Tickets.propTypes = {
    cancelTicket: propTypes.func.isRequired,
    Tickets:propTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    Tickets: state.Tickets.Tickets
})

export default connect(mapStateToProps, {cancelTicket})(Tickets)