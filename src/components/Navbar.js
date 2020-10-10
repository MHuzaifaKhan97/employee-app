import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { auth } from '../firebase/firebase';

const Navbar = () => {

    const [user, setUser] = useState();
    let history = useHistory();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
        })
    })

    const logOut = () => {
        auth.signOut();
        history.push('/login')   
    }
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark py-3">
            <div className="container">
                <Link className="navbar-brand" to='/'>
                    <span className="fa fa-user mx-1"></span> Employee System
                </Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/"> <span className="fa fa-home"></span> Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/about"><span className="fa fa-info-circle"></span> About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/contact"><span className="fa fa-phone"></span> Contact</Link>
                    </li>
                    {
                        user ? <li className="nav-item">
                            <button onClick={logOut} className="btn btn-danger mx-3"><span className="fa fa-sign-out-alt"></span> logout </button>
                        </li> :
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/login"><span className="fa fa-sign-in-alt"></span> Login</Link>
                            </li>
                    }
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;

