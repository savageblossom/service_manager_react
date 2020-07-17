import React, { useState, useContext } from 'react';
import './login_form.scss';

import {AuthStoreContext} from '../../index';

const LoginForm = ({ history }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const store = useContext(AuthStoreContext);

    const validate = () => login && login == 'admin' && password && password == 666

    const logging = e => {
        e.preventDefault();
        validate() 
        ? store.performAuth()
        : alert('Invalid Credentials!')
        history.push("/home")
    }

    return (
        <div className="loginForm">
            <div className="container">

                <form id="formToLogin" className="loginForm__form" 
                        onSubmit={logging}>

                    <div className="form-group">
                        <h1>Welcome!</h1><br/>
                        <p>Please log in to continue</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="admin" value={login} onChange={e => setLogin(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="666" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="loginForm__btn btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}


export default LoginForm;