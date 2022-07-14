import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/NavbBar';
import Home from './Routes/home/home';
import Register from './Routes/register/register';
import Login from './Routes/login/login';
import Appointments from './Routes/appointments/Appointments';
import Registercoaches from './Routes/registerCoaches/registercoaches';
import Coachviewingpage from './Routes/CoachViewing/coachviewingpage';

function App() {
  return (
 
 <>
 <Nav />
 <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/registercoaches' element={<Registercoaches/>}/>
   <Route path='/coachviewingpage' element={<Coachviewingpage/>}/>
   <Route path='/appointments' element={<Appointments/>}/>

 </Routes>
    </>

    );
}

export default App;
