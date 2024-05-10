import React, { useContext, useEffect, useState } from 'react';
import Contexte from '../Context';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const [currentPath, setCurrentPath] = useState("Home");
    const { maskSidebar, setMaskSidebar } = useContext(Contexte);
    const handleMaskSidebar = () => {
        setMaskSidebar(!maskSidebar);
        console.log(maskSidebar);
    }
    const location = useLocation();
    useEffect(()=>{
        const path = location.pathname;
        const pathContext = path.split("/")[1]
        // console.log(path.split("/")[1]);
        if(pathContext ==="Dashboard") setCurrentPath("Dashboard")
        else if(pathContext ==="Devices") setCurrentPath("Devices")
        else if(pathContext==="Gateways") setCurrentPath("Gateways")
        else if(pathContext==="Notifications") setCurrentPath("Notifications")
        else if(pathContext==="Profile") setCurrentPath("Profile")
        else setCurrentPath("Home")

    })
    return (
        <div className="sidebar bg-gray">
            <div>
                <div className='d-flex'>
                    {maskSidebar && (

                        <span className='ms-3 fs-4 d-none d-sm-inline text-dark'>App IoT</span>

                    )
                    }
                    <span className='ms-auto me-1 fs-1 d-none d-sm-inline text-dark'><i className={` bi ${maskSidebar? 'bi-chevron-double-left':'bi-chevron-double-right'}`} onClick={handleMaskSidebar}></i></span>
                </div>
                <hr className='text-secondary d-none d-sm-block' />
                <ul className='nav nav-pills flex-column mt-3 mt-sm-0'>
                    <li className={`nav-item text-dark fs-4 my-1 py-2 py-sm-0 hover-color ${currentPath==='Home'?'bg-secondary':''}`}>
                        <Link to="/" className='text-dark'>
                            <i className='ms-3 bi bi-house-door'></i>
                            {maskSidebar && (
                                <span className='ms-3 d-none d-sm-inline'>Home</span>
                            )}
                        </Link>
                    </li>
                    <li className={`nav-item text-dark fs-4 my-1 py-2 py-sm-0 hover-color ${currentPath==='Dashboard'?'bg-secondary':''}`}>
                        <Link to="/Dashboard" className='text-dark'>
                            <i className='ms-3 bi bi-speedometer2'></i>
                            {maskSidebar && (
                                <span className='ms-3 d-none d-sm-inline'>Dashboard</span>
                            )}
                        </Link>
                    </li>
                    {/* bi bi-house-door */}
                    <li className={`nav-item text-dark fs-4 my-1 py-2 py-sm-0 hover-color ${currentPath === 'Devices'?'bg-secondary':''}`}>
                        <Link to="/Devices" className='text-dark'>
                            <i className='ms-3 bi bi-phone-vibrate-fill'></i>
                            {maskSidebar && (
                                <span className='ms-3 d-none d-sm-inline'>Devices</span>
                            )}
                        </Link>
                    </li>
                    <li className={`nav-item text-dark fs-4 my-1 py-2 py-sm-0 hover-color ${currentPath === 'Gateways'?'bg-secondary':''}`}>
                        <Link to="/Gateways" className='text-dark'>
                            <i className='ms-3 bi bi-broadcast-pin'></i>
                            {maskSidebar && (
                                <span className='ms-3 d-none d-sm-inline'>Gateways</span>
                            )}
                        </Link>
                    </li>
                    <li className={`nav-item text-dark fs-4 my-1 py-2 py-sm-0 hover-color ${currentPath === 'Notifications'?'bg-secondary':''}`}>
                        <Link to="/Notifications" className='text-dark'>
                            <i className='ms-3 bi bi-snapchat'></i>
                            {maskSidebar && (
                                <span className='ms-3 d-none d-sm-inline'>Notifications</span>
                            )}
                        </Link>
                    </li>
                    <li className={`nav-item text-dark fs-4 my-1 py-2 py-sm-0 hover-color ${currentPath === 'Profile'?'bg-secondary':''}`}>
                        <Link to="/Profile" className='text-dark'>
                            <i className='ms-3 bi bi-person'></i>
                            {maskSidebar && (
                                <span className='ms-3 d-none d-sm-inline'>Profile</span>
                            )}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
