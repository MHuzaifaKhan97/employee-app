import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import { auth } from '../firebase/firebase';

const Login = () => {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const loggedIn = () => {
        console.log(email, password);

        auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                alert("Successfully Logged In");
                history.push("/")
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
        })
    })

    return (
        user ? history.push('/')
            : (<div className="container">
                <div className="py-4">
                    <div className="row mt-5">
                        <div className="col-md-8 offset-md-2">
                            <div className="login_box p-5">
                                <h1 className="text-center font-weight-bold py-2 text-uppercase">Employee System - Login</h1>

                                <div className="form-group py-2">
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email..." />
                                </div>
                                <div className="form-group py-2">
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Password..." />
                                </div>

                                <div className="form-group py-2">
                                    <button onClick={loggedIn} className="btn btn-primary btn-block btn-lg">
                                        <span className="fa fa-sign-in-alt mx-2"></span>
                                        <span className="text-uppercase font-weight-bold">Login</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    )
}
export default Login;