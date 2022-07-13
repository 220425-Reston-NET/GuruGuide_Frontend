import React from 'react'
import "./home.css";


function Home() {
  
  return (
  <div>
    <div className='column-layout'>
        <div className='container'>
          <a href="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png"><img style={{ width: 500, height: 500 }} src="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png" title="source: imgur.com" /></a>
          <a href="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png"><img style={{ width: 500, height: 500 }} src="https://cdn.discordapp.com/attachments/991749229183778817/994352372841189457/Screen_Shot_2022-07-06_at_4.50.03_PM.png" title="source: imgur.com" /></a>
        </div>
    </div>
    
    <div className='bottom-container24'>
      <button type="button" className="btn btn-primary btn-lg">I'm in Need of Guru Guidance</button>
      <button type="button" className="btn btn-primary btn-lg" >I'm a New Guru </button> 
    </div>
</div>
  )
}


export default Home