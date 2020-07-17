import React, { useState } from 'react';
import $ from 'jquery';
import './login_form.scss';
import printError from '../contact_us/printError';

const LoginForm = props => {
    const [isAuth, setIsAuth] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => login && login == 'admin' && password && password == 666
    

    const logging = (e) => {
        e.preventDefault();
        if(validate()) {
            localStorage.setItem('logged', true);
            setIsAuth('true');
        }
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