import React, { useContext } from 'react';
import Contexte from '../Context';
import { useLocation } from 'react-router-dom';
import Content from './Content';



function Main(props) {
    const { maskSidebar } = useContext(Contexte);
    const location = useLocation();
    const pathCurrent = location.pathname
    const pathContext = pathCurrent.split("/")[1]
    const layout = props.layout;
    return (
        <main className="main">


            <div className={`${!maskSidebar ? 'containerwithoutsidebar' : 'containerwithsidebar'}`}>
                {/* <CurrentPath /> */}
                {/* <Marge /> */}
                {/* <CurrentContext currentLayou={props.layout} /> */}
                {/* <Marge /> */}
                <Content layout={props.layout} />
            </div>


        </main>
    );
}

export default Main;
