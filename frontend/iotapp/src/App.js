import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import  './App.css'; // Votre CSS personnalisé
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ContextePorvider} from './Context'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Devices from './pages/Devices'
import Device from './pages/Device'
import Gateways from './pages/Gateways'
import Gateway from './pages/Gateway'
import Notifications from './pages/Notifications'
import Notification from './pages/Notification'
import Profile from './pages/Profile'
import Login from './Auth/Login';
import Logout from './Auth/Login';
import Measures from './pages/Measures';


function App(){
    return (
        
            <div className="app">
                <BrowserRouter>
                    <ContextePorvider>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/Dashboard' element={<Dashboard/>}/>
                            <Route path='/Devices' element={<Devices/>}/>
                            <Route path='/Devices/:deviceId' element={<Device/>}/>
                            <Route path='/Devices/:deviceId/:measure' element={<Measures/>}/>
                            <Route path='/Gateways' element={<Gateways/>}/>
                            <Route path='/Gateways/:GatewayId' element={<Gateway/>}/>
                            <Route path='/Notifications' element={<Notifications/>}/>
                            <Route path='/Notifications/:deviceId' element={<Notification/>}/>
                            <Route path='/Profile' element={<Profile/>}/>
                            <Route path='/Login' element={<Login/>}/>
                            <Route path='/Logout' element={<Logout/>}/>
                        </Routes>
                    </ContextePorvider>  
                </BrowserRouter>
            </div>
    );
}

export default App;
