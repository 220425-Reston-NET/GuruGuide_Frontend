import React from 'react'
import { Link } from 'react-router-dom'
import './coachviewingpage.css'
import CoachCard from '../../Components/Coachcard';
import Coachcarddropdown from '../../Components/coachcarddropdown';

function coachviewingpage() {
  return (
<div>
<Coachcarddropdown />
<CoachCard />
<CoachCard />
</div>




  )
}

export default coachviewingpage