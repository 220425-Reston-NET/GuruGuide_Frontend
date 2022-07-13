import React from 'react'
import "./home.css";
import "./jscript"
import "./jscript2"

function Home() {
    
  return (
  <div>
    <div className='column-layout'>
      {/* <p className='text-container'> Welcome To Guru Guide </p> */}
        <div className='container'>
        <a href="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png"><img style={{ width: 500 }} src="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png" title="source: imgur.com" /></a>
        <a href="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png"><img style={{ width: 500 }} src="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png" title="source: imgur.com" /></a>
        </div>
    </div>
    <div className='bottom-container'>
      <div className='button-button'>
        <div className='section1'>
        <button type="button" className="btn btn-primary btn-lg" style={{marginLeft: 400 }}>I'm in Need of Guru Guidance</button>
        </div>
        <div className='section2'>

        <button type="button" className="btn btn-primary btn-lg" style={{marginRight: 400 }}>I'm a New Guru </button>
        </div>
      </div>
    </div>
</div>
  )
}


export default Home