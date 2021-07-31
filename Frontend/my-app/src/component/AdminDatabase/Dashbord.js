import React from 'react';
import { Link } from 'react-router-dom';

const dashboardAction=() =>{
    return (
        <div className="dash-buttons">
            <h1> Create Bus </h1>
            <Link to='/addStaff' className="btn btn-bluet"
            ><i className="fas fa-user-circle text-primary"></i> Add Staff</Link >
            <Link to="/addAgency" className="btn btn-light"
            ><i className="fab fa-black-tie text-primary"></i> Add Agency</Link>
            <Link to="/addLocation" className="btn btn-light"
            ><i className="fas fa-graduation-cap text-primary"></i> Add Location</Link>
            <Link to="/addBus" className="btn btn-light"
            ><i className="fas fa-graduation-cap text-primary"></i> Add Bus</Link>
        </div >
    )
}
export default dashboardAction