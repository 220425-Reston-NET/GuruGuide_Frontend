import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/NavBar';
import Home from './Routes/home/home';
import Register from './Routes/register/register';
import Login from './Routes/login/login';
import Appointments from './Routes/appointments/Appointments';

function App() {
  return (
    // const {isAuthenticated} = useAuth0();
  
 <>
 <Nav />
 <Routes>
   <Route path='/appointments' element={<Appointments/>}/>
   <Route path='/' element={<Home/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>

 </Routes>
    </>

    );
}

export default App;
