import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Contexte from '../Context';


function CurrentContext(props) {
    const {currentContext, maskSidebar}  = useContext(Contexte);
  return (
    <div className={`${!maskSidebar? 'containerwithoutsidebar': 'containerwithsidebar'}`}>
            <div className='d-flex align-items-center justify-content-between'>
                <h1>{currentContext}</h1>
                    {/* <div className="d-flex">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="bi bi-search"></i>
                        </span>
                    </div> */}
                    <Button variant="primary" className='me-3' ><i className='bi bi-plus'></i><span>Add {props.currentLayou}</span></Button>
                   
            </div>
            <hr />
        </div>
  )
}

export default CurrentContext