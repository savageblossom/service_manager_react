import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './scss/index.scss';

import * as serviceWorker from './serviceWorker';



// import login form component
import LoginForm from './components/login_form';

// import main components
import Header from './components/header';
import GetStarted from './components/get_started';
import Stats from './components/stats';
import Services from './components/services';
import Testimonials from './components/testimonials';
import OurTeam from './components/our_team';
import ContactUs from './components/contact_us';
import Footer from './components/footer';


const checkLogged = (isLogged) => {
    console.log(isLogged);
}

ReactDOM.render(
  <React.StrictMode>
    <LoginForm checkLogged={this.checkLogged} />
    {/* <Header />
    <GetStarted />
    <Stats />
    <Services />
    <Testimonials />
    <OurTeam />
    <ContactUs />
    <Footer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
