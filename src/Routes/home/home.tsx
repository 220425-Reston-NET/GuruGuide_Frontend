import React from 'react'
import "./home.css";
import "./jscript";
import "./jscript2"

function Home() {
  
  function reveal2() {
    var reveals = document.querySelectorAll(".reveal2");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible =0;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active2");
      } else {
        reveals[i].classList.remove("active2");
      }
    }
  }
  window.addEventListener("scroll", reveal2);

  function reveal3() {
    var reveals = document.querySelectorAll(".reveal3");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible =0;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active3");
      } else {
        reveals[i].classList.remove("active3");
      }
    }
  }
  window.addEventListener("scroll", reveal3);

  

  const test = () =>
  {
    window.scrollTo(0,1000)
  }


  
  return (
    <div>
    <div className='column-layout'>
        <div className='left-side-container'>
            <p className='text-container'> Welcome To Guru Guide </p>
        </div>
        <div className="img-container">
        <a href="https://cdn.discordapp.com/attachments/970755382215606282/994449671181324318/Greetings_From_Guru_Guide.png"><img src="https://cdn.discordapp.com/attachments/970755382215606282/994449671181324318/Greetings_From_Guru_Guide.png" title="source: imgur.com" /></a>
        </div>
        <div className='right-side-container'>
        </div>
    </div>
    <div className='bottom-container'>
        <button type="button" className="btn btn-outline-primary btn-lg" onClick={test} style={{margin: 'auto'}}>About Us</button>
        <button type="button" className="btn btn-outline-success btn-lg" style={{margin: 'auto'}}>Im in Need of Guru Guidance</button>
        <button type="button" className="btn btn-outline-warning btn-lg" style={{margin: 'auto'}}>Im a New Guru</button>
        {/* <button type="button" className="btn btn-outline-info btn-lg" style={{margin: 'auto'}}>Trends</button> */}
    </div>

<div className="content">   
<div className="textBody">
    <div className="section1 reveal2" id="about">
        <h2>What is GuruGuide </h2>
        <div className="blueBar"></div>
        <p>Test</p>
        <button style={{color: 'rgb(4, 189, 189)', borderColor: 'rgb(4, 189, 189)'}} type="submit" className="btn btn-light btn-lg">Schedule an Appointment</button>
    </div>
    {/* <img src="https://i.imgur.com/bY1Rrs8.png" className="sideImage1 reveal3"/> */}
</div>
</div>
</div>
  )
}


export default Home