import React from 'react'
import '../App.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

function Device() {
  return (
    <div className='App'>
        <Sidebar/>
        <Navbar/>
        <Main layout="Device"/>
    </div>
  );
}

export default Device;