import React from 'react'
import '../App.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import CurrentPath from '../components/CurrentPath'
import CurrentContext from '../components/CurrentContext'

function Notifications() {
  return (
    <div className='App'>
      <Sidebar/>
      <Navbar/>
      <CurrentPath/>
      <CurrentContext/>
      <Main layout="Notifications"/>
    </div>
  );
}

export default Notifications;