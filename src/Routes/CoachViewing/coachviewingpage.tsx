import React from 'react'
import './coachviewingpage.css'

function coachviewingpage() {
  return (

// Firstdrop down
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

  
  
  <div className="container-dropdown 2">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
  <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
    Specialization
  </button>
  
  
  <ul className="dropdown-menu" aria-labelledby="dropdown">
    <li><a className="dropdown-item" href="#">Specialization 1</a></li>
    <li><a className="dropdown-item" href="#">Specialization 2</a></li>
    <li><a className="dropdown-item" href="#">Specialization 3</a></li>
  </ul>


</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default coachviewingpage