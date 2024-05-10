import React, { useContext } from 'react';
import Contexte from '../Context';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import Card1 from './Card';

const CurrentPath = () => {
    const location = useLocation();
    const pathCurrent = location.pathname
    const pathContext = pathCurrent.split("/")[1]
    return (
        <div className='h-50'>
            <i className='bi bi-house-fill'>{pathCurrent}</i>
        </div>
    )
}
const CurrentContext = (props) => {
    return (
        <div>
            <div>
                <h1>{props.currentLayou}</h1>
            </div>
        </div>
    )
}

function Main(props) {
    const { maskSidebar } = useContext(Contexte);
    const location = useLocation();
    const pathCurrent = location.pathname
    const pathContext = pathCurrent.split("/")[1]
    const layout = props.layout;
    return (
        <main className="main">
            {/* Contenu principal avec Bootstrap */}
            {layout === "Login" && (
                <div className='container'>
                    <form>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-secondary">
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </div>
            )
            }
            {layout === "Logout" && (
                <div className={`${!maskSidebar ? 'ms-5' : 'container'}`}>
                    <CurrentPath />
                    <CurrentContext currentLayou={props.layout} />
                    <Card1 pathContext_={pathContext} />
                </div>
            )
            }

        </main>
    );
}

export default Main;
