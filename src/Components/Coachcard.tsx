import React from 'react'
import { Link } from 'react-router-dom';
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
            <div className="head sub-name">Miami FL</div>
            <div className="head grow"></div>
            <div className="bordercontent">Bio for Coach goes here Goes Here</div>
        </div>
        <div className="profile">
        <Link to="/" className="profileimg"><a href="https://cdn.discordapp.com/attachments/992177733377478808/994628683862134914/Lily-Ann-Coach.png"><img style={{ width: 165, height: 165,}} src="https://cdn.discordapp.com/attachments/992177733377478808/994628683862134914/Lily-Ann-Coach.png"/></a></Link>
        </div>
    </div>
  )
}

export default CoachCard;