import React, { Fragment, useState } from 'react';
import '../../App.css'
import { Link, Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import setAlert from '../../action/aleart';
import PropTypes from 'prop-types'
import { searchbus } from '../../action/SearchBuses';

const SearchBar = ({ setAlert, searchbus, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        from: "",
        to: "",
        date: " "
    });
    const { from, to, date } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    let history = useHistory();
    const onSubmit = async (e) => {
        e.preventDefault();
        let today = new Date().toISOString().slice(0, 10);
        console.log(today,formData,"hello");
        if (date < today) {
            alert("Invalid Date");
        } else if (to === from) {
            alert("Please select the valid Departure and Destination");
        } else {
            // setting travel date in to location storage
            localStorage.setItem('travelDate', date)
            let day = new Date(date);
            day = day.getDay();

            const newData = {
                to,
                from,
                date: day,
            };
            
            searchbus(newData)
            history.push("/buses")
        }
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row pt-1 pb-1">
                    <div className="col-lg-12">
                        <h1 className="text-center">Search bar</h1>
                    </div>
                </div>
            </div>
            <section>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
            <section className="search-sec">
                <div className="container">
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input type="text" className="form-control search-slt" placeholder="Enter Pickup City" name='from' value={from}
                                            onChange={e => onChange(e)} />
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input type="text" className="form-control search-slt" placeholder="Enter Drop City" name='to' value={to}
                                            onChange={e => onChange(e)}/>
                                    </div>
                                    <input type="Date" className="form-control date-style" placeholder="date" name="date" value={date}
                                        onChange={e => onChange(e)}/>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <button type="submit" className="btn btn-danger wrn-btn">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    )
};

SearchBar.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { searchbus })(SearchBar)