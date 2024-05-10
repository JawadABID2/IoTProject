import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
const Dropdown__ =(props)=>{
    return (
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
          <i className="bi bi-person-circle">{props.user}</i>
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item href="#/login">logOut</Dropdown.Item>
            <hr/>
            <Dropdown.Item href="#/action-2">changer mot de passe</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
}
const Navbar = () => {
    return (
        <nav className="navbar bg-light" style={{ 'border': '1px solid #dee1e4' }}>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <a className="navbar-brand" href="/">Logo</a>
                <div className='d-flex'>
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="bi bi-search"></i>
                    </span>
                </div>
                <Dropdown__ user ="user"/>
               
            </div>
        </nav>
    );
}

export default Navbar;
