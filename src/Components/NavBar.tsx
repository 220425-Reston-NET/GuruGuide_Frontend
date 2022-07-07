import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";

function Nav() {
    return (
            <nav className="nav-container">
                <div className='flex-container'>
                    <Link to="/" className="navbar-brand"><a href="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png"><img style={{ width: 125 }} src="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png" title="source: imgur.com" /></a></Link>
                </div>
                <div className='search-container'>
                <form className="d-flex" role="search">
                        <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="drop-container">
                        <button className="btn btn-light btn-lg dropdown-toggle drop-container" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Account
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#"><Link to="/login" className="nav-link">Login</Link></a></li>
                            <li><a className="dropdown-item" href="#"><Link to="/register" className="nav-link">Create Account</Link></a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
            </nav>
    );
  }
export default Nav




{/* <nav className="navbar navbar-expand-lg bg-light">
<div className="container-fluid">
    <a className="navbar-brand" href="#">Greetings from the Guru Guide !</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/register" className="nav-link">Sign up as a Customer</Link>
            </li>
            <li className="nav-item">
            <Link to="/registercoaches" className="nav-link">Register as a Coach</Link>
            </li>
            <li className="nav-item">
            <Link to="/login" className="nav-link">Login In</Link>
            </li>
            <li className="nav-item">
            <Link to="/Services" className="nav-link">Find a Coach</Link>
            </li>
            {/* <li className="nav-item">
            <Link to="/Searchgroomers" className="nav-link">Customer Appointment Form</Link>
            </li> */}
            {/* <li className="nav-item">
            <Link to="/appointments" className="nav-link">Appointments</Link>
            </li> */}
            {/* <li className="nav-item">
            <Link to="/Confirmedpage" className="nav-link">Confirmed Page</Link>
            </li> */}
//         </ul>
//     </div>
// </div>
// </nav> */}