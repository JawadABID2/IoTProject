import React from 'react'
import '../App.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

function Profile() {
  return (
    <div className='App'>
        <Sidebar/>
        <Navbar/>
        <Main layout="Profile"/>
    </div>
  );
}

export default Profile;