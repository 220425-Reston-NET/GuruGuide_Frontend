import React from 'react'
import './coachcarddropdown.css'

function Coachcarddropdown() {
  return (
    // Firstdrop down
    <div className= "coachbody">
        <div className="container-dropdowncoach">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div className="dropdown">
                <button className="btncoach btn-primary dropdown-toggle btn" type="button" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Specialization
                </button>
        <ul className="dropdown-menu" aria-labelledby="dropdown">
            <li><a className="dropdown-item" href="#">Specialization 1</a></li>
            <li><a className="dropdown-item" href="#">Specialization 2</a></li>
            <li><a className="dropdown-item" href="#">Specialization 3</a></li>
        </ul>

        {/* // Seconddrop down  */}
        <div className="container-dropdown">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div className="dropdown">
        <button className="btncoach btn-primary dropdown-toggle btn" type="button" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Years of Exp.
        </button>
        

        <ul className="dropdown-menu" aria-labelledby="dropdown">
            <li><a className="dropdown-item" href="#">Years of Experience: 1</a></li>
            <li><a className="dropdown-item" href="#">Years of Experience: 2</a></li>
            <li><a className="dropdown-item" href="#">Years of Experience: 3</a></li>
        </ul>


        {/* // Third drop down */}
        <div className="container-dropdown">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div className="dropdown">
        <button className="btncoach btn-primary dropdown-toggle btn" type="button" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Language
        </button>
        
        <ul className="dropdown-menu" aria-labelledby="dropdown">
            <li><a className="dropdown-item" href="#">English</a></li>
            <li><a className="dropdown-item" href="#">Spanish </a></li>
            <li><a className="dropdown-item" href="#">Manarin </a></li>
        </ul>



        {/* // Fourthdrop down */}
        <div className="container-dropdown">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div className="dropdown">
        <button className="btncoach btn-primary dropdown-toggle btn" type="button" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Demographics
        </button>
        
        
        <ul className="dropdown-menu" aria-labelledby="dropdown">
            <li><a className="dropdown-item" href="#">Placeholder 1</a></li>
            <li><a className="dropdown-item" href="#">Placeholder 2</a></li>
            <li><a className="dropdown-item" href="#">Placeholder 3</a></li>
        </ul>


        {/* // Frithdrop down */}
        <div className="container-dropdown">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div className="dropdown">
        <button className="btncoach btn-primary dropdown-toggle btn" type="button" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Specialization
        </button>
        
        
        <ul className="dropdown-menu" aria-labelledby="dropdown">
            <li><a className="dropdown-item" href="#">Specialization 1</a></li>
            <li><a className="dropdown-item" href="#">Specialization 2</a></li>
            <li><a className="dropdown-item" href="#">Specialization 3</a></li>
        </ul>

        <div className='search-container'>
        <form className="d-flex" role="search">
        <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Submit</button>
        </form>

        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
</div>
</div>
  )
}

export default Coachcarddropdown