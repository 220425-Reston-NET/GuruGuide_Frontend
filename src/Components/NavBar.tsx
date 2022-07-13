import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";

function Nav() {
    return (
            <nav className="nav-container">
                
                <div className='greetings'>
                    Greetings From Guru Guide !
                </div>

                <div className='search-container'>
                
                </div>
                
                <div className='navbuttons'>
                    <a className="btn-btn-primary" href="/register" role="button">Sign Up </a>
                    <a className="btn-btn-primary" href="/login" role="button">Log In </a>
                    <a className="btn-btn-primary" href="/coachviewingpage" role="button">Find a Coach</a>
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
                            <li><a className="dropdown-item" href="#"><Link to="/register" className="nav-link">Create Account as Customer</Link></a></li>
                            <li><a className="dropdown-item" href="#"><Link to="/coachviewingpage" className="nav-link">Coaches View</Link></a></li>
                            <li><a className="dropdown-item" href="#"><Link to="/" className="nav-link">Coaches Profile</Link></a></li>
                            <li><a className="dropdown-item" href="#"><Link to="/" className="nav-link">Go Home</Link></a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
            </nav>
    );
  }
export default Nav
