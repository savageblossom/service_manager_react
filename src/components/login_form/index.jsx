import React, { useEffect } from 'react';
import $ from 'jquery';
import './login_form.scss';


const LoginForm = () => {
    
    const logging = () => {
        if( ($('#username').val() == 'admin') && ($('#password').val() == 666) ) {
            localStorage.setItem('logged', true)
        }
    }

    useEffect(() => {
        localStorage.setItem('logged', false);
    })

    return (
        <div className="loginForm">
            <div className="container">

                <form   id="formToLogin" className="loginForm__form" 
                        onSubmit={ e => { e.preventDefault(); 
                                    logging(); }}>

                    <div className="form-group">
                        <h1>Welcome!</h1><br/>
                        <p>Please log in to continue</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}


export default LoginForm;