import React from 'react'
import '../App.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Main from '../components/Main'


function Gateway() {
  return (
    <div className='App'>
      <Sidebar/>
      <Navbar/>
      <Main layout="Gateway"/>
    </div>
  );
}

export default Gateway;