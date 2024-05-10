import React from 'react'
import '../App.css';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';
import Main from '../components/Main';

function Devices() {
  return (
    <div className='App'>
      <Sidebar/>
      <Navbar/>
      <Main layout="Devices"/>
    </div>
  );
}

export default Devices;