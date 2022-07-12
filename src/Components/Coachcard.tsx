import React from 'react'
import "./Coachcard.css";

function CoachCard() {
  return (
    <div className="body">
        <div className="heading">
            <div className="head name-head">Lily-Ann Alvarez</div>
            <div className="head grow"></div>
            <div className="head boxborder">$50-$90</div>
            <div className="head btn2">See more about this Guru</div>
        </div>
        <div className="content">
        <div className="head name-head">Finanicial</div>
            Miami, FL
        </div>
    </div>
  )
}

export default CoachCard;