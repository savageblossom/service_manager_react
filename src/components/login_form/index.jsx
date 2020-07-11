import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './login_form.scss';


const LoginForm = props => {

    const [logged, setLogged] = useState('');

    const logging = () => {
        if( ($('#username').val() == 'admin') && ($('#password').val() == 666) ) {
            localStorage.setItem('logged', 'true');
            setLogged('true');
        }
    }

    useEffect(() => {
        props.isLogged(logged)
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
                        <input type="text" className="form-control" id="username" placeholder="admin" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="666" />
                    </div>
                    <button type="submit" className="loginForm__btn btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}


export default LoginForm;