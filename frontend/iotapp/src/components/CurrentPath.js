import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { useContext } from "react";
import Contexte from "../Context";
function CurrentPath() {
    const {maskSidebar} = useContext(Contexte)
    const location = useLocation();
    const pathCurrent = location.pathname
    const pathContext = pathCurrent.split("/")
    console.log("pathContext: "+ pathContext);
    const contexts = pathContext.filter((_, index) => index !== 0)
    console.log(contexts);
    let path = '/';
    return (
        <>
        <div style={{height: 20}}></div>
        <div className={`${!maskSidebar? 'p-5 containerwithoutsidebar' : 'p-5 containerwithsidebar'}`}>
            <Link to="/">
                <i className='bi bi-house-fill bk-black text-dark'></i>
            </Link>
            {contexts.map((conte, index) => (
                <Link key={index}to={`${path+=conte+`/`}`}>
                    <span className="text-dark">/{conte}</span>
                </Link>
            )

            )}
            <hr />
        </div>
        </>
    )
}
export default CurrentPath;