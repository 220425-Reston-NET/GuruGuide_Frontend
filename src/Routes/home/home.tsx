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
      <p className='text-container'> Welcome To Guru Guide </p>
        <div className='left-side-container'>
        <a href="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png"><img style={{ width: 500 }} src="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png" title="source: imgur.com" /></a>
        <a href="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png"><img style={{ width: 500 }} src="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png" title="source: imgur.com" /></a>
        </div>
        <div className="img-container">
        </div>
        <div className='right-side-container'>
        </div>
    </div>
    <div className='bottom-container'>
        <button type="button" className="btn btn-outline-primary btn-lg" onClick={test} style={{margin: 'auto'}}>About Us</button>
        <button type="button" className="btn btn-outline-success btn-lg" style={{margin: 'auto'}}>I'm in Need of Guru Guidance</button>
        <button type="button" className="btn btn-outline-warning btn-lg" style={{margin: 'auto'}}>I'm a New Guru </button>
        {/* <button type="button" className="btn btn-outline-info btn-lg" style={{margin: 'auto'}}>Trends</button> */}
    </div>
</div>
  )
}


export default Home