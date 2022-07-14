import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Nav() {
    const navigate=useNavigate()
    
    const gotoregister = () => {
        navigate('/register')}
    const gotologin = () => {
        navigate('/login')}
    const gotoview = () => {
        navigate('/coachviewingpage')}
                        

    return (
            <nav className="nav-container">
                
                <div className='greetings'>
                <p className='text-container'> <h4>Greetings From the GuruGuide! </h4></p>
                </div>

                <div className='search-container'>
                
                </div>
                
                <div className='navbuttons'>
                    <button className="btn-btn-primary" onClick={gotoregister} role="button">Sign Up </button>
                    <button className="btn-btn-primary" onClick={gotologin} role="button">Log In </button>
                    <button className="btn-btn-primary" onClick={gotoview} role="button">Find a Coach</button>
                <form className="d-flex" role="search">
                        <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Submit</button>
                    </form>
                </div>
                
                <div className="drop-container">
                        <button className="btn btn-light btn-lg dropdown-toggle drop-container" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Account
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#"><Link to="/login" className="nav-link">Login</Link></a></li>
<<<<<<< HEAD:src/Components/NavBar.tsx
                            <li><a className="dropdown-item" href="#"><Link to="/register" className="nav-link">Create Account as Customer</Link></a></li>
                            <li><a className="dropdown-item" href="#"><Link to="/coachviewingpage" className="nav-link">Coaches View</Link></a></li>
                            <li><a className="dropdown-item" href="#"><Link to="/" className="nav-link">Coaches Profile</Link></a></li>
                            <li><a className="dropdown-item" href="#"><Link to="/" className="nav-link">Go Home</Link></a></li>
=======
                            <li><a className="dropdown-item" href="#"><Link to="/register" className="nav-link">Create Account</Link></a></li>
                            <li><a className="dropdown-item" href="#"><Link to="/coachviewingpage" className="nav-link">Coaches Profiles</Link></a></li>
                            <li><a className="dropdown-item" href="#"><Link to="/coacheprofile" className="nav-link">Coaches Profiles</Link></a></li>
>>>>>>> bb044d8d2c7bd8f840f747f4326cdb72ff8749c6:src/Components/NavbBar.tsx
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
            </nav>
    );
  }
export default Nav
