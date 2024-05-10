import React from 'react'
import '../App.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

function Notifications() {
  return (
    <div className='App'>
      <Sidebar/>
      <Navbar/>
      <Main layout="Notifications"/>
    </div>
  );
}

export default Notifications;